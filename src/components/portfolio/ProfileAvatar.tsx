import { useState } from "react";
import { cn } from "@/lib/utils";

const AVATAR_SOURCES = ["/profile.jpg", "/profile.webp", "/avatar.svg"] as const;

export function ProfileAvatar({ className }: { className?: string }) {
  const [srcIndex, setSrcIndex] = useState(0);
  const src = AVATAR_SOURCES[srcIndex];
  const isFallback = src === "/avatar.svg";

  return (
    <div className={cn("flex justify-center", className)}>
      {/* Above the fold: eager, fixed box so nothing shifts when it loads. */}
      <img
        src={src}
        alt="Ishan Sarvaiya"
        width={112}
        height={112}
        decoding="async"
        // React 18 only knows the camelCase prop in 19; spread the lowercase attribute.
        {...{ fetchpriority: "high" }}
        className={cn(
          "size-24 md:size-28 rounded-full object-cover border border-border",
          isFallback && "bg-surface-low p-4 object-contain",
        )}
        onError={() => {
          if (srcIndex < AVATAR_SOURCES.length - 1) {
            setSrcIndex((i) => i + 1);
          }
        }}
      />
    </div>
  );
}

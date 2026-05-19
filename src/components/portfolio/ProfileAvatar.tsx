import { useState } from "react";
import { cn } from "@/lib/utils";

const AVATAR_SOURCES = ["/profile.jpg", "/profile.webp", "/avatar.svg"] as const;

export function ProfileAvatar({ className }: { className?: string }) {
  const [srcIndex, setSrcIndex] = useState(0);
  const src = AVATAR_SOURCES[srcIndex];
  const isFallback = src === "/avatar.svg";

  return (
    <div className={cn("mx-auto mb-8", className)}>
      <img
        src={src}
        alt="Ishan Sarvaiya"
        className={cn(
          "w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-primary/40 shadow-[0_0_40px_hsl(var(--primary)/0.15)]",
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

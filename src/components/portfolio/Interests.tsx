import { INTERESTS, INTEREST_IMAGES } from "@/data/portfolio";
import { MaterialIcon } from "./MaterialIcon";

export function Interests() {
  return (
    <section className="py-24 px-8 bg-surface-mid overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="font-headline text-4xl font-bold mb-6">
            Off_Screen // Human_Element
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            When the terminal closes, the journey continues in the physical
            realm. Balance is the ultimate optimization.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {INTERESTS.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface-low rounded-lg flex items-center justify-center shrink-0 text-primary">
                  <MaterialIcon name={item.icon} />
                </div>
                <div>
                  <h4 className="font-mono text-sm uppercase mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-outline italic">{item.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {INTEREST_IMAGES.map((img, i) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={`rounded-2xl h-64 w-full object-cover grayscale ${
                i === 1 ? "mt-8" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

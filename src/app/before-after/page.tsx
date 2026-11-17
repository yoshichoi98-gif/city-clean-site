import type { Metadata } from "next";
import { beforeAfter } from "@/lib/data/before-after";
import { PageHeader, Section } from "@/components/ui";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Before / after",
  description:
    "Drag-to-compare before and after photographs.",
};

export default function BeforeAfterPage() {
  return (
    <>
      <PageHeader
        label="Before / after"
        title={<>Drag the handle. <span className="italic">That is the pitch.</span></>}
        lede="Same room, same camera angle. Drag the handle on any pair to see the difference a single visit makes."
      />
      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          {beforeAfter.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}

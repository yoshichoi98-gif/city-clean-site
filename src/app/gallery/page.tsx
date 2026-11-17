import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui";
import { GalleryGrid } from "@/components/gallery-grid";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Recent City Clean work across Seattle: homes, common areas, unit turns and post-construction cleanups.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        label="Gallery"
        title={<>Recent work, <span className="italic">around the city.</span></>}
        lede="Filter by the kind of job — homes, common areas, unit turns and post-construction cleanups across Seattle and the Eastside."
      />
      <Section>
        <GalleryGrid />
      </Section>
      <CtaBanner />
    </>
  );
}

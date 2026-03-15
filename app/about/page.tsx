import { PageHeader } from '@/components/page-header';
import { SectionWrapper } from '@/components/section-wrapper';

export default function AboutPage() {
  return (
    <SectionWrapper>
      <PageHeader
        eyebrow="Company"
        title="About X Centrix AI"
        description="AI-first business infrastructure for modern organizations."
      />
    </SectionWrapper>
  );
}

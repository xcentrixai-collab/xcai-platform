import { PageHeader } from '@/components/page-header';
import { SectionWrapper } from '@/components/section-wrapper';

export default function BlogPage() {
  return (
    <SectionWrapper>
      <PageHeader
        eyebrow="Insights"
        title="X Centrix AI Blog"
        description="Explore playbooks, trends, and product updates at the edge of applied AI infrastructure."
      />
    </SectionWrapper>
  );
}

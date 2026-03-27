import { notFound } from 'next/navigation';
import TopHeader from '@/components/layout/TopHeader';
import { SITUATIONS } from '@/data/situations';
import SituationDetail from '@/components/SituationDetail';

export async function generateStaticParams() {
  return SITUATIONS.map((s) => ({ slug: s.slug }));
}

export default function SituationDetailPage({ params }: { params: { slug: string } }) {
  const situation = SITUATIONS.find((s) => s.slug === params.slug);
  if (!situation) notFound();

  return (
    <>
      <TopHeader title={situation.titleKo} showBack />
      <SituationDetail situation={situation} />
    </>
  );
}

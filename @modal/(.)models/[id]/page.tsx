import { models } from '@/data/models';
import { ModelDetail } from '@/components/ModelDetail';
import { notFound } from 'next/navigation';

export default function ModelModal({ params }: { params: { id: string } }) {
  const model = models.find((m) => m.id === params.id);

  if (!model) {
    notFound();
  }

  return <ModelDetail model={model} />;
}

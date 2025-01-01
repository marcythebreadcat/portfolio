import { models } from '@/data/models';
import { ModelDetail } from '@/components/ModelDetail';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function ModelPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const model = models.find((m) => m.id === id);

  if (!model) {
    notFound();
  }

  return <ModelDetail model={model} />;
}
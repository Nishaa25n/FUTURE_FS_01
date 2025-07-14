import CategoryPage from './CategoryPage';
import { type Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'living-room' },
    { slug: 'bedroom' },
    { slug: 'dining-room' },
    { slug: 'office' },
  ];
}

export default function CategorySlugPage({ params }: PageProps) {
  return <CategoryPage categorySlug={params.slug} />;
}

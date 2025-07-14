import CategoryPage from './CategoryPage';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return [
    { slug: 'living-room' },
    { slug: 'bedroom' },
    { slug: 'dining-room' },
    { slug: 'office' },
  ];
}

export default function CategorySlugPage({ params }: { params: { slug: string } }) {
  return <CategoryPage categorySlug={params.slug} />;
}

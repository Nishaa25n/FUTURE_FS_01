import CategoryPage from './CategoryPage';

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<PageProps['params'][]> {
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

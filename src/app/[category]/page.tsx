import MainPageHeader from "@/components/Header/MainPageHeader";
import PostListSection from "@/components/PostListSection";
import getCategories from "@/utils/getCategories";
import { notFound } from "next/navigation";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

const Category = async ({ params }: CategoryPageProps) => {
  const resolvedParams = await params;

  const categories = getCategories();

  if (!categories.includes(resolvedParams.category)) {
    notFound();
  }

  return (
    <main className="w-full mx-auto min-h-[100dvh] h-full flex flex-col">
      <MainPageHeader className="desktop:hidden" />
      <PostListSection category={resolvedParams.category} />
    </main>
  );
};

export default Category;

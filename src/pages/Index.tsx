import BlogHeader from "@/components/BlogHeader";
import BlogHero from "@/components/BlogHero";
import FeaturedArticles from "@/components/FeaturedArticles";
import BlogNewsletter from "@/components/BlogNewsletter";
import BlogFooter from "@/components/BlogFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <BlogHero />
      <FeaturedArticles />
      <BlogNewsletter />
      <BlogFooter />
    </div>
  );
};

export default Index;

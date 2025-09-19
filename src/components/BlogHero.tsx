import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-blog.jpg";

const BlogHero = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary opacity-10"></div>
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Stories That
            </span>
            <br />
            <span className="text-foreground">Inspire & Inform</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover insights, tutorials, and stories from passionate writers and industry experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Reading
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Browse Topics
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
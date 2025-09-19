import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BlogNewsletter = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl opacity-90 mb-8">
            Get the latest articles and insights delivered straight to your inbox. No spam, just quality content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/70"
            />
            <Button variant="secondary" size="lg" className="whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
          
          <p className="text-sm opacity-70 mt-4">
            Join 2,500+ readers who trust our weekly newsletter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
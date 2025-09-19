import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

const BlogHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            BlogSpace
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Articles</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Categories</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
          <Button variant="default" size="sm">
            <UserPlus className="w-4 h-4 mr-2" />
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
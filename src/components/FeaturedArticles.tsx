import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge technologies and frameworks that are shaping the future of web development.",
    category: "Technology",
    author: "Sarah Chen",
    readTime: "8 min read",
    date: "Mar 15, 2024",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=faces"
  },
  {
    id: 2,
    title: "Building Sustainable Design Systems",
    excerpt: "Learn how to create design systems that scale with your organization and stand the test of time.",
    category: "Design",
    author: "Marcus Johnson",
    readTime: "12 min read",
    date: "Mar 12, 2024",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop&crop=faces"
  },
  {
    id: 3,
    title: "The Art of Technical Writing",
    excerpt: "Master the skills needed to communicate complex technical concepts clearly and effectively.",
    category: "Writing",
    author: "Elena Rodriguez",
    readTime: "6 min read",
    date: "Mar 10, 2024",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop&crop=faces"
  }
];

const FeaturedArticles = () => {
  return (
    <section className="py-24 bg-accent/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Articles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked stories from our community of writers and experts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-accent/20">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                      {article.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{article.author}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <span>{article.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
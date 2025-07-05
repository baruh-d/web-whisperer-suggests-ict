import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Eye, Tag, ArrowRight, Newspaper, Trophy, Users, Briefcase } from 'lucide-react';

const News = () => {
  const newsCategories = [
    { id: 'all', label: 'All News', icon: Newspaper },
    { id: 'projects', label: 'Project Spotlights', icon: Briefcase },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'team', label: 'Team News', icon: Users },
    { id: 'industry', label: 'Industry Insights', icon: Tag },
  ];

  const newsItems = [
    {
      id: 1,
      title: "OPPA Services Completes Major Video Wall Installation at KICC",
      excerpt: "Successfully delivered and installed a state-of-the-art 3x3 video wall system at the Kenyatta International Convention Centre, enhancing their conference capabilities.",
      category: 'projects',
      date: '2024-01-15',
      image: '/images/news/kicc-video-wall.jpg',
      featured: true
    },
    {
      id: 2,
      title: "New Partnership with Leading Global Tech Manufacturer",
      excerpt: "OPPA Services announces strategic partnership to bring cutting-edge networking solutions to the Kenyan market, expanding our service offerings.",
      category: 'achievements',
      date: '2024-01-10',
      image: '/images/news/partnership-announcement.jpg',
      featured: false
    },
    {
      id: 3,
      title: "Team Certification: Advanced Network Security Training",
      excerpt: "Our technical team successfully completed advanced cybersecurity certifications, further strengthening our security solutions expertise.",
      category: 'team',
      date: '2024-01-05',
      image: '/images/news/team-certification.jpg',
      featured: false
    },
    {
      id: 4,
      title: "Smart Office Automation Trends in 2024",
      excerpt: "Exploring the latest trends in office automation and how businesses can leverage smart technology to improve efficiency and reduce costs.",
      category: 'industry',
      date: '2023-12-28',
      image: '/images/news/smart-office-trends.jpg',
      featured: false
    },
    {
      id: 5,
      title: "OPPA Services Wins Best ICT Integrator Award",
      excerpt: "Recognized as the leading ICT systems integrator in Kenya at the annual Technology Excellence Awards ceremony.",
      category: 'achievements',
      date: '2023-12-20',
      image: '/images/news/award-ceremony.jpg',
      featured: false
    },
    {
      id: 6,
      title: "Successful CCTV System Deployment at Manufacturing Plant",
      excerpt: "Completed comprehensive security system installation including 64-camera CCTV network with AI-powered analytics for enhanced monitoring.",
      category: 'projects',
      date: '2023-12-15',
      image: '/images/news/manufacturing-cctv.jpg',
      featured: false
    }
  ];

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = newsCategories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Newspaper;
  };

  const getCategoryLabel = (category: string) => {
    const categoryData = newsCategories.find(cat => cat.id === category);
    return categoryData ? categoryData.label : 'News';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-corporate-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold font-poppins mb-6 animate-fade-in">
            News & Events
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Stay updated with our latest projects, achievements, and industry insights
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-accent/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {newsCategories.map((category) => (
              <Button
                key={category.id}
                variant={category.id === 'all' ? 'default' : 'outline'}
                className="flex items-center space-x-2 hover:scale-105 transition-all duration-300"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 font-poppins">Featured Story</h2>
            <Card className="overflow-hidden border-0 shadow-elite hover:shadow-hover transition-all duration-300 bg-gradient-card">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto bg-gradient-corporate">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Briefcase className="h-20 w-20 text-white/50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 text-white hover:bg-white/30">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="outline" className="flex items-center space-x-1">
                      {(() => {
                        const IconComponent = getCategoryIcon(featuredNews.category);
                        return <IconComponent className="h-3 w-3" />;
                      })()}
                      <span>{getCategoryLabel(featuredNews.category)}</span>
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(featuredNews.date)}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
                    {featuredNews.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  <Button className="w-fit bg-gradient-corporate hover:shadow-glow transition-all duration-300">
                    Read Full Story
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Regular News Grid */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 font-poppins">Latest Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item) => (
              <Card key={item.id} className="overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 bg-card group">
                <div className="relative h-48 bg-gradient-corporate">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {(() => {
                      const IconComponent = getCategoryIcon(item.category);
                      return <IconComponent className="h-12 w-12 text-white/50" />;
                    })()}
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-white/90 text-foreground border-white/20">
                      {getCategoryLabel(item.category)}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(item.date)}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-accent transition-colors">
                    <Eye className="h-4 w-4 mr-2" />
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Stay In The Loop</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Subscribe to our newsletter for the latest updates on projects, industry insights, and company news
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
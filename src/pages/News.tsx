import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, Eye, Tag, ArrowRight, Newspaper, Trophy, Users, 
  Briefcase, Building, Globe, Search, Mail, Share2, Clock, 
  BookOpen, ExternalLink, ChevronLeft, ChevronRight, Sparkles, CheckCircle
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import newsMediaCenterImage from '@/assets/news-media-center.jpg';
import blogPlaceholder from '@/assets/blog-placeholder.png';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NewsletterSignup from '@/components/NewsletterSignup';

// Mock data fallback
const MOCK_NEWS = [
  {
    id: '1',
    title: 'OPPA Services Launches New AI Platform',
    excerpt: 'Our company has developed an innovative AI solution for government agencies.',
    content: 'Full content here...',
    date: '2023-06-15',
    category: 'company',
    featured: true,
    imageUrl: '',
    author: 'Jane Doe',
    readTime: '3 min read'
  },
  {
    id: '2',
    title: 'Ministry of Health Partners with OPPA Services',
    excerpt: 'New digital health platform to be deployed nationwide.',
    content: 'Full content here...',
    date: '2023-05-20',
    category: 'ministry',
    featured: false,
    imageUrl: '',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'The Future of Cloud Computing in Government',
    excerpt: 'How cloud technologies are transforming public sector IT infrastructure.',
    content: 'Full content here...',
    date: '2023-04-10',
    category: 'industry',
    featured: false,
    imageUrl: '',
    author: 'John Smith',
    readTime: '5 min read'
  }
];

const MOCK_BLOG_POSTS = [
  {
    id: '1',
    title: 'The Future of Digital Government Services',
    excerpt: 'Exploring how technology is transforming public sector service delivery.',
    content: 'Full content here...',
    date: '2023-06-10',
    tags: ['technology', 'innovation'],
    author: {
      name: 'John Smith',
      avatar: '',
      role: 'CTO at OPPA Services'
    },
    readTime: '5 min read',
    imageUrl: '',
    slug: 'future-digital-government-services'
  },
  {
    id: '2',
    title: 'Leadership in the Digital Age',
    excerpt: 'How modern leaders can navigate technological disruption.',
    content: 'Full content here...',
    date: '2023-05-15',
    tags: ['leadership', 'innovation'],
    author: {
      name: 'Sarah Johnson',
      avatar: '',
      role: 'Director of Strategy'
    },
    readTime: '6 min read',
    imageUrl: '',
    slug: 'leadership-digital-age'
  },
  {
    id: '3',
    title: 'Case Study: Modernizing Tax Collection',
    excerpt: 'How we helped the revenue authority increase collections by 40%.',
    content: 'Full content here...',
    date: '2023-04-05',
    tags: ['case-studies', 'technology'],
    author: {
      name: 'Michael Chen',
      avatar: '',
      role: 'Project Manager'
    },
    readTime: '7 min read',
    imageUrl: '',
    slug: 'tax-collection-modernization'
  }
];

type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  featured: boolean;
  imageUrl?: string;
  author?: string;
  readTime?: string;
  externalUrl?: string;
};

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  readTime: string;
  imageUrl: string;
  slug: string;
};

const News = () => {
  // State management
  const [activeTab, setActiveTab] = useState<'news' | 'blog'>('news');
  const [newsCategory, setNewsCategory] = useState('all');
  const [blogCategory, setBlogCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [blogLoading, setBlogLoading] = useState(true);
  const [newsError, setNewsError] = useState<string | null>(null);
  const [blogError, setBlogError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Categories
  const newsCategories = [
    { id: 'all', label: 'All News', icon: Newspaper },
    { id: 'company', label: 'Company News', icon: Briefcase },
    { id: 'ministry', label: 'Ministry Updates', icon: Building },
    { id: 'private', label: 'Industry News', icon: Globe },
    { id: 'industry', label: 'Tech Insights', icon: Tag },
  ];

  const blogCategories = [
    { id: 'all', label: 'All Posts', icon: BookOpen },
    { id: 'technology', label: 'Technology', icon: Tag },
    { id: 'innovation', label: 'Innovation', icon: Trophy },
    { id: 'leadership', label: 'Leadership', icon: Users },
    { id: 'case-studies', label: 'Case Studies', icon: Briefcase },
  ];

  // Fetch data with mock fallback
  const fetchNews = async () => {
    try {
      setNewsLoading(true);
      const response = await fetch('https://api.example.com/news');
      const data = await response.json();
      setNews(data);
    } catch (err) {
      setNewsError('Failed to fetch news');
      toast({
        title: "Error loading news",
        description: "Using demo data instead",
        variant: "destructive",
      });
      setNews(MOCK_NEWS);
    } finally {
      setNewsLoading(false);
    }
  };

  const fetchBlogPosts = async () => {
    try {
      setBlogLoading(true);
      const response = await fetch('https://api.example.com/blog');
      const data = await response.json();
      setBlogPosts(data);
    } catch (err) {
      setBlogError('Failed to fetch blog posts');
      toast({
        title: "Error loading blog",
        description: "Using demo data instead",
        variant: "destructive",
      });
      setBlogPosts(MOCK_BLOG_POSTS);
    } finally {
      setBlogLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    fetchBlogPosts();
  }, []);

  // Filtering and pagination
  const filteredNews = useMemo(() => {
    let result = news;
    
    if (newsCategory !== 'all') {
      result = result.filter(item => item.category === newsCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query)
      );
    }
    
    return result;
  }, [news, newsCategory, searchQuery]);

  const filteredBlogPosts = useMemo(() => {
    let result = blogPosts;
    
    if (blogCategory !== 'all') {
      result = result.filter(post => post.tags.includes(blogCategory));
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
      );
    }
    
    return result;
  }, [blogPosts, blogCategory, searchQuery]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogPosts = filteredBlogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredBlogPosts.length / postsPerPage);

  const featuredNews = useMemo(() => news.find(item => item.featured), [news]);

  // Helper functions
  const getCategoryIcon = (category: string) => {
    const categoryData = newsCategories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Newspaper;
  };

  const getCategoryLabel = (category: string) => {
    const categoryData = newsCategories.find(cat => cat.id === category);
    return categoryData ? categoryData.label : 'News';
  };

  const getBlogCategoryIcon = (category: string) => {
    const categoryData = blogCategories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : BookOpen;
  };

  const getBlogCategoryLabel = (category: string) => {
    const categoryData = blogCategories.find(cat => cat.id === category);
    return categoryData ? categoryData.label : 'Blog Post';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [blogCategory, newsCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-hero text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url('${newsMediaCenterImage}')`,
            backgroundBlendMode: 'overlay',
            transform: 'translateZ(0)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-corporate-black/70 to-corporate-black/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold font-display mb-6 animate-fade-in-up">
            News & Media Center
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Stay updated with our latest projects, achievements, and industry insights
          </p>
          <div className="max-w-2xl mx-auto relative animate-fade-in-up delay-200">
            <Input
              placeholder="Search news and blog posts..."
              className="pl-12 pr-4 py-6 rounded-full border-0 shadow-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-0 z-10 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs 
            value={activeTab} 
            onValueChange={(value) => setActiveTab(value as 'news' | 'blog')}
            className="w-full"
          >
            <TabsList className="w-full bg-transparent h-16">
              <TabsTrigger 
                value="news" 
                className="text-lg px-6 data-[state=active]:shadow-none"
              >
                <Newspaper className="mr-2 h-5 w-5" />
                Company News
              </TabsTrigger>
              <TabsTrigger 
                value="blog" 
                className="text-lg px-6 data-[state=active]:shadow-none"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Our Blog
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* News Content */}
      {activeTab === 'news' && (
        <>
          <section className="py-8 bg-accent/10 border-b border-border sticky top-16 z-10 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {newsCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={newsCategory === category.id ? 'default' : 'outline'}
                    className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 rounded-full"
                    onClick={() => setNewsCategory(category.id)}
                  >
                    <category.icon className="h-4 w-4" />
                    <span>{category.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {featuredNews && !newsLoading && (
            <section className="py-16 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">Featured Story</h2>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    <Trophy className="h-4 w-4 mr-2" />
                    Editor's Pick
                  </Badge>
                </div>
                <Card className="overflow-hidden border-0 shadow-elite hover:shadow-glow transition-all duration-300 bg-gradient-card group">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-full bg-gradient-corporate">
                      {featuredNews.imageUrl ? (
                        <img 
                          src={featuredNews.imageUrl} 
                          alt={featuredNews.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Briefcase className="h-20 w-20 text-white/50" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
                          Featured
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        {featuredNews.author && (
                          <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                              <Users className="h-4 w-4" />
                            </div>
                            <span>{featuredNews.author}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge variant="outline" className="flex items-center space-x-1">
                          <Briefcase className="h-3 w-3" />
                          <span>{getCategoryLabel(featuredNews.category)}</span>
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(featuredNews.date)}
                        </div>
                        {featuredNews.readTime && (
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Clock className="h-4 w-4 mr-1" />
                            {featuredNews.readTime}
                          </div>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 font-display group-hover:text-primary transition-colors">
                        {featuredNews.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {featuredNews.excerpt}
                      </p>
                      <div className="flex items-center space-x-4">
                        <Button className="bg-gradient-corporate hover:shadow-glow transition-all duration-300">
                          Read Full Story
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </section>
          )}

          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">Latest Updates</h2>
              {newsLoading ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <Card key={i} className="overflow-hidden border-0 shadow-card">
                      <Skeleton className="h-48 w-full" />
                      <CardContent className="p-6">
                        <Skeleton className="h-4 w-24 mb-4" />
                        <Skeleton className="h-6 w-full mb-3" />
                        <Skeleton className="h-4 w-full mb-3" />
                        <Skeleton className="h-4 w-full mb-3" />
                        <Skeleton className="h-10 w-full mt-4" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : newsError ? (
                <div className="text-center py-12">
                  <div className="bg-destructive/10 p-8 rounded-lg inline-block">
                    <p className="text-destructive">{newsError}</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={fetchNews}
                    >
                      Retry
                    </Button>
                  </div>
                </div>
              ) : filteredNews.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium text-foreground">No news found</h3>
                  <p className="text-muted-foreground mt-2">
                    {searchQuery ? 'Try a different search term' : 'No news available in this category'}
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredNews.map((item) => (
                    <Card 
                      key={item.id} 
                      className="overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.02] bg-card group"
                    >
                      <div className="relative h-48 bg-gradient-corporate">
                        {item.imageUrl ? (
                          <img 
                            src={item.imageUrl} 
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            {(() => {
                              const IconComponent = getCategoryIcon(item.category);
                              return <IconComponent className="h-12 w-12 text-white/50" />;
                            })()}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <Badge variant="outline" className="bg-white/90 text-foreground border-white/20 backdrop-blur-sm">
                            {getCategoryLabel(item.category)}
                          </Badge>
                        </div>
                        {item.externalUrl && (
                          <div className="absolute top-4 right-4">
                            <Badge variant="outline" className="bg-white/90 text-foreground border-white/20 backdrop-blur-sm">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              External
                            </Badge>
                          </div>
                        )}
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
                        <div className="flex justify-between items-center">
                          <Button variant="outline" size="sm" className="group-hover:bg-accent transition-colors">
                            <Eye className="h-4 w-4 mr-2" />
                            Read More
                          </Button>
                          {item.readTime && (
                            <span className="text-xs text-muted-foreground flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {item.readTime}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* Blog Content */}
      {activeTab === 'blog' && (
        <>
          <section className="py-8 bg-accent/10 border-b border-border sticky top-16 z-10 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {blogCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={blogCategory === category.id ? 'default' : 'outline'}
                    className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 rounded-full"
                    onClick={() => setBlogCategory(category.id)}
                  >
                    <category.icon className="h-4 w-4" />
                    <span>{category.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-foreground font-display">Latest Articles</h2>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Search blog posts..."
                    className="pl-10 w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 text-muted-foreground" />
                </div>
              </div>

              {blogLoading ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <Card key={i} className="overflow-hidden border-0 shadow-card">
                      <Skeleton className="h-48 w-full" />
                      <CardContent className="p-6">
                        <Skeleton className="h-4 w-24 mb-4" />
                        <Skeleton className="h-6 w-full mb-3" />
                        <Skeleton className="h-4 w-full mb-3" />
                        <Skeleton className="h-4 w-full mb-3" />
                        <div className="flex items-center mt-4 space-x-4">
                          <Skeleton className="h-10 w-10 rounded-full" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : blogError ? (
                <div className="text-center py-12">
                  <div className="bg-destructive/10 p-8 rounded-lg inline-block">
                    <p className="text-destructive">{blogError}</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={fetchBlogPosts}
                    >
                      Retry
                    </Button>
                  </div>
                </div>
              ) : filteredBlogPosts.length === 0 ? (
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium text-foreground">No blog posts found</h3>
                  <p className="text-muted-foreground mt-2">
                    {searchQuery ? 'Try a different search term' : 'No posts available in this category'}
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentBlogPosts.map((post) => (
                      <Card 
                        key={post.id} 
                        className="overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.02] bg-card group"
                      >
                        <div className="relative h-48 bg-gradient-corporate">
                          <img 
                            src={post.imageUrl || blogPlaceholder} 
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map(tag => (
                              <Badge 
                                key={tag} 
                                variant="outline" 
                                className="bg-white/90 text-foreground border-white/20 backdrop-blur-sm"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center text-muted-foreground text-sm mb-3">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(post.date)}
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                          <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex justify-between items-center mt-4">
                            <div className="flex items-center space-x-3">
                              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center overflow-hidden">
                                {post.author.avatar ? (
                                  <img 
                                    src={post.author.avatar} 
                                    alt={post.author.name}
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <Users className="h-4 w-4 text-muted-foreground" />
                                )}
                              </div>
                              <div>
                                <p className="text-sm font-medium">{post.author.name}</p>
                                <p className="text-xs text-muted-foreground">{post.author.role}</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-muted-foreground">
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                          let pageNum;
                          if (totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (currentPage <= 3) {
                            pageNum = i + 1;
                          } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                          } else {
                            pageNum = currentPage - 2 + i;
                          }
                          return (
                            <Button
                              key={pageNum}
                              variant={currentPage === pageNum ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setCurrentPage(pageNum)}
                            >
                              {pageNum}
                            </Button>
                          );
                        })}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </>
      )}

     {/* Newsletter Signup */}
    <NewsletterSignup />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default News;
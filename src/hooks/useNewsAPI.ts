import { useState, useEffect } from 'react';

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: 'ministry' | 'private' | 'company' | 'industry';
  date: string;
  source: string;
  url?: string;
  featured: boolean;
}

// Mock API data - replace with actual API calls
const mockNewsData: NewsItem[] = [
  {
    id: 1,
    title: "Kenya's Digital Transformation Strategy 2024-2030 Launched",
    excerpt: "The Ministry of ICT, Innovation and Youth Affairs unveils comprehensive strategy to accelerate Kenya's digital economy growth through improved infrastructure and digital literacy programs.",
    category: 'ministry',
    date: '2024-01-20',
    source: 'Ministry of ICT Kenya',
    url: 'https://www.ict.go.ke',
    featured: true
  },
  {
    id: 2,
    title: "OPPA Services Completes Major Video Wall Installation at KICC",
    excerpt: "Successfully delivered and installed a state-of-the-art 3x3 video wall system at the Kenyatta International Convention Centre, enhancing their conference capabilities.",
    category: 'company',
    date: '2024-01-15',
    source: 'OPPA Services',
    featured: false
  },
  {
    id: 3,
    title: "Kenya Leads East Africa in 5G Network Deployment",
    excerpt: "New report shows Kenya has deployed the most comprehensive 5G infrastructure in the region, with major telecom providers expanding coverage to rural areas.",
    category: 'private',
    date: '2024-01-12',
    source: 'Tech News Kenya',
    featured: false
  },
  {
    id: 4,
    title: "Cybersecurity Threats Rise 35% in East Africa - New Regulations Proposed",
    excerpt: "Ministry of ICT reports significant increase in cyber attacks, announces new cybersecurity framework for businesses and government institutions.",
    category: 'ministry',
    date: '2024-01-10',
    source: 'Ministry of ICT Kenya',
    featured: false
  },
  {
    id: 5,
    title: "OPPA Services Partners with Leading Global Tech Manufacturer",
    excerpt: "Strategic partnership announced to bring cutting-edge networking solutions to the Kenyan market, expanding our service offerings and technical capabilities.",
    category: 'company',
    date: '2024-01-08',
    source: 'OPPA Services',
    featured: false
  },
  {
    id: 6,
    title: "Smart City Initiatives Gain Momentum Across Kenya",
    excerpt: "Multiple counties launch smart city projects focusing on digital governance, smart mobility, and IoT infrastructure development.",
    category: 'industry',
    date: '2024-01-05',
    source: 'Kenya IT News',
    featured: false
  }
];

export const useNewsAPI = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In production, replace this with actual API calls to:
        // 1. Ministry of ICT Kenya API/RSS feed
        // 2. Private news sources (Nation, Standard, etc.)
        // 3. Company internal news system
        
        setNews(mockNewsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        setError(null);
      } catch (err) {
        setError('Failed to fetch news');
        console.error('News fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const getNewsByCategory = (category: string) => {
    if (category === 'all') return news;
    return news.filter(item => item.category === category);
  };

  const getFeaturedNews = () => {
    return news.find(item => item.featured);
  };

  return {
    news,
    loading,
    error,
    getNewsByCategory,
    getFeaturedNews
  };
};
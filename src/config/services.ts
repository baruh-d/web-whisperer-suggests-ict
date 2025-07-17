import {
  Server, Shield, Mic, Cpu, Users, Code, Network, Cloud, Cable,
  Camera, Lock, AlertTriangle, Flame, Video, Volume2, Monitor, Tv,
  Home, Wifi, Lightbulb, Clock, UserCheck, Heart, BarChart3, Users2,
  Code2, Database, ArrowRight, Zap
} from 'lucide-react';

// Standardized icon mapping with proper types
export const iconMap = {
  Server,
  Shield,
  Mic,
  Cpu,
  Users,
  Code,
  Network,
  Cloud,
  Cable,
  Camera,
  Lock,
  AlertTriangle,
  Flame,
  Video,
  Volume2,
  Monitor,
  Tv,
  Home,
  Wifi,
  Lightbulb,
  Clock,
  UserCheck,
  Heart,
  BarChart3,
  Users2,
  Code2,
  Database,
} as const;

// Standardized service interface
export interface Service {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  image: string;
  icon: keyof typeof iconMap;
  pricing?: {
    startingPrice?: number;
    currency?: string;
    billingType?: 'one-time' | 'monthly' | 'annual';
  };
  metadata?: {
    estimatedDelivery?: string;
    complexity?: 'low' | 'medium' | 'high';
    targetAudience?: string[];
    tags?: string[];
  };
}

// Standardized category interface
export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  color: string;
  order?: number;
  isActive?: boolean;
}

// Standardized service categories
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'infrastructure',
    title: 'ICT Infrastructure',
    description: 'Complete network solutions and infrastructure services',
    icon: 'Server',
    color: 'primary',
    order: 1,
    isActive: true,
  },
  {
    id: 'security',
    title: 'Security Solutions',
    description: 'Comprehensive security systems and access control',
    icon: 'Shield',
    color: 'kenya-red',
    order: 2,
    isActive: true,
  },
  {
    id: 'communication',
    title: 'Communication & AV',
    description: 'Audio-visual and communication systems',
    icon: 'Mic',
    color: 'brand-blue',
    order: 3,
    isActive: true,
  },
  {
    id: 'automation',
    title: 'Automation & Smart Tech',
    description: 'Smart building and automation solutions',
    icon: 'Cpu',
    color: 'primary-light',
    order: 4,
    isActive: true,
  },
  {
    id: 'people',
    title: 'People & Engagement',
    description: 'Human resources and engagement solutions',
    icon: 'Users',
    color: 'kenya-black',
    order: 5,
    isActive: true,
  },
  {
    id: 'software',
    title: 'Software & Enterprise',
    description: 'Enterprise software and business solutions',
    icon: 'Code',
    color: 'brand-blue-light',
    order: 6,
    isActive: true,
  },
];

// Standardized services data
export const services: Service[] = [
  // ICT Infrastructure Services
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    category: 'ICT Infrastructure',
    categoryId: 'infrastructure',
    shortDescription: 'Complete network design, implementation, and management',
    fullDescription: 'Comprehensive network infrastructure solutions including LAN/WAN setup, fiber optic installations, wireless networks, and network security implementations.',
    features: ['LAN/WAN Design', 'Fiber Optic Installation', 'Wireless Networks', 'Network Security'],
    benefits: ['Reliable Connectivity', 'Scalable Solutions', 'Enhanced Security', '24/7 Support'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    icon: 'Network',
    pricing: {
      startingPrice: 150000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '2-4 weeks',
      complexity: 'high',
      targetAudience: ['Enterprise', 'SME', 'Government'],
      tags: ['networking', 'infrastructure'],
    }
  },
  {
    id: 'data-center',
    title: 'Data Center Solutions',
    category: 'ICT Infrastructure',
    categoryId: 'infrastructure',
    shortDescription: 'Modern data center design and implementation',
    fullDescription: 'Complete data center solutions including server rooms, cooling systems, power management, and disaster recovery setups.',
    features: ['Server Room Design', 'Cooling Systems', 'Power Management', 'Disaster Recovery'],
    benefits: ['High Availability', 'Energy Efficient', 'Scalable Infrastructure', 'Business Continuity'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    icon: 'Server',
    pricing: {
      startingPrice: 500000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '4-8 weeks',
      complexity: 'high',
      targetAudience: ['Enterprise', 'Government'],
      tags: ['data-center', 'servers'],
    }
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    category: 'ICT Infrastructure',
    categoryId: 'infrastructure',
    shortDescription: 'Cloud migration and management services',
    fullDescription: 'Professional cloud services including migration strategies, hybrid cloud setups, and ongoing cloud infrastructure management.',
    features: ['Cloud Migration', 'Hybrid Solutions', 'Infrastructure Management', 'Cost Optimization'],
    benefits: ['Reduced Costs', 'Improved Flexibility', 'Enhanced Security', 'Global Accessibility'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
    icon: 'Cloud',
    pricing: {
      startingPrice: 25000,
      currency: 'KSH',
      billingType: 'monthly',
    },
    metadata: {
      estimatedDelivery: '1-3 weeks',
      complexity: 'medium',
      targetAudience: ['SME', 'Enterprise', 'Startups'],
      tags: ['cloud', 'migration'],
    }
  },
  {
    id: 'structured-cabling',
    title: 'Structured Cabling',
    category: 'ICT Infrastructure',
    categoryId: 'infrastructure',
    shortDescription: 'Professional cabling and connectivity solutions',
    fullDescription: 'Complete structured cabling systems for voice, data, and video communications with Cat6/Cat7 installations and fiber optic solutions.',
    features: ['Cat6/Cat7 Installation', 'Fiber Optic Cabling', 'Cable Management', 'Testing & Certification'],
    benefits: ['Future-Proof Infrastructure', 'Organized Systems', 'Reduced Downtime', 'Professional Standards'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    icon: 'Cable',
    pricing: {
      startingPrice: 80000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '1-2 weeks',
      complexity: 'medium',
      targetAudience: ['Enterprise', 'SME', 'Education'],
      tags: ['cabling', 'network'],
    }
  },

  // Security Solutions
  {
    id: 'cctv-surveillance',
    title: 'CCTV Surveillance',
    category: 'Security Solutions',
    categoryId: 'security',
    shortDescription: 'Advanced video surveillance systems',
    fullDescription: 'Complete CCTV surveillance solutions with HD cameras, NVR systems, remote monitoring, and AI-powered analytics.',
    features: ['HD/4K Cameras', 'NVR Systems', 'Remote Monitoring', 'AI Analytics'],
    benefits: ['Enhanced Security', 'Real-time Monitoring', 'Evidence Collection', 'Crime Prevention'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    icon: 'Camera',
    pricing: {
      startingPrice: 120000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '3-5 days',
      complexity: 'medium',
      targetAudience: ['Retail', 'Enterprise', 'Residential'],
      tags: ['security', 'surveillance'],
    }
  },
  {
    id: 'access-control',
    title: 'Access Control Systems',
    category: 'Security Solutions',
    categoryId: 'security',
    shortDescription: 'Electronic access control and management',
    fullDescription: 'Sophisticated access control systems including card readers, biometric scanners, and centralized management software.',
    features: ['Card Readers', 'Biometric Scanners', 'Centralized Management', 'Audit Trails'],
    benefits: ['Controlled Access', 'Enhanced Security', 'Detailed Reporting', 'Easy Management'],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
    icon: 'Lock',
    pricing: {
      startingPrice: 180000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '1-2 weeks',
      complexity: 'medium',
      targetAudience: ['Corporate', 'Government', 'Healthcare'],
      tags: ['security', 'access'],
    }
  },
  {
    id: 'alarm-systems',
    title: 'Alarm Systems',
    category: 'Security Solutions',
    categoryId: 'security',
    shortDescription: 'Comprehensive security alarm solutions',
    fullDescription: 'Advanced alarm systems with motion detectors, door/window sensors, and 24/7 monitoring capabilities.',
    features: ['Motion Detectors', 'Door/Window Sensors', '24/7 Monitoring', 'Mobile Alerts'],
    benefits: ['Immediate Alerts', 'Professional Monitoring', 'Quick Response', 'Peace of Mind'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
    icon: 'AlertTriangle',
    pricing: {
      startingPrice: 75000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '1 week',
      complexity: 'low',
      targetAudience: ['Residential', 'SME'],
      tags: ['security', 'alarm'],
    }
  },
  {
    id: 'fire-safety',
    title: 'Fire Safety Systems',
    category: 'Security Solutions',
    categoryId: 'security',
    shortDescription: 'Fire detection and suppression systems',
    fullDescription: 'Complete fire safety solutions including smoke detectors, sprinkler systems, and emergency evacuation systems.',
    features: ['Smoke Detectors', 'Sprinkler Systems', 'Emergency Lighting', 'Evacuation Systems'],
    benefits: ['Life Protection', 'Property Safety', 'Compliance', 'Early Detection'],
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2',
    icon: 'Flame',
    pricing: {
      startingPrice: 150000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '2-3 weeks',
      complexity: 'medium',
      targetAudience: ['Enterprise', 'Commercial', 'Healthcare'],
      tags: ['security', 'fire-safety'],
    }
  },

  // Communication & AV
  {
    id: 'video-conferencing',
    title: 'Video Conferencing',
    category: 'Communication & AV',
    categoryId: 'communication',
    shortDescription: 'Professional video conferencing solutions',
    fullDescription: 'Complete video conferencing setups with HD cameras, professional audio, and collaboration tools for modern workplaces.',
    features: ['HD Cameras', 'Professional Audio', 'Screen Sharing', 'Recording Capabilities'],
    benefits: ['Remote Collaboration', 'Cost Savings', 'Productivity Boost', 'Global Connectivity'],
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04',
    icon: 'Video',
    pricing: {
      startingPrice: 250000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '1-3 weeks',
      complexity: 'medium',
      targetAudience: ['Corporate', 'Education', 'Government'],
      tags: ['communication', 'collaboration'],
    }
  },
  {
    id: 'sound-systems',
    title: 'Sound Systems',
    category: 'Communication & AV',
    categoryId: 'communication',
    shortDescription: 'Professional audio and sound systems',
    fullDescription: 'High-quality sound systems for conferences, events, and public spaces with speakers, amplifiers, and mixing consoles.',
    features: ['Professional Speakers', 'Mixing Consoles', 'Wireless Microphones', 'Audio Processing'],
    benefits: ['Crystal Clear Audio', 'Reliable Performance', 'Easy Operation', 'Professional Quality'],
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
    icon: 'Volume2',
    pricing: {
      startingPrice: 180000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '1-2 weeks',
      complexity: 'medium',
      targetAudience: ['Corporate', 'Education', 'Entertainment'],
      tags: ['audio', 'communication'],
    }
  },
  {
    id: 'digital-signage',
    title: 'Digital Signage',
    category: 'Communication & AV',
    categoryId: 'communication',
    shortDescription: 'Dynamic digital display solutions',
    fullDescription: 'Interactive digital signage solutions with content management systems for advertising, information display, and wayfinding.',
    features: ['LED/LCD Displays', 'Content Management', 'Remote Updates', 'Interactive Touch'],
    benefits: ['Dynamic Content', 'Cost Effective', 'Eye-catching Display', 'Easy Updates'],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
    icon: 'Monitor',
    pricing: {
      startingPrice: 200000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '2-3 weeks',
      complexity: 'medium',
      targetAudience: ['Retail', 'Corporate', 'Hospitality'],
      tags: ['display', 'communication'],
    }
  },
  {
    id: 'video-walls',
    title: 'Video Walls',
    category: 'Communication & AV',
    categoryId: 'communication',
    shortDescription: 'Large-scale video wall installations',
    fullDescription: 'Impressive video wall displays for control rooms, lobbies, and event spaces with seamless content management.',
    features: ['Seamless Displays', 'Content Management', 'Multi-source Input', 'Custom Configurations'],
    benefits: ['Visual Impact', 'Information Hub', 'Scalable Solutions', 'Professional Installation'],
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    icon: 'Tv',
    pricing: {
      startingPrice: 500000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '3-4 weeks',
      complexity: 'high',
      targetAudience: ['Corporate', 'Government', 'Control Rooms'],
      tags: ['display', 'video'],
    }
  },

  // Automation & Smart Tech
  {
    id: 'building-automation',
    title: 'Building Automation',
    category: 'Automation & Smart Tech',
    categoryId: 'automation',
    shortDescription: 'Smart building control systems',
    fullDescription: 'Intelligent building automation systems for HVAC, lighting, and energy management with IoT integration.',
    features: ['HVAC Control', 'Lighting Management', 'Energy Monitoring', 'IoT Integration'],
    benefits: ['Energy Savings', 'Comfort Control', 'Reduced Costs', 'Environmental Impact'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
    icon: 'Home',
    pricing: {
      startingPrice: 300000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '3-5 weeks',
      complexity: 'high',
      targetAudience: ['Commercial', 'Industrial', 'Smart Homes'],
      tags: ['automation', 'iot'],
    }
  },
  {
    id: 'iot-solutions',
    title: 'IoT Solutions',
    category: 'Automation & Smart Tech',
    categoryId: 'automation',
    shortDescription: 'Internet of Things implementations',
    fullDescription: 'Custom IoT solutions for asset tracking, environmental monitoring, and smart device integration.',
    features: ['Asset Tracking', 'Environmental Monitoring', 'Smart Sensors', 'Data Analytics'],
    benefits: ['Real-time Insights', 'Predictive Maintenance', 'Operational Efficiency', 'Cost Reduction'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176',
    icon: 'Wifi',
    pricing: {
      startingPrice: 250000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '4-6 weeks',
      complexity: 'high',
      targetAudience: ['Industrial', 'Agriculture', 'Logistics'],
      tags: ['iot', 'automation'],
    }
  },
  {
    id: 'smart-lighting',
    title: 'Smart Lighting',
    category: 'Automation & Smart Tech',
    categoryId: 'automation',
    shortDescription: 'Intelligent lighting control systems',
    fullDescription: 'Smart lighting solutions with automated controls, energy monitoring, and mobile app management.',
    features: ['Automated Controls', 'Energy Monitoring', 'Mobile App', 'Scene Management'],
    benefits: ['Energy Efficiency', 'Convenience', 'Cost Savings', 'Enhanced Ambiance'],
    image: 'https://images.unsplash.com/photo-1524634126442-357e0eac3c14',
    icon: 'Lightbulb',
    pricing: {
      startingPrice: 150000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '2-3 weeks',
      complexity: 'medium',
      targetAudience: ['Commercial', 'Residential', 'Hospitality'],
      tags: ['automation', 'lighting'],
    }
  },

  // People & Engagement
  {
    id: 'time-attendance',
    title: 'Time & Attendance',
    category: 'People & Engagement',
    categoryId: 'people',
    shortDescription: 'Automated time tracking systems',
    fullDescription: 'Modern time and attendance systems with biometric scanners, mobile apps, and comprehensive reporting.',
    features: ['Biometric Scanners', 'Mobile Apps', 'Comprehensive Reporting', 'Payroll Integration'],
    benefits: ['Accurate Tracking', 'Reduced Admin', 'Compliance', 'Cost Control'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    icon: 'Clock',
    pricing: {
      startingPrice: 120000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '1-2 weeks',
      complexity: 'medium',
      targetAudience: ['Corporate', 'Manufacturing', 'Retail'],
      tags: ['hr', 'attendance'],
    }
  },
  {
    id: 'visitor-management',
    title: 'Visitor Management',
    category: 'People & Engagement',
    categoryId: 'people',
    shortDescription: 'Digital visitor registration systems',
    fullDescription: 'Professional visitor management systems with digital check-in, badge printing, and host notifications.',
    features: ['Digital Check-in', 'Badge Printing', 'Host Notifications', 'Visitor Analytics'],
    benefits: ['Professional Image', 'Enhanced Security', 'Streamlined Process', 'Detailed Records'],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
    icon: 'UserCheck',
    pricing: {
      startingPrice: 100000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '1 week',
      complexity: 'low',
      targetAudience: ['Corporate', 'Government', 'Healthcare'],
      tags: ['security', 'visitor'],
    }
  },
  {
    id: 'employee-engagement',
    title: 'Employee Engagement',
    category: 'People & Engagement',
    categoryId: 'people',
    shortDescription: 'Digital engagement platforms',
    fullDescription: 'Employee engagement platforms with surveys, feedback systems, and communication tools.',
    features: ['Employee Surveys', 'Feedback Systems', 'Communication Tools', 'Analytics Dashboard'],
    benefits: ['Improved Morale', 'Better Communication', 'Data-driven Insights', 'Retention'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    icon: 'Heart',
    pricing: {
      startingPrice: 50000,
      currency: 'KSH',
      billingType: 'monthly',
    },
    metadata: {
      estimatedDelivery: '2-4 weeks',
      complexity: 'medium',
      targetAudience: ['Corporate', 'SME'],
      tags: ['hr', 'engagement'],
    }
  },

  // Software & Enterprise
  {
    id: 'erp-systems',
    title: 'ERP Systems',
    category: 'Software & Enterprise',
    categoryId: 'software',
    shortDescription: 'Enterprise resource planning solutions',
    fullDescription: 'Comprehensive ERP systems for finance, HR, inventory, and operations management with custom integrations.',
    features: ['Financial Management', 'HR Module', 'Inventory Control', 'Custom Integrations'],
    benefits: ['Streamlined Operations', 'Data Integration', 'Improved Efficiency', 'Better Reporting'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    icon: 'BarChart3',
    pricing: {
      startingPrice: 1000000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '6-12 weeks',
      complexity: 'high',
      targetAudience: ['Enterprise', 'Manufacturing', 'Distribution'],
      tags: ['software', 'enterprise'],
    }
  },
  {
    id: 'crm-solutions',
    title: 'CRM Solutions',
    category: 'Software & Enterprise',
    categoryId: 'software',
    shortDescription: 'Customer relationship management systems',
    fullDescription: 'Advanced CRM solutions for customer management, sales tracking, and marketing automation.',
    features: ['Customer Management', 'Sales Tracking', 'Marketing Automation', 'Analytics'],
    benefits: ['Better Customer Service', 'Increased Sales', 'Marketing Efficiency', 'Data Insights'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
    icon: 'Users2',
    pricing: {
      startingPrice: 300000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '4-8 weeks',
      complexity: 'medium',
      targetAudience: ['Sales', 'Marketing', 'Service'],
      tags: ['software', 'crm'],
    }
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    category: 'Software & Enterprise',
    categoryId: 'software',
    shortDescription: 'Bespoke software solutions',
    fullDescription: 'Custom software development services for web applications, mobile apps, and enterprise solutions.',
    features: ['Web Applications', 'Mobile Apps', 'Enterprise Solutions', 'API Development'],
    benefits: ['Tailored Solutions', 'Competitive Advantage', 'Scalability', 'Integration'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    icon: 'Code2',
    pricing: {
      startingPrice: 500000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '8-12 weeks',
      complexity: 'high',
      targetAudience: ['All Industries'],
      tags: ['software', 'development'],
    }
  },
  {
    id: 'database-management',
    title: 'Database Management',
    category: 'Software & Enterprise',
    categoryId: 'software',
    shortDescription: 'Database design and administration',
    fullDescription: 'Professional database services including design, optimization, backup, and recovery solutions.',
    features: ['Database Design', 'Performance Optimization', 'Backup Solutions', 'Recovery Planning'],
    benefits: ['Data Security', 'High Performance', 'Reliable Backups', 'Quick Recovery'],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
    icon: 'Database',
    pricing: {
      startingPrice: 200000,
      currency: 'KSH',
      billingType: 'one-time',
    },
    metadata: {
      estimatedDelivery: '4-6 weeks',
      complexity: 'high',
      targetAudience: ['Enterprise', 'Financial', 'Healthcare'],
      tags: ['software', 'database'],
    }
  }
];

// Standardized utility functions
export const getServiceById = (id: string): Service | undefined => {
  try {
    return services.find((service) => service.id === id);
  } catch (error) {
    console.error('Error finding service:', error);
    return undefined;
  }
};

export const getServicesByCategory = (categoryId: string): Service[] => {
  try {
    return services
      .filter((service) => service.categoryId === categoryId)
      .sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error('Error filtering services by category:', error);
    return [];
  }
};

export const getCategoryById = (id: string): ServiceCategory | undefined => {
  try {
    return serviceCategories.find((category) => category.id === id);
  } catch (error) {
    console.error('Error finding category:', error);
    return undefined;
  }
};

export const getActiveCategories = (): ServiceCategory[] => {
  return serviceCategories
    .filter((category) => category.isActive !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
};

export const getFeaturedServices = (limit = 6): Service[] => {
  return services
    .filter((service) => service.metadata?.tags?.includes('featured'))
    .slice(0, limit);
};
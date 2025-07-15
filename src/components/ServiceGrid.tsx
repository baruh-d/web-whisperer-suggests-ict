import React, { useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Server, Shield, Mic, Cpu, Users, Code } from 'lucide-react';

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface ServicesGridProps {
  serviceCategories: ServiceCategory[];
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Optimized node creation with more organic patterns
  const createNodes = useMemo(() => {
    return (canvas: HTMLCanvasElement) => {
      const nodes = [];
      // Calculate node count based on container size
      const nodeCount = Math.min(40, Math.max(20, Math.floor((canvas.width * canvas.height) / 4000)));
      
      // Create clusters of nodes
      const clusterCount = 3 + Math.floor(Math.random() * 3);
      const clusters = Array.from({ length: clusterCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 50 + Math.random() * 100
      }));

      for (let i = 0; i < nodeCount; i++) {
        // Assign nodes to clusters
        const cluster = clusters[i % clusterCount];
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * cluster.radius;
        
        nodes.push({
          x: cluster.x + Math.cos(angle) * distance,
          y: cluster.y + Math.sin(angle) * distance,
          radius: 1 + Math.random() * 2,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          opacity: 0.2 + Math.random() * 0.3,
          pulsePhase: Math.random() * Math.PI * 2,
          cluster: i % clusterCount,
          baseX: cluster.x,
          baseY: cluster.y,
          orbitRadius: distance,
          orbitSpeed: 0.002 + Math.random() * 0.003,
          orbitAngle: angle
        });
      }
      return nodes;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let lastTime = 0;
    const fps = 30;
    const frameInterval = 1000 / fps;

    const resizeCanvas = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      nodesRef.current = createNodes(canvas);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = (time: number) => {
      animationId = requestAnimationFrame(animate);
      
      // Throttle animation
      if (time - lastTime < frameInterval) return;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw connections
      nodesRef.current.forEach((node, i) => {
        // Orbit around cluster center
        node.orbitAngle += node.orbitSpeed;
        node.baseX += (Math.random() - 0.5) * 0.5;
        node.baseY += (Math.random() - 0.5) * 0.5;
        
        const targetX = node.baseX + Math.cos(node.orbitAngle) * node.orbitRadius;
        const targetY = node.baseY + Math.sin(node.orbitAngle) * node.orbitRadius;
        
        node.x += (targetX - node.x) * 0.05;
        node.y += (targetY - node.y) * 0.05;
        
        // Organic wandering
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges with damping
        if (node.x < node.radius || node.x > canvas.width - node.radius) {
          node.vx *= -0.9;
          node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x));
        }
        if (node.y < node.radius || node.y > canvas.height - node.radius) {
          node.vy *= -0.9;
          node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y));
        }
        
        // Draw connections to nearby nodes
        nodesRef.current.slice(i + 1).forEach(otherNode => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.15;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `hsla(var(--primary), ${opacity})`;
            ctx.lineWidth = 0.5 + (1 - distance / 150) * 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw nodes after connections
      nodesRef.current.forEach(node => {
        // Update pulse
        node.pulsePhase += 0.01;
        const pulse = 0.7 + 0.3 * Math.sin(node.pulsePhase);
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(var(--primary), ${node.opacity * pulse})`;
        ctx.fill();
        
        // Subtle glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * pulse * 2
        );
        gradient.addColorStop(0, `hsla(var(--primary), ${node.opacity * pulse * 0.3})`);
        gradient.addColorStop(1, `hsla(var(--primary), 0)`);
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [createNodes]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />
    </div>
  );
};

const ServicesGrid: React.FC<ServicesGridProps> = ({ serviceCategories }) => {
  // Correct icon mapping based on your config
  const iconMap = {
    Server: Server,
    Shield: Shield,
    Mic: Mic,
    Cpu: Cpu,
    Users: Users,
    Code: Code
  };

  // Get features specific to each category
  const getCategoryFeatures = (categoryId: string) => {
    const featuresMap: Record<string, string[]> = {
      infrastructure: [
        'Enterprise network design',
        'Data center solutions',
        'Cloud integration',
        '24/7 monitoring'
      ],
      security: [
        'CCTV surveillance',
        'Access control systems',
        'Intrusion detection',
        'Fire safety'
      ],
      communication: [
        'Video conferencing',
        'Digital signage',
        'Audio systems',
        'Unified communications'
      ],
      automation: [
        'Building automation',
        'IoT solutions',
        'Energy management',
        'Smart lighting'
      ],
      people: [
        'Time & attendance',
        'Visitor management',
        'HR solutions',
        'Workplace analytics'
      ],
      software: [
        'Custom software',
        'ERP systems',
        'CRM solutions',
        'Database management'
      ]
    };

    return featuresMap[categoryId] || [
      'Customized solutions',
      'Expert implementation',
      'Ongoing support'
    ];
  };

  return (
    <div className="relative">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {serviceCategories.map((category) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Server;
          const features = getCategoryFeatures(category.id);

          return (
            <Link 
              key={category.id}
              to={`/services#${category.id}`}
              className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-xl"
            >
              <Card className="group relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl bg-gradient-to-b from-card to-card/80 cursor-pointer h-full">
                {/* Image section - using category.id for image path */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted/20 to-muted/10">
                  <img 
                    src={`/images/index-services/${category.id}.jpg`}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/index-services/default.jpg'; // Fallback image
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent"></div>
                  
                  {/* Static icon - no blinking */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-${category.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 ml-4" />
                    </div>
                    
                    <ul className="space-y-2">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-border/30">
                      <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                        Explore {category.title}
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesGrid;
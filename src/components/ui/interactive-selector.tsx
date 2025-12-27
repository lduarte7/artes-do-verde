import React, { useState, useEffect } from 'react';
import { TreePine, Scissors, Building2, CloudRain, Trash2, ArrowDown } from 'lucide-react';

interface GalleryItem {
  tag: string;
  title: string;
  image: string;
}

interface InteractiveSelectorProps {
  items: GalleryItem[];
  title?: string;
  description?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  'Poda': <Scissors size={24} className="text-white" />,
  'Remoção': <Trash2 size={24} className="text-white" />,
  'Condomínio': <Building2 size={24} className="text-white" />,
  'Pós-temporal': <CloudRain size={24} className="text-white" />,
  'Rebaixamento': <ArrowDown size={24} className="text-white" />,
  'default': <TreePine size={24} className="text-white" />,
};

const InteractiveSelector: React.FC<InteractiveSelectorProps> = ({ 
  items, 
  title = "Trabalhos Recentes",
  description = "Alguns dos nossos serviços realizados em Porto Alegre e região"
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  
  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    items.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [items]);

  const getIcon = (tag: string) => {
    return iconMap[tag] || iconMap['default'];
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Header Section */}
      <div className="w-full max-w-2xl px-6 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3 tracking-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-xl mx-auto">
          {description}
        </p>
      </div>

      {/* Options Container */}
      <div className="options flex w-full max-w-[900px] min-w-[280px] md:min-w-[600px] h-[300px] sm:h-[350px] md:h-[400px] mx-0 items-stretch overflow-hidden relative rounded-xl">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const isAnimated = animatedOptions.includes(index);
          
          return (
            <div
              key={index}
              className={`
                option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
                ${isActive ? 'active' : ''}
              `}
              style={{
                backgroundImage: `url('${item.image}')`,
                backgroundSize: isActive ? 'auto 100%' : 'auto 120%',
                backgroundPosition: 'center',
                backfaceVisibility: 'hidden' as const,
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateX(0)' : 'translateX(-60px)',
                minWidth: '40px',
                minHeight: '100px',
                margin: 0,
                borderRadius: 0,
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: isActive ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                backgroundColor: 'hsl(var(--background))',
                boxShadow: isActive 
                  ? '0 20px 60px rgba(0,0,0,0.50)' 
                  : '0 10px 30px rgba(0,0,0,0.30)',
                flex: isActive ? '7 1 0%' : '1 1 0%',
                zIndex: isActive ? 10 : 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden',
                willChange: 'flex-grow, box-shadow, background-size, background-position'
              }}
              onClick={() => handleOptionClick(index)}
            >
              {/* Shadow effect */}
              <div 
                className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
                style={{
                  bottom: isActive ? '0' : '-40px',
                  height: '120px',
                  boxShadow: isActive 
                    ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000' 
                    : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
                }}
              ></div>
              
              {/* Label with icon and info */}
              <div className="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full">
                <div className="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200">
                  {getIcon(item.tag)}
                </div>
                <div className="info text-white whitespace-pre relative">
                  <div 
                    className="main font-bold text-lg transition-all duration-700 ease-in-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateX(0)' : 'translateX(25px)'
                    }}
                  >
                    {item.title}
                  </div>
                  <div 
                    className="sub text-base text-gray-300 transition-all duration-700 ease-in-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateX(0)' : 'translateX(25px)'
                    }}
                  >
                    {item.tag}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Custom animations */}
      <style>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;


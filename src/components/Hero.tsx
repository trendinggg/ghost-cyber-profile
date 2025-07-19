import React, { useState } from 'react';
import { ArrowDown, Download, FileText, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/hero-cyber.jpg';

const Hero = () => {
  useScrollAnimation();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {!imageLoaded && (
          <Skeleton className="w-full h-full opacity-20" />
        )}
        <img 
          src={heroImage} 
          alt="Cybersecurity Background" 
          className={`w-full h-full object-cover opacity-30 mix-blend-overlay transition-opacity duration-500 ${
            imageLoaded ? 'opacity-30' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="eager"
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary-glow rounded-full animate-pulse-slow opacity-80"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-70"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-primary-glow rounded-full animate-pulse opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4 text-left md:text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-glow scroll-bounce">
              Akshat <span className="text-primary">Parikh</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium scroll-reveal" style={{ animationDelay: '0.2s' }}>
              Penetration Tester & Cybersecurity Specialist
            </p>
            <p className="text-lg text-muted-foreground scroll-reveal" style={{ animationDelay: '0.4s' }}>
              1+ Years Experience in Cybersecurity & Ethical Hacking
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-foreground/90 leading-relaxed scroll-reveal" style={{ animationDelay: '0.6s' }}>
              Cybersecurity enthusiast with expertise in penetration testing, vulnerability analysis, and web application security. 
              Experienced in network security assessments and passionate about strengthening organizational defenses.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-scale" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold px-8"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 font-semibold px-8"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 font-semibold px-8"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center scroll-bounce" style={{ animationDelay: '1s' }}>
              <div className="text-3xl font-bold text-primary text-glow">1+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center scroll-bounce" style={{ animationDelay: '1.2s' }}>
              <div className="text-3xl font-bold text-primary text-glow">Top 0.1%</div>
              <div className="text-muted-foreground">TryHackMe Rank</div>
            </div>
            <div className="text-center scroll-bounce" style={{ animationDelay: '1.4s' }}>
              <div className="text-3xl font-bold text-primary text-glow">Pro Hacker</div>
              <div className="text-muted-foreground">HackTheBox Rank</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
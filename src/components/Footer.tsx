import React from 'react';
import { Github, Linkedin, Mail, Target, Box, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:akshatparikh.pt@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/akshatparikh1010/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/SN1PER', label: 'GitHub' },
    { icon: Target, href: 'https://tryhackme.com/p/SN1PER', label: 'TryHackMe' },
    { icon: Box, href: 'https://app.hackthebox.com/profile/2128889', label: 'HackTheBox' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-2xl font-bold text-primary text-glow">SN1PER</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Professional penetration tester specializing in web application security. 
              Committed to ethical hacking and helping organizations strengthen their cybersecurity posture.
            </p>
            
            {/* Download Links */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                📄 Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                📰 Service Brochure
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'Services', 'Experience', 'Achievements', 'Certifications', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-glow"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            
            {/* Rankings */}
            <div className="mt-6 text-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">TryHackMe:</span>
                <span className="text-primary font-semibold">Top 0.1%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">HackTheBox:</span>
                <span className="text-primary font-semibold">Hacker</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {currentYear} SN1PER. All rights reserved. | Built with security in mind.
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-xs text-muted-foreground">
              "Breaking things to make them safer"
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
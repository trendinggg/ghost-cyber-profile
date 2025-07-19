import React from 'react';
import { Shield, Search, Users, Network, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import pentestImage from '@/assets/pentest-tools.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  useScrollAnimation();
  const services = [
    {
      icon: Shield,
      title: 'Web Application Penetration Testing',
      description: 'Comprehensive security assessment of web applications using manual and automated testing techniques. Specialized in OWASP Top 10 vulnerabilities including SQL injection, XSS, CSRF, and reconnaissance.',
      features: ['OWASP Top 10 Testing', 'SQL Injection Testing', 'XSS Detection', 'CSRF Analysis']
    },
    {
      icon: Search,
      title: 'Vulnerability Assessment',
      description: 'Systematic identification and classification of security vulnerabilities in web applications and network systems using industry-standard tools and methodologies.',
      features: ['Network Scanning', 'Web App Scanning', 'Risk Classification', 'Remediation Planning']
    },
    {
      icon: Users,
      title: 'Phishing Simulation',
      description: 'Targeted phishing campaigns to test employee susceptibility and improve security awareness. Realistic attack scenarios to strengthen organizational defenses.',
      features: ['Email Phishing', 'Security Awareness', 'Employee Training', 'Incident Response']
    },
    {
      icon: Network,
      title: 'Network Penetration Testing',
      description: 'Comprehensive network security assessments to identify misconfigurations, weak credentials, and potential attack vectors using advanced exploitation techniques.',
      features: ['Network Scanning', 'Vulnerability Exploitation', 'Security Configuration Review', 'Penetration Testing']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold text-glow mb-4">
            Security <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional cybersecurity services to protect your digital assets and strengthen your security posture
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover-lift hover:shadow-glow transition-all duration-300 scroll-scale" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Service Brochure CTA - Enhanced */}
        <div className="text-center scroll-reveal" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-card border-2 border-primary/30 rounded-3xl p-8 max-w-3xl mx-auto mb-8 shadow-2xl hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              📋 Get Your <span className="text-primary">Service Brochure</span>
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Download our comprehensive service brochure with detailed information about our cybersecurity offerings, methodologies, and pricing.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-bold text-lg px-8 py-4 mb-4 w-full sm:w-auto transform hover:scale-105"
            >
              <FileText className="mr-3 h-6 w-6" />
              Download Service Brochure (PDF)
            </Button>
            <div className="text-sm text-primary/80 mt-2">Most requested document • Updated monthly</div>
          </div>
          
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 font-semibold"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
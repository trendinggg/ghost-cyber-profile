import React from 'react';
import { Award, BookOpen, ExternalLink, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import crtaImage from '@/assets/crta-badge.jpg';

const Certifications = () => {
  useScrollAnimation();
  
  const mainCertification = {
    title: 'CRTA',
    fullTitle: 'Certified Red Team Analyst',
    issuer: 'CyberWarfare Labs',
    date: '7/7/2025',
    certificateId: 'CRTA-686c1cfed42955efb469828b',
    status: 'Certified',
    type: 'Professional Certification',
    description: 'Advanced red team certification covering adversary simulation, lateral movement, and persistence techniques.',
    skills: ['Red Teaming', 'Adversary Simulation', 'Lateral Movement', 'Persistence', 'MITRE ATT&CK'],
    verified: true,
    image: '/lovable-uploads/660ad978-1992-416b-964b-75f4bb4be466.png'
  };

  const otherCertifications = [
    {
      title: 'CompTIA PenTest+',
      issuer: 'CompTIA (via TryHackMe)',
      date: '2024',
      status: 'Certified',
      type: 'Professional Certification',
      description: 'Industry-standard penetration testing certification covering planning, scoping, and vulnerability assessment.',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Compliance', 'Reporting'],
      verified: true
    },
    {
      title: 'Jr Penetration Tester',
      issuer: 'TryHackMe',
      date: '2024',
      status: 'Certified',
      type: 'Learning Path',
      description: 'Comprehensive learning path covering fundamental penetration testing skills and methodologies.',
      skills: ['Network Security', 'Web App Testing', 'Privilege Escalation', 'Post-Exploitation'],
      verified: true
    }
  ];

  const courses = [
    {
      title: 'Cyber Security 101',
      issuer: 'TryHackMe',
      date: '2024',
      type: 'Foundation Course',
      description: 'Introduction to cybersecurity fundamentals and core concepts.',
      hours: '20'
    },
    {
      title: 'Ethical Hacking Complete Course',
      issuer: 'Udemy',
      date: '2024',
      type: 'Professional Course',
      description: 'Comprehensive ethical hacking course covering advanced penetration testing techniques.',
      hours: '40'
    },
    {
      title: 'Offensive Pentesting Path',
      issuer: 'TryHackMe',
      date: '2024',
      type: 'Learning Path',
      description: 'Advanced offensive security techniques and red team methodologies.',
      hours: '60'
    },
    {
      title: 'Red Teaming Path',
      issuer: 'TryHackMe',
      date: '2024',
      type: 'Learning Path',
      description: 'Advanced red team operations and adversary simulation techniques.',
      hours: '80'
    },
    {
      title: 'Web Application Security',
      issuer: 'TryHackMe',
      date: '2024',
      type: 'Specialized Path',
      description: 'In-depth web application security testing and OWASP Top 10 vulnerabilities.',
      hours: '50'
    },
    {
      title: 'Network Security Fundamentals',
      issuer: 'TryHackMe',
      date: '2024',
      type: 'Foundation Course',
      description: 'Network security concepts, protocols, and defensive strategies.',
      hours: '30'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-glow mb-4 scroll-bounce">
            <span className="text-primary">Certification</span> & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto scroll-reveal" style={{ animationDelay: '0.2s' }}>
            Professional certifications and continuous learning in cybersecurity and ethical hacking
          </p>
        </div>

        {/* Main Professional Certification */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-foreground mb-8 flex items-center justify-center">
            <Award className="mr-3 h-8 w-8 text-primary" />
            Certification
          </h3>
          
          <Card className="max-w-4xl mx-auto bg-gradient-card border-border/50 hover-lift hover:shadow-glow transition-all duration-300 scroll-rotate cursor-pointer" onClick={() => window.open(mainCertification.image, '_blank')}>
            <CardHeader>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <img 
                    src={mainCertification.image} 
                    alt="CRTA Certification Badge"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-xl border-2 border-primary/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <CardTitle className="text-3xl text-foreground flex items-center justify-center md:justify-start mb-2">
                    {mainCertification.title}
                    <CheckCircle className="ml-3 h-6 w-6 text-primary" />
                  </CardTitle>
                  <CardDescription className="text-lg text-primary font-semibold mb-2">
                    {mainCertification.fullTitle}
                  </CardDescription>
                  <CardDescription className="text-base text-muted-foreground mb-4">
                    {mainCertification.issuer} • Achieved {mainCertification.date}
                  </CardDescription>
                  <Badge className="bg-primary text-primary-foreground text-sm px-4 py-2">
                    {mainCertification.status}
                  </Badge>
                  <div className="mt-4 flex items-center justify-center md:justify-start">
                    <ExternalLink className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm text-muted-foreground">Click to view certificate</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Badge variant="outline" className="border-primary text-primary text-sm px-3 py-1">
                {mainCertification.type}
              </Badge>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                {mainCertification.description}
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>Certificate ID: <span className="text-primary font-mono">{mainCertification.certificateId}</span></span>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4 text-lg">Key Skills:</h4>
                <div className="flex flex-wrap gap-3">
                  {mainCertification.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border border-primary/20 text-sm px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certificates Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-foreground mb-8 flex items-center justify-center">
            <Award className="mr-3 h-8 w-8 text-primary" />
            Certificates
          </h3>
          
          {/* Professional Certificates */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center justify-center">
              <Award className="mr-2 h-5 w-5 text-primary" />
              Professional Certificates
            </h4>
        
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {otherCertifications.map((cert, index) => (
                <Card key={index} className={`bg-gradient-card border-border/50 hover-lift hover:shadow-glow transition-all duration-300 scroll-scale`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                          <Award className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground flex items-center">
                            {cert.title}
                            {cert.verified && (
                              <CheckCircle className="ml-2 h-5 w-5 text-primary" />
                            )}
                          </CardTitle>
                          <CardDescription className="text-primary font-semibold">
                            {cert.issuer}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-primary text-primary-foreground mb-2">
                          {cert.status}
                        </Badge>
                        <div className="text-sm text-muted-foreground">{cert.date}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Badge variant="outline" className="border-primary text-primary">
                      {cert.type}
                    </Badge>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary"
                            className="bg-primary/10 text-primary border border-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Courses & Training */}
          <div>
            <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center justify-center">
              <BookOpen className="mr-2 h-5 w-5 text-primary" />
              Courses & Training
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {courses.map((course, index) => (
                <Card key={index} className={`bg-gradient-card border-border/50 hover-lift ${index % 3 === 0 ? 'scroll-slide-left' : index % 3 === 1 ? 'scroll-reveal' : 'scroll-slide-right'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-foreground text-sm">{course.title}</h4>
                        {course.hours && (
                          <Badge variant="outline" className="text-xs">
                            {course.hours}h
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-primary font-medium text-sm">{course.issuer}</p>
                        <span className="text-xs text-muted-foreground">{course.date}</span>
                      </div>
                      
                      <Badge variant="secondary" className="text-xs">
                        {course.type}
                      </Badge>
                      
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Learning Stats */}
            <Card className="mt-8 bg-gradient-card border-border/50 max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-lg text-foreground text-center">Learning Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary text-glow">280+</div>
                    <div className="text-xs text-muted-foreground">Training Hours</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary text-glow">8</div>
                    <div className="text-xs text-muted-foreground">Completed Paths</div>
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View All Certificates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Continuous Learning Statement */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Commitment to <span className="text-primary">Continuous Learning</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Cybersecurity is an ever-evolving field. I maintain a commitment to continuous learning 
                through regular participation in capture-the-flag competitions, security research, and 
                professional development courses to stay current with the latest threats and defense techniques.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
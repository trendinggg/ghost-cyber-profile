import React from 'react';
import { Shield, Heart, Target, Lightbulb, Code, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation();
  const values = [
    {
      icon: Shield,
      title: 'Ethical Hacking',
      description: 'Committed to responsible disclosure and ethical security practices that protect organizations and users.'
    },
    {
      icon: Heart,
      title: 'Continuous Learning',
      description: 'Passionate about staying current with evolving threats and emerging security technologies.'
    },
    {
      icon: Target,
      title: 'Precision Testing',
      description: 'Focused on thorough, methodical security assessments that identify real-world vulnerabilities.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Believe in working closely with development teams to build security into the development lifecycle.'
    }
  ];

  const interests = [
    'Python Security Tool Development',
    'Bug Bounty Programs',
    'Capture The Flag (CTF) Competitions',
    'Network Security & Penetration Testing',
    'Web Application Security',
    'Industry Job Simulations (Mastercard, Tata)'
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold text-glow mb-4">
            About <span className="text-primary">Akshat</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate cybersecurity professional dedicated to making the digital world safer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Journey */}
          <div>
            <Card className="bg-gradient-card border-border/50 hover-lift scroll-reveal h-full" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">Professional Journey</h3>
                      <p className="text-primary font-medium">Penetration Tester & Cybersecurity Specialist</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a dedicated cybersecurity professional with 1+ years of hands-on experience in 
                      penetration testing and vulnerability assessment. My journey began with completing my 
                      Bachelor's in Information Communication and Technology Engineering from LJIET, building 
                      a strong foundation in both technical and security concepts.
                    </p>

                    <p>
                      My professional experience includes working with Opal Omniventures Pv. Ltd. and MCS Ventures, 
                      where I've specialized in web application security, network penetration testing, and 
                      vulnerability assessments. I focus on identifying OWASP Top 10 vulnerabilities including 
                      SQL injection, XSS, and CSRF, providing actionable remediation recommendations.
                    </p>

                    <p>
                      As <span className="text-primary font-semibold">SN1PER</span> on TryHackMe and achieving 
                      Pro Hacker rank on HackTheBox, I've demonstrated consistent learning and practical application 
                      of cybersecurity concepts. My Top 0.1% ranking on TryHackMe reflects my commitment to 
                      continuous improvement and mastery of security techniques.
                    </p>

                    <p>
                      Beyond penetration testing, I've developed custom Python security tools including a 
                      keylogger, subdomain enumeration tool, and network scanner. I've also found a critical 
                      bug through bug bounty hunting and completed professional simulations with Mastercard 
                      and Tata to enhance my practical skills.
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="mt-8 p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                    <blockquote className="text-lg text-foreground font-medium italic">
                      "Security is not a product, but a process of continuous improvement."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground mt-2 block">
                      — My philosophy on cybersecurity
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Lightbulb className="mr-3 h-6 w-6 text-primary" />
                Core Values
              </h3>
              
              <div className="space-y-4">
                {values.map((value, index) => (
                  <Card key={index} className="bg-gradient-card border-border/50 hover-lift scroll-scale" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                          <value.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm mb-2">{value.title}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interests - Full Width Below */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center justify-center">
            <Code className="mr-3 h-6 w-6 text-primary" />
            Interests
          </h3>
          
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {interest}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
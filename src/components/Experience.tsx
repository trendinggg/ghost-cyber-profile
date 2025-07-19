import React, { useEffect } from 'react';
import { Calendar, MapPin, Code, Shield, Users, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Experience = () => {
  useScrollAnimation();
  const experiences = [
    {
      title: 'Penetration Tester',
      company: 'Opal Omniventures Pvt. Ltd.',
      period: 'July 2024 – March 2025',
      location: 'Hybrid',
      description: 'Leading comprehensive security assessments and collaborating with external partners on penetration testing engagements.',
      achievements: [
        'Collaborated with external partners on security initiatives for joint penetration testing engagements',
        'Executed targeted phishing simulations to test employee susceptibility and improve security awareness',
        'Performed advanced web application penetration testing using Burp Suite, OWASP ZAP, and Nessus',
        'Identified high-risk vulnerabilities including XSS, SQL Injection, and CSRF with actionable remediation steps'
      ]
    },
    {
      title: 'Penetration Tester',
      company: 'MCS Ventures',
      period: 'January 2024 – July 2024',
      location: 'On site',
      description: 'Specialized in vulnerability assessments and manual penetration testing on web applications and network systems.',
      achievements: [
        'Conducted comprehensive vulnerability assessments on web applications and network systems',
        'Executed manual penetration tests using OWASP ZAP, Burp Suite, and Nessus',
        'Performed network security testing using Nmap and Metasploit to identify vulnerabilities',
        'Delivered detailed security reports with vulnerability findings and remediation recommendations'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor\'s in Information Communication and Technology Engineering',
      institution: 'LJIET',
      period: '2021 – 2024',
      grade: '7.87 CGPA',
      achievements: ['Strong foundation in cybersecurity concepts', 'Networking and system administration', 'Software development and programming']
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'RCTI',
      period: '2018 – 2021',
      grade: '7.88 CGPA',
      achievements: ['Computer systems fundamentals', 'Network protocols and security', 'Programming and database management']
    }
  ];

  const tools = [
    'Metasploit', 'Burp Suite', 'Nmap', 'Nessus', 'Hydra', 
    'OWASP ZAP', 'Kali Linux', 'Python', 'Bash', 'Wireshark', 
    'SQLmap', 'John the Ripper', 'Hashcat', 'Nikto', 'Gobuster'
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-glow mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of successful security assessments and continuous learning in cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Shield className="mr-3 h-6 w-6 text-primary" />
              Work Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover-lift scroll-reveal" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                      <CardDescription className="text-primary font-semibold text-base">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <Target className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education & Tools */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Users className="mr-3 h-6 w-6 text-primary" />
                Education
              </h3>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-gradient-card border-border/50 hover-lift hover:shadow-elevated transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-900 hover:via-gray-800 hover:to-gray-900 hover:border-primary/50 scroll-scale" style={{ animationDelay: `${index * 0.3}s` }}>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <div className="flex items-center text-sm text-muted-foreground mt-2">
                        <Calendar className="mr-1 h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="text-sm text-primary font-semibold mt-1">
                        Grade: {edu.grade}
                      </div>
                      <ul className="mt-3 space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Code className="mr-3 h-6 w-6 text-primary" />
                Tools & Technologies
              </h3>
              
              <Card className="bg-gradient-card border-border/50 scroll-reveal" style={{ animationDelay: '0.8s' }}>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
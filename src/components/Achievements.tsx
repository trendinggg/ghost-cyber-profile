import React from 'react';
import { Trophy, Target, Box, Bug, Zap, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Achievements = () => {
  useScrollAnimation();
  
  const platformAchievements = [
    {
      platform: 'TryHackMe',
      alias: 'SN1PER',
      rank: 'Top 0.1%',
      icon: Target,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20',
      description: 'Elite ranking among global cybersecurity enthusiasts',
      stats: [
        { label: 'Global Rank', value: 'Top 0.1%' },
        { label: 'Paths Completed', value: '8+' },
        { label: 'CTF Challenges', value: '200+' }
      ]
    },
    {
      platform: 'HackTheBox',
      alias: 'SN1PERZ',
      rank: 'Pro Hacker',
      seasonRank: 'HOLO (Highest)',
      icon: Box,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      description: 'Achieved Pro Hacker rank with highest seasonal performance',
      stats: [
        { label: 'Current Rank', value: 'Pro Hacker' },
        { label: 'Season Rank', value: 'HOLO' },
        { label: 'Profile ID', value: '2128889' }
      ]
    }
  ];

  const achievements = [
    {
      icon: Bug,
      title: 'Critical Bug Discovery',
      description: 'Reported critical vulnerability: Unauthorized Account Access',
      category: 'Bug Bounty',
      impact: 'High'
    },
    {
      icon: Trophy,
      title: 'Mastercard Cybersecurity Simulation',
      description: 'Successfully completed advanced cybersecurity job simulation',
      category: 'Corporate Training',
      impact: 'Medium'
    },
    {
      icon: Zap,
      title: 'Tata Cybersecurity Simulation',
      description: 'Completed enterprise-level security analyst job simulation',
      category: 'Corporate Training',
      impact: 'Medium'
    },
    {
      icon: Award,
      title: 'Python Security Tools Development',
      description: 'Created security tools: Keylogger, Subdomain Enumeration, Network Scanner',
      category: 'Development',
      impact: 'High'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-glow mb-4 scroll-bounce">
            Notable <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto scroll-reveal" style={{ animationDelay: '0.2s' }}>
            Recognition and accomplishments in cybersecurity competitions and professional development
          </p>
        </div>

        {/* Platform Rankings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {platformAchievements.map((platform, index) => (
            <Card key={index} className={`bg-gradient-card border-border/50 hover-lift hover:shadow-glow transition-all duration-300 ${index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right'}`} style={{ animationDelay: `${index * 0.3}s` }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-xl ${platform.bgColor} border ${platform.borderColor}`}>
                      <platform.icon className={`h-8 w-8 ${platform.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">{platform.platform}</CardTitle>
                      <CardDescription className="text-base">
                        Known as <span className="text-primary font-semibold">{platform.alias}</span>
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className={`${platform.bgColor} ${platform.color} border ${platform.borderColor} px-3 py-1`}>
                    {platform.rank}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{platform.description}</p>
                
                {platform.seasonRank && (
                  <div className="flex items-center">
                    <span className="text-foreground font-semibold">Season Rank: </span>
                    <Badge variant="outline" className="ml-2 border-primary text-primary">
                      {platform.seasonRank}
                    </Badge>
                  </div>
                )}
                
                {platform.platform === 'TryHackMe' && (
                  <div className="mb-4">
                    <iframe 
                      src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3454390" 
                      style={{ border: 'none', width: '100%', height: '200px' }}
                      className="rounded-lg"
                    />
                  </div>
                )}
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                  {platform.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-lg font-bold ${platform.color}`}>{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Other Achievements */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center scroll-bounce">
            Professional <span className="text-primary">Accomplishments</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`bg-gradient-card border-border/50 hover-lift scroll-scale`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-foreground text-lg">{achievement.title}</h4>
                        <Badge 
                          variant={achievement.impact === 'High' ? 'default' : 'secondary'}
                          className={achievement.impact === 'High' ? 'bg-primary text-primary-foreground' : ''}
                        >
                          {achievement.impact}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {achievement.description}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {achievement.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="scroll-bounce" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-primary text-glow">200+</div>
              <div className="text-muted-foreground">CTF Challenges</div>
            </div>
            <div className="scroll-bounce" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-primary text-glow">8+</div>
              <div className="text-muted-foreground">Learning Paths</div>
            </div>
            <div className="scroll-bounce" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-primary text-glow">1</div>
              <div className="text-muted-foreground">Critical Bug Found</div>
            </div>
            <div className="scroll-bounce" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl font-bold text-primary text-glow">5+</div>
              <div className="text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Target, Box, MapPin, Phone, Calendar, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const allContacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'akshatparikh.pt@gmail.com',
      href: 'mailto:akshatparikh.pt@gmail.com',
      description: 'Primary contact for professional inquiries',
      color: 'text-red-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8401685272',
      href: 'tel:+918401685272',
      description: 'Direct line for urgent matters',
      color: 'text-blue-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/akshatparikh1010',
      href: 'https://www.linkedin.com/in/akshatparikh1010/',
      description: 'Professional networking and updates',
      color: 'text-blue-400'
    },
    {
      icon: Target,
      label: 'TryHackMe',
      value: 'SN1PER',
      href: 'https://tryhackme.com/p/SN1PER',
      description: 'Top 0.1% Global Ranking',
      color: 'text-green-400'
    },
    {
      icon: Box,
      label: 'HackTheBox',
      value: 'SN1PERZ',
      href: 'https://app.hackthebox.com/profile/2128889',
      description: 'Pro Hacker • HOLO Season',
      color: 'text-orange-400'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within <12 hours."
    });

    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-glow mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to secure your applications? Let's discuss your cybersecurity needs
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Connect With Me Section - Now First */}
            <div className="space-y-6 order-1 lg:order-1">
              <div className="text-left">
                <h3 className="text-3xl font-semibold text-foreground mb-4">
                  Connect With Me
                </h3>
                <p className="text-muted-foreground mb-8">
                  Multiple ways to reach out and connect professionally
                </p>
              </div>
              
              {/* All Contact Methods */}
              <div className="grid grid-cols-1 gap-4">
                {allContacts.map((contact, index) => (
                  <Card key={index} className="bg-gradient-card border-border/50 hover-lift hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <a 
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-6 hover:text-primary transition-colors group"
                      >
                        <div className={`p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all ${contact.color} group-hover:text-primary-foreground`}>
                          <contact.icon className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                            {contact.label}
                          </h4>
                          <p className="text-primary font-semibold text-lg">{contact.value}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {contact.description}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions and Response Time - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-gradient-card border-border/50 hover-lift hover:shadow-glow transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-foreground text-center flex items-center justify-center">
                      <Target className="mr-3 h-6 w-6 text-primary" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 px-6 pb-6">
                    <Button 
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-sm py-4"
                      size="sm"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Consultation
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm py-4"
                      size="sm"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Request Call Back
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50 hover-lift hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary text-glow mb-2">&lt; 12hrs</div>
                      <div className="text-sm font-semibold text-muted-foreground">Average Response Time</div>
                      <div className="text-xs text-muted-foreground/80 mt-2">Professional & Reliable Communication</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Send Message Form - Now Second */}
            <div className="order-2 lg:order-2">
              <Card className="bg-gradient-card border-border/50 hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <Send className="mr-3 h-6 w-6 text-primary" />
                    Send Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form and I'll get back to you within &lt;12 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="border-border/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company / Organization
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name (optional)"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or security needs..."
                        rows={6}
                        className="border-border/50 focus:border-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Lightbulb, Users, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import heroImage from '../../assets/hero-chatgpt.png';
import gettingStartedImage from '../../assets/getting-started.png';
import useCasesImage from '../../assets/use-cases.png';
import advancedTipsImage from '../../assets/advanced-tips.png';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Grundlagen verstehen',
      description: 'Lernen Sie die Grundlagen von ChatGPT und künstlicher Intelligenz kennen.',
      link: '/grundlagen',
      image: gettingStartedImage
    },
    {
      icon: Zap,
      title: 'Schnell starten',
      description: 'Erste Schritte und praktische Anleitungen für den sofortigen Einstieg.',
      link: '/erste-schritte',
      image: gettingStartedImage
    },
    {
      icon: Users,
      title: 'Anwendungsbereiche',
      description: 'Entdecken Sie vielfältige Einsatzmöglichkeiten in verschiedenen Bereichen.',
      link: '/anwendungsbereiche',
      image: useCasesImage
    },
    {
      icon: Lightbulb,
      title: 'Tipps & Tricks',
      description: 'Fortgeschrittene Techniken und bewährte Praktiken für bessere Ergebnisse.',
      link: '/tipps-tricks',
      image: advancedTipsImage
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                ChatGPT
                <span className="text-blue-600"> Meistern</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ihr umfassender Leitfaden für ChatGPT - von den ersten Schritten bis zu fortgeschrittenen Techniken. 
                Lernen Sie, wie Sie künstliche Intelligenz effektiv nutzen können.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/erste-schritte">
                    Jetzt starten <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link to="/grundlagen">
                    Grundlagen lernen
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={heroImage} 
                alt="ChatGPT AI Illustration" 
                className="max-w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Alles was Sie über ChatGPT wissen müssen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von den Grundlagen bis zu fortgeschrittenen Techniken - unser umfassender Guide 
              hilft Ihnen dabei, ChatGPT optimal zu nutzen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full justify-start p-0 h-auto">
                    <Link to={feature.link} className="flex items-center text-blue-600 hover:text-blue-700">
                      Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Bereit, ChatGPT zu meistern?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Beginnen Sie Ihre Reise mit unserem strukturierten Lernpfad.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/erste-schritte">
              Lernpfad starten <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;


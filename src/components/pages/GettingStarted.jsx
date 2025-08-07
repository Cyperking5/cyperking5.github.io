import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { CheckCircle, ExternalLink, User, Mail, MessageSquare, Settings } from 'lucide-react';
import gettingStartedImage from '../../assets/getting-started.png';

const GettingStarted = () => {
  const steps = [
    {
      number: 1,
      title: 'Registrierung',
      description: 'Erstellen Sie einen kostenlosen OpenAI Account',
      details: [
        'Besuchen Sie chat.openai.com',
        'Klicken Sie auf "Sign up"',
        'E-Mail-Adresse eingeben',
        'Bestätigungslink anklicken',
        'Telefonnummer verifizieren'
      ],
      icon: User
    },
    {
      number: 2,
      title: 'Anmeldung',
      description: 'Loggen Sie sich in Ihren Account ein',
      details: [
        'E-Mail und Passwort eingeben',
        'Oder mit Google/Microsoft anmelden',
        'Bei Bedarf 2FA aktivieren',
        'Nutzungsbedingungen akzeptieren'
      ],
      icon: Mail
    },
    {
      number: 3,
      title: 'Erste Unterhaltung',
      description: 'Starten Sie Ihr erstes Gespräch mit ChatGPT',
      details: [
        'Einfache Frage stellen',
        'Auf Antwort warten',
        'Nachfragen stellen',
        'Verschiedene Themen ausprobieren'
      ],
      icon: MessageSquare
    },
    {
      number: 4,
      title: 'Einstellungen',
      description: 'Passen Sie ChatGPT an Ihre Bedürfnisse an',
      details: [
        'Sprache einstellen',
        'Theme wählen (Hell/Dunkel)',
        'Datenschutz-Einstellungen',
        'Verlauf verwalten'
      ],
      icon: Settings
    }
  ];

  const firstPrompts = [
    {
      category: 'Einfache Fragen',
      examples: [
        'Erkläre mir, was künstliche Intelligenz ist',
        'Wie funktioniert das Wetter?',
        'Was ist der Unterschied zwischen einem Virus und Bakterien?'
      ]
    },
    {
      category: 'Kreative Aufgaben',
      examples: [
        'Schreibe ein kurzes Gedicht über den Frühling',
        'Erfinde eine Geschichte über einen sprechenden Hund',
        'Gib mir 5 Ideen für ein Wochenendprojekt'
      ]
    },
    {
      category: 'Praktische Hilfe',
      examples: [
        'Hilf mir beim Planen einer Geburtstagsparty',
        'Erstelle eine Einkaufsliste für ein italienisches Dinner',
        'Gib mir Tipps für ein Vorstellungsgespräch'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Erste Schritte mit ChatGPT
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Schritt-für-Schritt Anleitung für Ihren Einstieg in die Welt von ChatGPT
          </p>
          <div className="flex justify-center mb-8">
            <img 
              src={gettingStartedImage} 
              alt="Getting Started with ChatGPT" 
              className="max-w-md w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Schritt-für-Schritt Anleitung */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Schritt-für-Schritt Anleitung</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        <step.icon className="h-5 w-5" />
                        {step.title}
                      </CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-16">
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Direkt zu ChatGPT */}
        <Card className="mb-12 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-center">Bereit zum Starten?</CardTitle>
            <CardDescription className="text-center">
              Klicken Sie hier, um direkt zu ChatGPT zu gelangen
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button asChild size="lg" className="text-lg">
              <a 
                href="https://chat.openai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                ChatGPT öffnen <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Erste Prompts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Ihre ersten Prompts</h2>
          <p className="text-center text-muted-foreground mb-8">
            Hier sind einige Beispiele für Ihre ersten Unterhaltungen mit ChatGPT
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {firstPrompts.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm">
                        "{example}"
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interface Erklärung */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Das ChatGPT Interface verstehen</CardTitle>
            <CardDescription>
              Wichtige Elemente der Benutzeroberfläche erklärt
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Chat-Verlauf</h4>
                  <p className="text-sm text-muted-foreground">
                    Links sehen Sie alle Ihre bisherigen Unterhaltungen. Klicken Sie darauf, um sie fortzusetzen.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Eingabefeld</h4>
                  <p className="text-sm text-muted-foreground">
                    Unten geben Sie Ihre Nachrichten ein. Drücken Sie Enter oder klicken Sie den Senden-Button.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Antworten</h4>
                  <p className="text-sm text-muted-foreground">
                    ChatGPT-Antworten erscheinen in der Mitte. Sie können sie kopieren oder bewerten.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Einstellungen</h4>
                  <p className="text-sm text-muted-foreground">
                    Über Ihr Profilbild erreichen Sie Einstellungen, Verlauf und Account-Optionen.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wichtige Tipps */}
        <Card>
          <CardHeader>
            <CardTitle>Wichtige Tipps für den Anfang</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">1</Badge>
                  <div>
                    <h5 className="font-semibold">Seien Sie spezifisch</h5>
                    <p className="text-sm text-muted-foreground">
                      Je genauer Ihre Frage, desto besser die Antwort
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">2</Badge>
                  <div>
                    <h5 className="font-semibold">Stellen Sie Nachfragen</h5>
                    <p className="text-sm text-muted-foreground">
                      ChatGPT merkt sich den Kontext der Unterhaltung
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">3</Badge>
                  <div>
                    <h5 className="font-semibold">Experimentieren Sie</h5>
                    <p className="text-sm text-muted-foreground">
                      Probieren Sie verschiedene Arten von Fragen aus
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">4</Badge>
                  <div>
                    <h5 className="font-semibold">Überprüfen Sie Antworten</h5>
                    <p className="text-sm text-muted-foreground">
                      ChatGPT kann Fehler machen - prüfen Sie wichtige Informationen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GettingStarted;


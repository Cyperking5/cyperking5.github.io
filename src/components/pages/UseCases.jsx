import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { PenTool, Code, GraduationCap, Briefcase, Lightbulb, Globe } from 'lucide-react';
import useCasesImage from '../../assets/use-cases.png';

const UseCases = () => {
  const useCases = [
    {
      icon: PenTool,
      title: 'Kreatives Schreiben',
      description: 'Texte, Geschichten und kreative Inhalte erstellen',
      examples: [
        'Blog-Artikel und Texte verfassen',
        'Geschichten und Gedichte schreiben',
        'Social Media Posts erstellen',
        'E-Mails und Briefe formulieren',
        'Produktbeschreibungen verfassen'
      ],
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
    },
    {
      icon: Code,
      title: 'Programmierung',
      description: 'Code schreiben, debuggen und erklären lassen',
      examples: [
        'Code-Snippets generieren',
        'Fehler in Code finden und beheben',
        'Programmierkonzepte erklären lassen',
        'Code-Reviews durchführen',
        'Dokumentation schreiben'
      ],
      color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
    },
    {
      icon: GraduationCap,
      title: 'Bildung & Lernen',
      description: 'Lerninhalte verstehen und Wissen erweitern',
      examples: [
        'Komplexe Themen erklären lassen',
        'Zusammenfassungen erstellen',
        'Lernpläne entwickeln',
        'Übungsaufgaben generieren',
        'Prüfungsvorbereitung'
      ],
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
    },
    {
      icon: Briefcase,
      title: 'Business & Arbeit',
      description: 'Berufliche Aufgaben effizienter erledigen',
      examples: [
        'Präsentationen vorbereiten',
        'Meeting-Protokolle erstellen',
        'Berichte und Analysen verfassen',
        'Kundenanfragen beantworten',
        'Projektplanung unterstützen'
      ],
      color: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400'
    },
    {
      icon: Lightbulb,
      title: 'Ideenfindung',
      description: 'Brainstorming und kreative Problemlösung',
      examples: [
        'Brainstorming-Sessions',
        'Problemlösungsansätze entwickeln',
        'Kreative Ideen generieren',
        'Produktnamen finden',
        'Marketingstrategien entwickeln'
      ],
      color: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: Globe,
      title: 'Übersetzung & Sprachen',
      description: 'Texte übersetzen und Sprachen lernen',
      examples: [
        'Texte in verschiedene Sprachen übersetzen',
        'Grammatik und Rechtschreibung prüfen',
        'Sprachübungen erstellen',
        'Kulturelle Kontexte erklären',
        'Fremdsprachen lernen'
      ],
      color: 'bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ChatGPT Anwendungsbereiche
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Entdecken Sie die vielfältigen Einsatzmöglichkeiten von ChatGPT in verschiedenen Bereichen
          </p>
          <div className="flex justify-center mb-8">
            <img 
              src={useCasesImage} 
              alt="ChatGPT Use Cases" 
              className="max-w-md w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${useCase.color}`}>
                  <useCase.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-current rounded-full mt-2 flex-shrink-0"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Examples */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">Praktische Beispiele</h2>
          
          {/* Writing Example */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PenTool className="h-5 w-5 text-purple-600" />
                Beispiel: Blog-Artikel schreiben
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Ihr Prompt:</h4>
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm">
                    "Schreibe einen 500-Wörter Blog-Artikel über die Vorteile von Remote-Arbeit. 
                    Zielgruppe sind Unternehmer. Verwende einen professionellen aber zugänglichen Ton."
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">ChatGPT hilft bei:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Strukturierung des Artikels</li>
                    <li>• Recherche von Argumenten</li>
                    <li>• Anpassung des Schreibstils</li>
                    <li>• Erstellung einer Einleitung</li>
                    <li>• Formulierung eines Fazits</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coding Example */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-green-600" />
                Beispiel: Code-Hilfe
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Ihr Prompt:</h4>
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm">
                    "Erstelle eine Python-Funktion, die eine Liste von Zahlen sortiert und 
                    die größte Zahl zurückgibt. Erkläre auch, wie der Code funktioniert."
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">ChatGPT liefert:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Vollständigen, funktionsfähigen Code</li>
                    <li>• Schritt-für-Schritt Erklärung</li>
                    <li>• Alternative Lösungsansätze</li>
                    <li>• Tipps zur Optimierung</li>
                    <li>• Beispiele für die Verwendung</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Example */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                Beispiel: Lernen und Verstehen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Ihr Prompt:</h4>
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm">
                    "Erkläre mir die Quantenphysik so, als wäre ich 12 Jahre alt. 
                    Verwende einfache Beispiele und Analogien."
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">ChatGPT macht:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Komplexe Konzepte vereinfachen</li>
                    <li>• Alltagsbeispiele verwenden</li>
                    <li>• Schritt-für-Schritt erklären</li>
                    <li>• Nachfragen beantworten</li>
                    <li>• Verständnis überprüfen</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Best Practices */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Best Practices für verschiedene Anwendungsbereiche</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-2">Kreatives Schreiben</Badge>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Zielgruppe und Ton spezifizieren</li>
                    <li>• Gewünschte Länge angeben</li>
                    <li>• Stil-Beispiele bereitstellen</li>
                  </ul>
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">Programmierung</Badge>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Programmiersprache nennen</li>
                    <li>• Kontext und Anforderungen erklären</li>
                    <li>• Code-Kommentare anfordern</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-2">Business</Badge>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Branche und Kontext angeben</li>
                    <li>• Formalitätsgrad spezifizieren</li>
                    <li>• Zielgruppe definieren</li>
                  </ul>
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">Lernen</Badge>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Wissenslevel angeben</li>
                    <li>• Beispiele anfordern</li>
                    <li>• Nachfragen stellen</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UseCases;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Code, Cpu, Layers, Workflow, ExternalLink, Zap, Settings, Brain } from 'lucide-react';
import advancedTipsImage from '../../assets/advanced-tips.png';

const Advanced = () => {
  const advancedTechniques = [
    {
      icon: Brain,
      title: 'Chain-of-Thought Prompting',
      description: 'Komplexe Probleme Schritt für Schritt lösen lassen',
      examples: [
        'Mathematische Probleme schrittweise lösen',
        'Logische Schlussfolgerungen ableiten',
        'Komplexe Analysen strukturieren',
        'Entscheidungsprozesse aufschlüsseln'
      ],
      prompt: 'Löse diese Aufgabe Schritt für Schritt und erkläre jeden Schritt: [Problem]'
    },
    {
      icon: Layers,
      title: 'Multi-Shot Prompting',
      description: 'Mehrere Beispiele für bessere Ergebnisse nutzen',
      examples: [
        'Konsistente Formatierung erreichen',
        'Stil-Vorgaben vermitteln',
        'Komplexe Muster erkennen lassen',
        'Qualitätsstandards definieren'
      ],
      prompt: 'Beispiel 1: [Input] → [Output]\nBeispiel 2: [Input] → [Output]\nJetzt: [Neuer Input] → ?'
    },
    {
      icon: Workflow,
      title: 'Prompt Chaining',
      description: 'Mehrere Prompts verketten für komplexe Aufgaben',
      examples: [
        'Große Projekte in Teilschritte aufteilen',
        'Ergebnisse iterativ verbessern',
        'Verschiedene Perspektiven einbeziehen',
        'Qualitätskontrolle implementieren'
      ],
      prompt: 'Schritt 1: [Erste Aufgabe]\nSchritt 2: Basierend auf Schritt 1, [Zweite Aufgabe]'
    },
    {
      icon: Settings,
      title: 'Parameter-Tuning',
      description: 'Temperatur und andere Parameter optimal einstellen',
      examples: [
        'Kreativität vs. Präzision balancieren',
        'Konsistenz bei Wiederholungen',
        'Zufälligkeit kontrollieren',
        'Ausgabelänge optimieren'
      ],
      prompt: 'Verwende eine niedrige Temperatur für präzise Antworten oder hohe für Kreativität'
    }
  ];

  const apiFeatures = [
    {
      title: 'API-Integration',
      description: 'ChatGPT in eigene Anwendungen integrieren',
      features: [
        'REST API Aufrufe',
        'Streaming Responses',
        'Batch Processing',
        'Custom Models'
      ]
    },
    {
      title: 'Custom GPTs',
      description: 'Spezialisierte ChatGPT-Versionen erstellen',
      features: [
        'Eigene Wissensbasis',
        'Spezielle Anweisungen',
        'Custom Actions',
        'File Upload'
      ]
    },
    {
      title: 'Plugins & Tools',
      description: 'Erweiterte Funktionen nutzen',
      features: [
        'Web Browsing',
        'Code Interpreter',
        'DALL-E Integration',
        'Third-party Tools'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Fortgeschrittene ChatGPT Techniken
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Erweiterte Strategien und Techniken für Experten
          </p>
          <div className="flex justify-center mb-8">
            <img 
              src={advancedTipsImage} 
              alt="Advanced ChatGPT Techniques" 
              className="max-w-md w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Advanced Prompting Techniques */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Erweiterte Prompt-Techniken</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedTechniques.map((technique, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <technique.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{technique.title}</CardTitle>
                      <CardDescription>{technique.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Anwendungsbereiche:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {technique.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-current rounded-full mt-2 flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <h5 className="font-medium text-sm mb-1">Beispiel-Prompt:</h5>
                    <p className="text-xs text-muted-foreground font-mono">
                      {technique.prompt}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Erweiterte Funktionen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {apiFeatures.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm">
                        <Zap className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Complex Prompt Examples */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-6 w-6 text-green-600" />
              Komplexe Prompt-Beispiele
            </CardTitle>
            <CardDescription>
              Praxisnahe Beispiele für fortgeschrittene Anwendungen
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Beispiel 1: Strukturierte Analyse</h4>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="text-sm font-mono mb-4">
                  "Du bist ein erfahrener Unternehmensberater. Analysiere das folgende Geschäftsmodell 
                  systematisch nach diesen Kriterien:
                  <br/><br/>
                  1. Marktpotential (1-10 Punkte)<br/>
                  2. Wettbewerbsposition (1-10 Punkte)<br/>
                  3. Finanzielle Machbarkeit (1-10 Punkte)<br/>
                  4. Risikofaktoren (Liste)<br/>
                  5. Empfehlungen (3-5 konkrete Schritte)<br/>
                  <br/>
                  Geschäftsmodell: [Beschreibung]<br/>
                  <br/>
                  Begründe jede Bewertung ausführlich und nutze Branchenvergleiche."
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Beispiel 2: Kreative Problemlösung</h4>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="text-sm font-mono mb-4">
                  "Verwende die SCAMPER-Methode, um innovative Lösungen für folgendes Problem zu finden:
                  <br/><br/>
                  Problem: [Problembeschreibung]<br/>
                  <br/>
                  Gehe systematisch vor:<br/>
                  S - Substitute (Ersetzen): Was kann ersetzt werden?<br/>
                  C - Combine (Kombinieren): Was kann kombiniert werden?<br/>
                  A - Adapt (Anpassen): Was kann angepasst werden?<br/>
                  M - Modify (Modifizieren): Was kann verändert werden?<br/>
                  P - Put to other uses (Andere Verwendung): Wofür sonst nutzbar?<br/>
                  E - Eliminate (Eliminieren): Was kann weggelassen werden?<br/>
                  R - Reverse (Umkehren): Was kann umgekehrt werden?<br/>
                  <br/>
                  Entwickle für jeden Punkt 2-3 konkrete Ideen."
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Beispiel 3: Multi-Perspektiven Analyse</h4>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="text-sm font-mono mb-4">
                  "Analysiere das Thema '[Thema]' aus drei verschiedenen Perspektiven:
                  <br/><br/>
                  1. Perspektive des Optimisten:<br/>
                     - Welche Chancen siehst du?<br/>
                     - Was sind die besten Szenarien?<br/>
                     - Welche positiven Trends unterstützen diese Sicht?<br/>
                  <br/>
                  2. Perspektive des Pessimisten:<br/>
                     - Welche Risiken und Probleme siehst du?<br/>
                     - Was sind die schlimmsten Szenarien?<br/>
                     - Welche negativen Trends bereiten Sorgen?<br/>
                  <br/>
                  3. Perspektive des Realisten:<br/>
                     - Was ist die wahrscheinlichste Entwicklung?<br/>
                     - Welche Faktoren sind entscheidend?<br/>
                     - Wie können Chancen genutzt und Risiken minimiert werden?<br/>
                  <br/>
                  Fasse am Ende die wichtigsten Erkenntnisse zusammen."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workflow Integration */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Workflow className="h-6 w-6 text-purple-600" />
              Workflow-Integration
            </CardTitle>
            <CardDescription>
              ChatGPT in bestehende Arbeitsprozesse integrieren
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Content-Erstellung Workflow</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">1</Badge>
                    <span>Themenrecherche und Ideenfindung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">2</Badge>
                    <span>Gliederung erstellen lassen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">3</Badge>
                    <span>Abschnitte einzeln ausarbeiten</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">4</Badge>
                    <span>Überarbeitung und Optimierung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">5</Badge>
                    <span>SEO-Optimierung und Finalisierung</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Problemlösungs-Workflow</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">1</Badge>
                    <span>Problem klar definieren lassen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">2</Badge>
                    <span>Ursachenanalyse durchführen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">3</Badge>
                    <span>Lösungsoptionen generieren</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">4</Badge>
                    <span>Optionen bewerten und priorisieren</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">5</Badge>
                    <span>Umsetzungsplan entwickeln</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API and Technical Integration */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-6 w-6 text-orange-600" />
              API und technische Integration
            </CardTitle>
            <CardDescription>
              ChatGPT programmatisch nutzen
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">OpenAI API Grundlagen</h4>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`// Beispiel: API-Aufruf mit JavaScript
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [
      {
        role: 'user',
        content: 'Erkläre Quantencomputing einfach'
      }
    ],
    max_tokens: 500,
    temperature: 0.7
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);`}
                </pre>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Wichtige Parameter</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>temperature:</strong> Kreativität (0.0-2.0)</li>
                  <li><strong>max_tokens:</strong> Maximale Antwortlänge</li>
                  <li><strong>top_p:</strong> Nucleus Sampling</li>
                  <li><strong>frequency_penalty:</strong> Wiederholungen reduzieren</li>
                  <li><strong>presence_penalty:</strong> Neue Themen fördern</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Best Practices</h4>
                <ul className="space-y-2 text-sm">
                  <li>• API-Keys sicher speichern</li>
                  <li>• Rate Limits beachten</li>
                  <li>• Fehlerbehandlung implementieren</li>
                  <li>• Kosten überwachen</li>
                  <li>• Caching für häufige Anfragen</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* External Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Weiterführende Ressourcen</CardTitle>
            <CardDescription>
              Links und Materialien für fortgeschrittene Nutzer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Offizielle Ressourcen</h4>
                <ul className="space-y-2">
                  <li>
                    <Button variant="ghost" size="sm" asChild className="h-auto p-0 justify-start">
                      <a 
                        href="https://platform.openai.com/docs" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        OpenAI API Dokumentation <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" size="sm" asChild className="h-auto p-0 justify-start">
                      <a 
                        href="https://platform.openai.com/playground" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        OpenAI Playground <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" size="sm" asChild className="h-auto p-0 justify-start">
                      <a 
                        href="https://help.openai.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        OpenAI Help Center <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Community Ressourcen</h4>
                <ul className="space-y-2">
                  <li>
                    <Button variant="ghost" size="sm" asChild className="h-auto p-0 justify-start">
                      <a 
                        href="https://community.openai.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        OpenAI Community Forum <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </li>
                  <li>
                    <Button variant="ghost" size="sm" asChild className="h-auto p-0 justify-start">
                      <a 
                        href="https://github.com/openai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        OpenAI GitHub <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Advanced;


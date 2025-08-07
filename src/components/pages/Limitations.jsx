import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { AlertTriangle, Shield, Eye, Clock, Brain, Database, Globe, Lock } from 'lucide-react';

const Limitations = () => {
  const limitations = [
    {
      icon: Clock,
      title: 'Veraltete Informationen',
      description: 'ChatGPT hat einen Wissens-Stichtag',
      details: [
        'Trainingsdaten bis zu einem bestimmten Datum',
        'Keine aktuellen Ereignisse oder News',
        'Veraltete Fakten bei sich schnell ändernden Bereichen',
        'Keine Echtzeitinformationen'
      ],
      severity: 'medium'
    },
    {
      icon: Brain,
      title: 'Halluzinationen',
      description: 'ChatGPT kann falsche Informationen erfinden',
      details: [
        'Erfundene Fakten, die plausibel klingen',
        'Nicht existierende Quellen oder Studien',
        'Falsche Zahlen und Statistiken',
        'Imaginäre Personen oder Ereignisse'
      ],
      severity: 'high'
    },
    {
      icon: Database,
      title: 'Keine Internetverbindung',
      description: 'Kann nicht auf aktuelle Online-Informationen zugreifen',
      details: [
        'Keine Websuche möglich (in Standardversion)',
        'Kann keine URLs aufrufen',
        'Keine aktuellen Preise oder Verfügbarkeiten',
        'Keine Live-Daten abrufen'
      ],
      severity: 'medium'
    },
    {
      icon: Eye,
      title: 'Begrenzte Kontextlänge',
      description: 'Kann nur eine bestimmte Menge an Text verarbeiten',
      details: [
        'Vergisst frühere Teile sehr langer Gespräche',
        'Kann sehr lange Dokumente nicht vollständig analysieren',
        'Begrenzte Anzahl von Tokens pro Anfrage',
        'Kontext geht bei neuen Chats verloren'
      ],
      severity: 'medium'
    }
  ];

  const securityConcerns = [
    {
      icon: Lock,
      title: 'Datenschutz',
      description: 'Ihre Eingaben werden gespeichert und verarbeitet',
      risks: [
        'Gespräche können zur Modellverbesserung verwendet werden',
        'Sensible Daten könnten in Trainingsdaten einfließen',
        'Keine Garantie für vollständige Datenlöschung',
        'Mögliche Datenlecks bei Sicherheitsvorfällen'
      ]
    },
    {
      icon: Shield,
      title: 'Missbrauchspotential',
      description: 'ChatGPT kann für schädliche Zwecke missbraucht werden',
      risks: [
        'Erstellung von Desinformationen',
        'Phishing-E-Mails und Betrugsversuche',
        'Akademisches Fehlverhalten',
        'Manipulation und Propaganda'
      ]
    },
    {
      icon: Globe,
      title: 'Bias und Vorurteile',
      description: 'Trainingsdaten enthalten gesellschaftliche Vorurteile',
      risks: [
        'Kulturelle und sprachliche Verzerrungen',
        'Geschlechter- und ethnische Stereotypen',
        'Politische und ideologische Neigungen',
        'Überrepräsentation bestimmter Perspektiven'
      ]
    }
  ];

  const bestPractices = [
    {
      category: 'Informationen überprüfen',
      tips: [
        'Wichtige Fakten immer durch andere Quellen bestätigen',
        'Bei Zahlen und Statistiken besonders vorsichtig sein',
        'Aktuelle Ereignisse nicht von ChatGPT erfragen',
        'Wissenschaftliche Aussagen durch Fachliteratur prüfen'
      ]
    },
    {
      category: 'Datenschutz beachten',
      tips: [
        'Keine persönlichen Daten wie Namen, Adressen eingeben',
        'Keine Passwörter oder Zugangsdaten teilen',
        'Keine vertraulichen Geschäftsinformationen preisgeben',
        'Chat-Verlauf regelmäßig löschen'
      ]
    },
    {
      category: 'Verantwortungsvolle Nutzung',
      tips: [
        'ChatGPT nicht für wichtige Entscheidungen allein verwenden',
        'Eigenes kritisches Denken nicht ausschalten',
        'Bei akademischen Arbeiten Nutzung transparent machen',
        'Nicht für illegale oder schädliche Zwecke verwenden'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Grenzen & Sicherheit
          </h1>
          <p className="text-xl text-muted-foreground">
            Was ChatGPT nicht kann und wichtige Sicherheitsaspekte
          </p>
        </div>

        {/* Warning Banner */}
        <Card className="mb-12 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
              <AlertTriangle className="h-6 w-6" />
              Wichtiger Hinweis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-700 dark:text-orange-300">
              ChatGPT ist ein mächtiges Werkzeug, hat aber wichtige Einschränkungen. 
              Verstehen Sie diese Grenzen, um ChatGPT sicher und effektiv zu nutzen. 
              Überprüfen Sie wichtige Informationen immer durch andere Quellen.
            </p>
          </CardContent>
        </Card>

        {/* Technical Limitations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Technische Einschränkungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {limitations.map((limitation, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      limitation.severity === 'high' 
                        ? 'bg-red-100 dark:bg-red-900' 
                        : 'bg-yellow-100 dark:bg-yellow-900'
                    }`}>
                      <limitation.icon className={`h-6 w-6 ${
                        limitation.severity === 'high' 
                          ? 'text-red-600 dark:text-red-400' 
                          : 'text-yellow-600 dark:text-yellow-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl flex items-center gap-2">
                        {limitation.title}
                        <Badge variant={limitation.severity === 'high' ? 'destructive' : 'secondary'}>
                          {limitation.severity === 'high' ? 'Hoch' : 'Mittel'}
                        </Badge>
                      </CardTitle>
                      <CardDescription>{limitation.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {limitation.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-current rounded-full mt-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security and Privacy */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Sicherheit & Datenschutz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityConcerns.map((concern, index) => (
              <Card key={index} className="h-full border-red-200 dark:border-red-800">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                    <concern.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-xl">{concern.title}</CardTitle>
                  <CardDescription>{concern.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {concern.risks.map((risk, riskIndex) => (
                      <li key={riskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <AlertTriangle className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" />
                        {risk}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What ChatGPT Cannot Do */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Was ChatGPT NICHT kann</CardTitle>
            <CardDescription>
              Wichtige Einschränkungen, die Sie kennen sollten
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-red-600">Technische Grenzen</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Auf das Internet zugreifen (Standardversion)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Dateien speichern oder dauerhaft merken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Code ausführen oder Programme installieren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>E-Mails senden oder externe Services kontaktieren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Echtzeitdaten oder Live-Informationen abrufen</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-red-600">Inhaltliche Grenzen</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Garantiert korrekte Informationen liefern</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Persönliche Meinungen oder Gefühle haben</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Aus Erfahrungen lernen (zwischen Chats)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Rechtliche oder medizinische Beratung ersetzen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Komplexe mathematische Berechnungen fehlerfrei</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Best Practices für sichere Nutzung</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestPractices.map((practice, index) => (
              <Card key={index} className="h-full border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700 dark:text-green-300">
                    {practice.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {practice.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 text-sm">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ethical Guidelines */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Ethische Richtlinien</CardTitle>
            <CardDescription>
              Verantwortungsvolle Nutzung von ChatGPT
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Empfohlene Nutzung
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Als Hilfsmittel für Brainstorming und Ideenfindung</li>
                  <li>• Für Lernzwecke und Wissenserweiterung</li>
                  <li>• Als Schreibassistent für erste Entwürfe</li>
                  <li>• Zur Erklärung komplexer Konzepte</li>
                  <li>• Für kreative Projekte und Inspiration</li>
                  <li>• Als Programmier-Hilfe für Code-Snippets</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  Problematische Nutzung
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Vollständige Übernahme von Hausarbeiten</li>
                  <li>• Erstellung von Desinformationen</li>
                  <li>• Manipulation oder Betrug</li>
                  <li>• Ersatz für professionelle Beratung</li>
                  <li>• Verbreitung von Hassrede oder Diskriminierung</li>
                  <li>• Verletzung von Urheberrechten</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card>
          <CardHeader>
            <CardTitle>Hilfe und Support</CardTitle>
            <CardDescription>
              Wo Sie Hilfe finden, wenn Probleme auftreten
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Bei technischen Problemen</h4>
                <ul className="space-y-2 text-sm">
                  <li>• OpenAI Help Center besuchen</li>
                  <li>• Community Forum durchsuchen</li>
                  <li>• Support-Team kontaktieren</li>
                  <li>• Status-Seite für Ausfälle prüfen</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Bei Sicherheitsbedenken</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Verdächtige Aktivitäten melden</li>
                  <li>• Passwort sofort ändern</li>
                  <li>• Account-Einstellungen überprüfen</li>
                  <li>• Bei Datenschutzverletzungen: Behörden informieren</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Limitations;


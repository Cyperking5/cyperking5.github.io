import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Lightbulb, Target, MessageSquare, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

const TipsAndTricks = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ChatGPT Tipps & Tricks
          </h1>
          <p className="text-xl text-muted-foreground">
            Lernen Sie, wie Sie bessere Ergebnisse mit ChatGPT erzielen
          </p>
        </div>

        {/* Prompt Engineering Basics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-blue-600" />
              Prompt Engineering Grundlagen
            </CardTitle>
            <CardDescription>
              Die Kunst, effektive Prompts zu schreiben
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-green-600">✅ Gute Prompts</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                    <p className="text-sm font-medium mb-1">Spezifisch und klar</p>
                    <p className="text-xs text-muted-foreground">
                      "Schreibe eine 300-Wörter Produktbeschreibung für ein nachhaltiges T-Shirt aus Bio-Baumwolle"
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                    <p className="text-sm font-medium mb-1">Kontext bereitstellen</p>
                    <p className="text-xs text-muted-foreground">
                      "Als Marketingexperte für nachhaltige Mode, erstelle..."
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                    <p className="text-sm font-medium mb-1">Format angeben</p>
                    <p className="text-xs text-muted-foreground">
                      "Erstelle eine Liste mit 5 Punkten..."
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-red-600">❌ Schlechte Prompts</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                    <p className="text-sm font-medium mb-1">Zu vage</p>
                    <p className="text-xs text-muted-foreground">
                      "Schreibe etwas über T-Shirts"
                    </p>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                    <p className="text-sm font-medium mb-1">Ohne Kontext</p>
                    <p className="text-xs text-muted-foreground">
                      "Erstelle eine Beschreibung"
                    </p>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                    <p className="text-sm font-medium mb-1">Mehrdeutig</p>
                    <p className="text-xs text-muted-foreground">
                      "Mach was Gutes"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Techniques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-purple-600" />
              Fortgeschrittene Techniken
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Chain-of-Thought Prompting</h4>
                <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <p className="text-sm mb-2">
                    "Löse diese Matheaufgabe Schritt für Schritt: 15 × 24 + 8"
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Führt zu besseren Ergebnissen bei komplexen Problemen
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Role-Playing</h4>
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="text-sm mb-2">
                    "Du bist ein erfahrener Kochexperte. Erkläre mir, wie ich..."
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ChatGPT nimmt eine spezifische Rolle ein
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Few-Shot Learning</h4>
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <p className="text-sm mb-2">
                    "Beispiel 1: Input → Output<br/>Beispiel 2: Input → Output<br/>Jetzt: Neuer Input → ?"
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Beispiele zeigen das gewünschte Format
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Iterative Verbesserung</h4>
                <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                  <p className="text-sm mb-2">
                    "Das ist gut, aber kannst du es formeller/kreativer/kürzer machen?"
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Schrittweise Verbesserung der Antworten
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Do's and Don'ts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Do's and Don'ts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-green-600 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Das sollten Sie tun
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1">1</Badge>
                    <div>
                      <p className="font-medium">Seien Sie spezifisch</p>
                      <p className="text-sm text-muted-foreground">Je genauer Ihre Anfrage, desto besser die Antwort</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1">2</Badge>
                    <div>
                      <p className="font-medium">Kontext bereitstellen</p>
                      <p className="text-sm text-muted-foreground">Erklären Sie den Hintergrund Ihrer Anfrage</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1">3</Badge>
                    <div>
                      <p className="font-medium">Nachfragen stellen</p>
                      <p className="text-sm text-muted-foreground">ChatGPT merkt sich den Gesprächsverlauf</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1">4</Badge>
                    <div>
                      <p className="font-medium">Experimentieren</p>
                      <p className="text-sm text-muted-foreground">Probieren Sie verschiedene Formulierungen aus</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-600 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Das sollten Sie vermeiden
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="destructive" className="mt-1">1</Badge>
                    <div>
                      <p className="font-medium">Vage Anfragen</p>
                      <p className="text-sm text-muted-foreground">"Hilf mir" ist zu unspezifisch</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="destructive" className="mt-1">2</Badge>
                    <div>
                      <p className="font-medium">Blind vertrauen</p>
                      <p className="text-sm text-muted-foreground">Überprüfen Sie wichtige Informationen</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="destructive" className="mt-1">3</Badge>
                    <div>
                      <p className="font-medium">Zu komplexe Anfragen</p>
                      <p className="text-sm text-muted-foreground">Teilen Sie große Aufgaben in kleinere auf</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="destructive" className="mt-1">4</Badge>
                    <div>
                      <p className="font-medium">Persönliche Daten teilen</p>
                      <p className="text-sm text-muted-foreground">Geben Sie keine sensiblen Informationen preis</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prompt Templates */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-orange-600" />
              Nützliche Prompt-Vorlagen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Für Texterstellung</h4>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-sm font-mono">
                    "Schreibe einen [Texttyp] über [Thema] für [Zielgruppe]. 
                    Der Ton sollte [Stil] sein und etwa [Länge] lang. 
                    Berücksichtige dabei [spezielle Anforderungen]."
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Für Problemlösung</h4>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-sm font-mono">
                    "Ich habe folgendes Problem: [Problem beschreiben]. 
                    Mein Ziel ist [Ziel]. Welche Lösungsansätze gibt es? 
                    Erkläre Schritt für Schritt."
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Für Lernen</h4>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-sm font-mono">
                    "Erkläre mir [Konzept] so, als wäre ich [Wissenslevel]. 
                    Verwende einfache Beispiele und Analogien. 
                    Stelle mir dann Fragen, um mein Verständnis zu testen."
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
              Schnelle Tipps für bessere Ergebnisse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h5 className="font-semibold mb-2">🎯 Ziel definieren</h5>
                <p className="text-sm text-muted-foreground">
                  Sagen Sie ChatGPT genau, was Sie erreichen möchten
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h5 className="font-semibold mb-2">📝 Format angeben</h5>
                <p className="text-sm text-muted-foreground">
                  Spezifizieren Sie das gewünschte Ausgabeformat
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h5 className="font-semibold mb-2">🔄 Iterieren</h5>
                <p className="text-sm text-muted-foreground">
                  Verfeinern Sie Ihre Anfrage basierend auf der Antwort
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h5 className="font-semibold mb-2">🎭 Rollen nutzen</h5>
                <p className="text-sm text-muted-foreground">
                  Lassen Sie ChatGPT eine Expertenrolle einnehmen
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h5 className="font-semibold mb-2">📊 Beispiele geben</h5>
                <p className="text-sm text-muted-foreground">
                  Zeigen Sie Beispiele für das gewünschte Ergebnis
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h5 className="font-semibold mb-2">🔍 Nachfragen</h5>
                <p className="text-sm text-muted-foreground">
                  Stellen Sie Verständnisfragen und bitten um Klarstellungen
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TipsAndTricks;


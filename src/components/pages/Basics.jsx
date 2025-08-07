import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Brain, Cpu, MessageSquare, Zap } from 'lucide-react';

const Basics = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ChatGPT Grundlagen
          </h1>
          <p className="text-xl text-muted-foreground">
            Verstehen Sie die Grundlagen von ChatGPT und künstlicher Intelligenz
          </p>
        </div>

        {/* Was ist ChatGPT */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-blue-600" />
              Was ist ChatGPT?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              ChatGPT ist ein intelligentes Computerprogramm, das menschenähnliche Gespräche führen kann. 
              Es wurde mit riesigen Mengen an Texten trainiert, um zu verstehen und zu antworten, als ob es ein Mensch wäre.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-semibold mb-2">Kernfähigkeiten</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fragen beantworten</li>
                  <li>• Texte verfassen</li>
                  <li>• Sprachen übersetzen</li>
                  <li>• Code schreiben</li>
                  <li>• Kreative Inhalte erstellen</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-semibold mb-2">Besonderheiten</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lernt aus Gesprächen</li>
                  <li>• Versteht Kontext</li>
                  <li>• Reagiert auf Nachfragen</li>
                  <li>• Passt Stil an</li>
                  <li>• Erklärt komplexe Themen</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technische Grundlagen */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-6 w-6 text-green-600" />
              Wie funktioniert ChatGPT?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Large Language Model (LLM)
              </h4>
              <p className="text-muted-foreground mb-4">
                ChatGPT basiert auf einem "Large Language Model", das durch Milliarden von Textbeispielen 
                gelernt hat, menschliche Sprache zu verstehen und zu erzeugen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">1</span>
                </div>
                <h5 className="font-semibold mb-2">Training</h5>
                <p className="text-sm text-muted-foreground">
                  Lernt aus Millionen von Texten aus dem Internet
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">2</span>
                </div>
                <h5 className="font-semibold mb-2">Verarbeitung</h5>
                <p className="text-sm text-muted-foreground">
                  Analysiert Ihre Eingabe und versteht den Kontext
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">3</span>
                </div>
                <h5 className="font-semibold mb-2">Antwort</h5>
                <p className="text-sm text-muted-foreground">
                  Generiert passende Antworten basierend auf gelerntem Wissen
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GPT Bedeutung */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-purple-600" />
              Was bedeutet GPT?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Badge variant="secondary" className="mb-2 text-lg px-4 py-2">G</Badge>
                <h4 className="font-semibold mb-2">Generative</h4>
                <p className="text-sm text-muted-foreground">
                  Kann neue Inhalte erzeugen und erstellen
                </p>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-2 text-lg px-4 py-2">P</Badge>
                <h4 className="font-semibold mb-2">Pre-trained</h4>
                <p className="text-sm text-muted-foreground">
                  Vorab mit großen Datenmengen trainiert
                </p>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-2 text-lg px-4 py-2">T</Badge>
                <h4 className="font-semibold mb-2">Transformer</h4>
                <p className="text-sm text-muted-foreground">
                  Spezielle KI-Architektur für Sprachverständnis
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* OpenAI */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Wer steckt dahinter?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">OpenAI</h4>
              <p className="text-muted-foreground mb-4">
                ChatGPT wurde von OpenAI entwickelt, einem führenden Forschungsinstitut für künstliche Intelligenz 
                mit Sitz in San Francisco, gegründet 2015.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h5 className="font-semibold mb-2">Mission</h5>
                <p className="text-sm text-muted-foreground">
                  KI für alle zugänglich und nutzbar machen
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h5 className="font-semibold mb-2">Hauptgeldgeber</h5>
                <p className="text-sm text-muted-foreground">
                  Microsoft und andere Investoren
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Versionen */}
        <Card>
          <CardHeader>
            <CardTitle>ChatGPT Versionen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">ChatGPT (Kostenlos)</h4>
                  <p className="text-sm text-muted-foreground">Basiert auf GPT-3.5, grundlegende Funktionen</p>
                </div>
                <Badge variant="outline">Kostenlos</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">ChatGPT Plus</h4>
                  <p className="text-sm text-muted-foreground">GPT-4, schnellere Antworten, erweiterte Funktionen</p>
                </div>
                <Badge>$20/Monat</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Basics;


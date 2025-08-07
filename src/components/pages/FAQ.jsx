import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Häufig gestellte Fragen
          </h1>
          <p className="text-xl text-muted-foreground">
            Antworten auf die wichtigsten Fragen zu ChatGPT
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>FAQ Bereich</CardTitle>
            <CardDescription>
              Häufige Fragen und Antworten zu ChatGPT.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Hier werden die häufigsten Fragen zu ChatGPT beantwortet, 
              inklusive technischer Fragen, Nutzung und Troubleshooting.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;


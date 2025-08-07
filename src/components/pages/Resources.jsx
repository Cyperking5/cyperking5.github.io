import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const Resources = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ressourcen & Links
          </h1>
          <p className="text-xl text-muted-foreground">
            Weiterführende Materialien und nützliche Links
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Externe Ressourcen</CardTitle>
            <CardDescription>
              Sammlung nützlicher Links und Materialien.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Hier finden Sie weiterführende Links, offizielle Dokumentation, 
              Community-Ressourcen und zusätzliche Lernmaterialien.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;


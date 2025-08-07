import React from 'react';
import { Bot, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold">ChatGPT Guide</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Ihr umfassender Leitfaden für ChatGPT - von den Grundlagen bis zu fortgeschrittenen Techniken. 
              Lernen Sie, wie Sie ChatGPT effektiv nutzen können.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/grundlagen" className="hover:text-foreground transition-colors">Grundlagen</a></li>
              <li><a href="/erste-schritte" className="hover:text-foreground transition-colors">Erste Schritte</a></li>
              <li><a href="/tipps-tricks" className="hover:text-foreground transition-colors">Tipps & Tricks</a></li>
              <li><a href="/faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="font-semibold mb-4">Externe Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://chat.openai.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                >
                  ChatGPT <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://openai.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                >
                  OpenAI <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://platform.openai.com/docs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-1"
                >
                  API Docs <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 ChatGPT Guide. Erstellt als Bildungsressource. Nicht offiziell mit OpenAI verbunden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


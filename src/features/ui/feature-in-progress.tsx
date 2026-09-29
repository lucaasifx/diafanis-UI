import * as React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from './button';
import { LegalConstructionAnimation } from './legal-construction-animation';

export interface FeatureInProgressProps {
  title?: string;
  description?: string;
  backTo?: string;
  backLabel?: string;
  // Kept for backward compatibility with route props
  modulePath?: string;
  customConfig?: any;
}

export const FeatureInProgress: React.FC<FeatureInProgressProps> = ({
  title = 'Em construção',
  description = 'Nossa equipe de desenvolvimento está trabalhando sem parar para entregar essa funcionalidade com capricho para você.',
  backTo = '/calendar',
  backLabel = 'Voltar para a página inicial',
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] px-4 py-12 text-center max-w-lg mx-auto">
      {/* 1. Título com tags < > perfeitamente alinhadas e encorpadas */}
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6 font-headline">
        <span className="text-primary font-bold mr-1.5 select-none">&lt;</span>
        <span>{title}</span>
        <span className="text-primary font-bold ml-1.5 select-none">/&gt;</span>
      </h1>

      {/* 2. Desenho animado (construção + direito) */}
      <div className="my-2">
        <LegalConstructionAnimation />
      </div>

      {/* 3. Texto genérico */}
      <p className="text-sm text-muted-foreground mt-6 mb-8 max-w-sm leading-relaxed">
        {description}
      </p>

      {/* 4. Botão para voltar para a página inicial */}
      <Link to={backTo}>
        <Button className="gap-2 rounded-xl px-6 py-2.5 font-medium shadow-sm">
          <ArrowLeft className="h-4 w-4" />
          <span>{backLabel}</span>
        </Button>
      </Link>
    </div>
  );
};

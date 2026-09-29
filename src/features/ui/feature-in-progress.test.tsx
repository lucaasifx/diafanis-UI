import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FeatureInProgress } from './feature-in-progress';

// Mock TanStack Router
vi.mock('@tanstack/react-router', () => ({
  Link: ({ children, to, className }: any) => (
    <a href={to} className={className}>
      {children}
    </a>
  ),
  useRouterState: () => ({
    location: {
      pathname: '/deadlines',
    },
  }),
}));

describe('FeatureInProgress Component', () => {
  it('deve renderizar o título limpo "Em desenvolvimento"', () => {
    render(<FeatureInProgress />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Em desenvolvimento');
  });

  it('deve renderizar a animação vetorial que referencia construção e direito (balança da justiça)', () => {
    render(<FeatureInProgress />);

    expect(
      screen.getByLabelText('Ilustração animada da balança da justiça em construção')
    ).toBeInTheDocument();
  });

  it('deve renderizar o texto genérico e discreto sem poluição visual', () => {
    render(<FeatureInProgress />);

    expect(
      screen.getByText(/Esta funcionalidade está sendo desenvolvida com cuidado para a rotina forense/i)
    ).toBeInTheDocument();
  });

  it('deve renderizar o botão para voltar para a página inicial apontando para o calendário', () => {
    render(<FeatureInProgress />);

    const backButton = screen.getByRole('link', { name: /voltar para a página inicial/i });
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveAttribute('href', '/calendar');
  });

  it('deve permitir personalizar título e texto quando necessário', () => {
    render(
      <FeatureInProgress
        title="Módulo em desenvolvimento"
        description="Em breve novidades para sua banca."
      />
    );

    expect(screen.getByText('Módulo em desenvolvimento')).toBeInTheDocument();
    expect(screen.getByText('Em breve novidades para sua banca.')).toBeInTheDocument();
  });
});

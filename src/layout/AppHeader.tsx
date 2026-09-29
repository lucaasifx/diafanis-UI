import { Search, Bell, HelpCircle, Menu } from 'lucide-react';
import { useRouterState } from '@tanstack/react-router';
import { ThemeToggle } from '@/features/ui/theme-toggle';
import { BrandLogo } from '@/features/ui/brand-logo';
import { useSidebar } from './SidebarContext';
import { cn } from '@/shared/cn';

interface AppHeaderProps {
  onOpenMobileMenu?: () => void;
}

const getPageTitle = (path: string): string => {
  if (path.startsWith('/calendar')) return 'Calendário de Prazos';
  if (path.startsWith('/deadlines')) return 'Motor de Prazos';
  if (path.startsWith('/triage')) return 'Central de Documentos';
  if (path.startsWith('/messages')) return 'Notificações & Mensagens';
  if (path.startsWith('/financial')) return 'Gestão Financeira';
  return 'Dashboard Executivo';
};

export const AppHeader: React.FC<AppHeaderProps> = ({ onOpenMobileMenu }) => {
  const { isCollapsed } = useSidebar();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const pageTitle = getPageTitle(currentPath);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-20 flex h-16 items-center justify-between border-b border-border/30 bg-card/80 backdrop-blur-xl px-4 lg:px-8 transition-all duration-300 ease-in-out',
        isCollapsed ? 'lg:left-20' : 'lg:left-72'
      )}
    >
      {/* Left: Mobile Menu & Breadcrumbs */}
      <div className="flex items-center gap-3">
        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
          aria-label="Abrir menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium">
          {isCollapsed && (
            <BrandLogo size="sm" collapsed={true} className="mr-0.5 shrink-0" />
          )}
          <span className="text-muted-foreground">Diafanís</span>
          <span className="text-border">/</span>
          <span className="font-semibold text-foreground">{pageTitle}</span>
        </nav>
      </div>

      {/* Center: Search Bar */}
      <div className="hidden sm:flex flex-1 max-w-md mx-6">
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar processos, prazos ou clientes..."
            className="w-full rounded-full border border-border/50 bg-background/80 py-2 pl-10 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <ThemeToggle />

        <button
          type="button"
          aria-label="Notificações"
          className="relative rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
        </button>

        <button
          type="button"
          title="Central de Ajuda"
          aria-label="Central de Ajuda"
          className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <HelpCircle className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

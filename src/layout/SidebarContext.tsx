import * as React from 'react';

interface SidebarContextValue {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
  setCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsedState] = React.useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('diafanis_sidebar_collapsed');
      return stored === 'true';
    }
    return false;
  });

  const setCollapsed = React.useCallback((collapsed: boolean) => {
    setIsCollapsedState(collapsed);
    if (typeof window !== 'undefined') {
      localStorage.setItem('diafanis_sidebar_collapsed', String(collapsed));
    }
  }, []);

  const toggleCollapsed = React.useCallback(() => {
    setIsCollapsedState((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('diafanis_sidebar_collapsed', String(next));
      }
      return next;
    });
  }, []);

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleCollapsed, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
};

export function useSidebar(): SidebarContextValue {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

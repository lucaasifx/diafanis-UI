import * as React from 'react';
import { Users } from 'lucide-react';
import { Checkbox } from '@/features/ui/checkbox';
import { TeamMember } from './types';
import { cn } from '@/shared/cn';

interface TeamFilterListProps {
  members: TeamMember[];
  onToggleMember: (id: string) => void;
}

export const TeamFilterList: React.FC<TeamFilterListProps> = ({
  members,
  onToggleMember,
}) => {
  const selectedCount = members.filter((m) => m.selected).length;

  return (
    <div className="flex flex-col justify-between h-full gap-3">
      <div className="flex flex-col gap-2">
        {/* Title & Count Badge */}
        <div className="flex items-center justify-between pb-1.5 border-b border-border/20">
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-primary" />
            <span className="font-headline text-[11px] font-bold text-foreground uppercase tracking-wider">
              Equipe
            </span>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-muted border border-border/40 text-muted-foreground text-[10px] font-medium">
            {selectedCount} selecionados
          </span>
        </div>

        {/* Members list */}
        <div className="flex flex-col gap-1">
          {members.map((member) => (
            <label
              key={member.id}
              className="flex items-center justify-between py-1 px-1.5 rounded-lg hover:bg-muted/60 cursor-pointer transition-colors text-xs text-foreground select-none"
            >
              <div className="flex items-center gap-2 min-w-0">
                <Checkbox
                  checked={member.selected}
                  onCheckedChange={() => onToggleMember(member.id)}
                />
                {member.id !== 'me' && (
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold">
                    {member.initials}
                  </div>
                )}
                <span
                  className={cn(
                    'truncate text-[13px]',
                    member.id === 'me' ? 'font-semibold text-foreground' : 'text-muted-foreground'
                  )}
                >
                  {member.name}
                </span>
              </div>

              {member.badge && (
                <span
                  className={cn(
                    'text-[10px] px-1.5 py-0.5 rounded-full font-medium shrink-0',
                    member.badge === 'Você'
                      ? 'bg-secondary/15 text-secondary'
                      : 'bg-muted text-muted-foreground'
                  )}
                >
                  {member.badge}
                </span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Footer link */}
      <button
        type="button"
        className="w-full pt-2 text-center text-[11px] font-medium text-primary hover:text-primary/80 transition-colors border-t border-border/20 flex items-center justify-center gap-1.5"
      >
        <Users className="h-3 w-3" />
        <span>Ver mais 3 advogados</span>
      </button>
    </div>
  );
};

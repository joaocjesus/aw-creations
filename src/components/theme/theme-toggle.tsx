import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme/theme-context';
import { cn } from '@/lib/utils';

const themeOptions = [
  { value: 'light', label: 'Light theme', icon: Sun },
  { value: 'dark', label: 'Dark theme', icon: Moon },
] as const;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div
      className="flex items-center border border-[color:var(--border)] bg-[var(--background)]"
      role="group"
      aria-label="Theme selector"
    >
      {themeOptions.map(({ value, label, icon: Icon }) => (
        <Button
          key={value}
          type="button"
          variant="ghost"
          size="icon"
          className={cn(
            'h-9 w-9 rounded-none tracking-normal',
            resolvedTheme === value && 'bg-[var(--foreground)] text-[var(--background)] hover:text-[var(--background)]',
          )}
          onClick={() => setTheme(value)}
          aria-label={label}
          aria-pressed={resolvedTheme === value}
          title={label}
        >
          <Icon size={15} aria-hidden="true" />
        </Button>
      ))}
    </div>
  );
}

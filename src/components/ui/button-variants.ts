import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-medium uppercase tracking-[0.25em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--foreground)] text-[var(--background)] hover:bg-[color:var(--foreground-soft)]',
        outline:
          'border border-[color:var(--foreground)] bg-transparent text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]',
        ghost:
          'bg-transparent text-[color:var(--foreground-muted)] hover:text-[var(--foreground)]',
        link:
          'h-auto border-b border-[color:var(--foreground)] bg-transparent px-0 pb-1 text-[var(--foreground)]',
        icon:
          'rounded-full border border-[color:var(--border)] bg-[var(--background)] p-2 text-[color:var(--foreground-muted)] shadow-sm hover:text-[var(--foreground)]',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-9 px-4',
        lg: 'h-12 px-7',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

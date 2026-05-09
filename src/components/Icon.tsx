import type { SVGProps } from 'react';

const base: SVGProps<SVGSVGElement> = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

type IconProps = SVGProps<SVGSVGElement>;

export const Icon = {
  Play: (p: IconProps) => (
    <svg {...base} {...p}><polygon points="6 4 20 12 6 20 6 4" /></svg>
  ),
  Arrow: (p: IconProps) => (
    <svg {...base} {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
  ),
  ArrowDown: (p: IconProps) => (
    <svg {...base} {...p}><line x1="12" y1="5" x2="12" y2="19" /><polyline points="6 13 12 19 18 13" /></svg>
  ),
  Check: (p: IconProps) => (
    <svg {...base} {...p}><polyline points="20 6 9 17 4 12" /></svg>
  ),
  Plus: (p: IconProps) => (
    <svg {...base} {...p}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
  ),
  Camera: (p: IconProps) => (
    <svg {...base} {...p}><path d="M3 7h4l2-3h6l2 3h4v12H3z" /><circle cx="12" cy="13" r="4" /></svg>
  ),
  Film: (p: IconProps) => (
    <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="16" x2="21" y2="16" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" /></svg>
  ),
  Sparkle: (p: IconProps) => (
    <svg {...base} {...p}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M5.6 18.4l4.2-4.2M14.2 9.8l4.2-4.2" /></svg>
  ),
  Target: (p: IconProps) => (
    <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></svg>
  ),
  Strategy: (p: IconProps) => (
    <svg {...base} {...p}><path d="M3 20l5-5 4 4 9-9" /><polyline points="14 10 21 10 21 17" /></svg>
  ),
  Crew: (p: IconProps) => (
    <svg {...base} {...p}><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3 3-5 6-5s6 2 6 5" /><path d="M14 20c0-2 2-4 4-4s4 1.5 4 4" /></svg>
  ),
  Compass: (p: IconProps) => (
    <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><polygon points="15 9 13 13 9 15 11 11 15 9" /></svg>
  ),
  Mail: (p: IconProps) => (
    <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></svg>
  ),
  Calendar: (p: IconProps) => (
    <svg {...base} {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="16" y1="3" x2="16" y2="7" /></svg>
  ),
  Rocket: (p: IconProps) => (
    <svg {...base} {...p}><path d="M5 19c1-4 4-7 8-9 5-2 8-2 8-2s0 3-2 8c-2 4-5 7-9 8l-3-2-2-3z" /><circle cx="14" cy="10" r="1.5" /><path d="M5 19l-2 2" /></svg>
  ),
};

export type IconKey = keyof typeof Icon;

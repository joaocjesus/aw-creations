import type { ComponentType } from 'react';
import { CinematicTemplate } from './CinematicTemplate';
import { EditorialTemplate } from './EditorialTemplate';
import { BrutalistTemplate } from './BrutalistTemplate';
import { AuroraTemplate } from './AuroraTemplate';
import { MonoTemplate } from './MonoTemplate';
import { RetroTemplate } from './RetroTemplate';

export type TemplateMeta = {
  id: string;
  name: string;
  tagline: string;
  Component: ComponentType;
};

export const templates: TemplateMeta[] = [
  { id: 'cinematic', name: 'Cinematic', tagline: 'Dark luxury · current default', Component: CinematicTemplate },
  { id: 'editorial', name: 'Editorial', tagline: 'Light, serif, magazine', Component: EditorialTemplate },
  { id: 'brutalist', name: 'Brutalist', tagline: 'High contrast · raw type', Component: BrutalistTemplate },
  { id: 'aurora', name: 'Aurora', tagline: 'Gradient · glass cards', Component: AuroraTemplate },
  { id: 'mono', name: 'Mono', tagline: 'Swiss minimal · greyscale', Component: MonoTemplate },
  { id: 'retro', name: 'Retro', tagline: 'Pastel · playful stickers', Component: RetroTemplate },
];

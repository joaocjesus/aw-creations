import { useEffect, useState } from 'react';
import { templates } from '@/templates/registry';

const KEY = 'template';

function readId() {
  if (typeof window === 'undefined') return templates[0].id;
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get(KEY);
  if (fromQuery && templates.some((t) => t.id === fromQuery)) return fromQuery;
  const fromHash = window.location.hash.replace(/^#\/?/, '');
  if (fromHash && templates.some((t) => t.id === fromHash)) return fromHash;
  return templates[0].id;
}

function writeId(id: string) {
  const url = new URL(window.location.href);
  url.searchParams.set(KEY, id);
  url.hash = '';
  window.history.replaceState({}, '', url.toString());
}

export function useTemplateRouter() {
  const [id, setId] = useState<string>(() => readId());

  useEffect(() => {
    const onPop = () => setId(readId());
    window.addEventListener('popstate', onPop);
    window.addEventListener('hashchange', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('hashchange', onPop);
    };
  }, []);

  const select = (next: string) => {
    if (next === id) return;
    writeId(next);
    setId(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return { id, select };
}

export function TemplateSwitcher({ id, onSelect }: { id: string; onSelect: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  const idx = Math.max(0, templates.findIndex((t) => t.id === id));
  const current = templates[idx];
  const prev = templates[(idx - 1 + templates.length) % templates.length];
  const next = templates[(idx + 1) % templates.length];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target && (e.target as HTMLElement).tagName.match(/INPUT|TEXTAREA/)) return;
      if (e.key === 'ArrowLeft') onSelect(prev.id);
      else if (e.key === 'ArrowRight') onSelect(next.id);
      else if (e.key === 't' || e.key === 'T') setOpen((v) => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev.id, next.id, onSelect]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        colorScheme: 'dark',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 0,
          background: 'rgba(10,10,12,0.85)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: 999,
          padding: 4,
          boxShadow: '0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04) inset',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
      >
        <button
          onClick={() => onSelect(prev.id)}
          aria-label="Previous template"
          style={btnStyle()}
          title={`← ${prev.name}`}
        >
          ←
        </button>
        <button
          onClick={() => setOpen((v) => !v)}
          style={{
            ...btnStyle(),
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            minWidth: 220,
            justifyContent: 'space-between',
          }}
          aria-expanded={open}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              fontSize: 10,
              letterSpacing: 2,
              textTransform: 'uppercase',
              opacity: 0.55,
              fontVariantNumeric: 'tabular-nums',
            }}>
              {String(idx + 1).padStart(2, '0')}/{String(templates.length).padStart(2, '0')}
            </span>
            <span style={{ fontWeight: 600, fontSize: 13 }}>{current.name}</span>
            <span style={{ opacity: 0.55, fontSize: 12 }}>· {current.tagline}</span>
          </span>
          <span style={{ opacity: 0.7, fontSize: 11 }}>{open ? '▾' : '▴'}</span>
        </button>
        <button
          onClick={() => onSelect(next.id)}
          aria-label="Next template"
          style={btnStyle()}
          title={`${next.name} →`}
        >
          →
        </button>
      </div>

      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 10px)',
            left: 0,
            right: 0,
            background: 'rgba(10,10,12,0.92)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 18,
            padding: 8,
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            maxHeight: 360,
            overflowY: 'auto',
          }}
        >
          <div style={{ padding: '8px 12px 4px', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.55 }}>
            Choose a template
          </div>
          {templates.map((t, i) => {
            const active = t.id === id;
            return (
              <button
                key={t.id}
                onClick={() => {
                  onSelect(t.id);
                  setOpen(false);
                }}
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'baseline',
                  gap: 12,
                  padding: '10px 12px',
                  border: 'none',
                  background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
                  borderRadius: 12,
                  color: 'inherit',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                <span style={{ fontSize: 10, opacity: 0.5, fontVariantNumeric: 'tabular-nums', minWidth: 22 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontWeight: 600, fontSize: 14, minWidth: 110 }}>{t.name}</span>
                <span style={{ opacity: 0.6, fontSize: 12 }}>{t.tagline}</span>
                {active && <span style={{ marginLeft: 'auto', fontSize: 11, opacity: 0.7 }}>● active</span>}
              </button>
            );
          })}
          <div style={{ padding: '8px 12px 4px', fontSize: 10, opacity: 0.45, borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 6 }}>
            Tip: ← / → arrow keys to switch · press T to toggle this menu
          </div>
        </div>
      )}
    </div>
  );
}

function btnStyle(): React.CSSProperties {
  return {
    appearance: 'none',
    background: 'transparent',
    color: 'inherit',
    border: 'none',
    borderRadius: 999,
    padding: '8px 12px',
    fontSize: 14,
    cursor: 'pointer',
    fontWeight: 500,
  };
}

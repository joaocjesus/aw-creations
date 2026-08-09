import { lazy, Suspense } from 'react';
import { EditorialTemplate } from '@/templates/EditorialTemplate';

const ContactPage = lazy(() => import('@/pages/ContactPage'));

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '/contact') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-[var(--background)]" />}>
        <ContactPage />
      </Suspense>
    );
  }

  return <EditorialTemplate />;
}

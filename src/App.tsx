import { useEffect } from 'react';
import { templates } from '@/templates/registry';
import { TemplateSwitcher, useTemplateRouter } from '@/components/TemplateSwitcher';

export default function App() {
  const { id, select } = useTemplateRouter();
  const Active = (templates.find((t) => t.id === id) ?? templates[0]).Component;

  useEffect(() => {
    document.documentElement.dataset.template = id;
  }, [id]);

  return (
    <>
      <Active key={id} />
      <TemplateSwitcher id={id} onSelect={select} />
    </>
  );
}

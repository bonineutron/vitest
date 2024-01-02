import { useState } from 'react';

interface AccordionProps {
  title: string;
  children: JSX.Element;
}

export default function Accordion({
  title,
  children,
}: AccordionProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <button onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Open'}
        </button>
      </div>
      {open && <div>{children}</div>}
    </div>
  );
}

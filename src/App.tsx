import Accordion from './library/components/Accordion/Accordion';

export default function App(): JSX.Element {
  return (
    <div className="absolute h-full w-full flex justify-center items-center text-white">
      <Accordion title="Hello">
        <div>Este es el children</div>
      </Accordion>
    </div>
  );
}

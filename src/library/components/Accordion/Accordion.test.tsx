import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion', () => {
  beforeEach(() => {
    render(
      <Accordion title="Hello">
        <div>Este es el test de children</div>
      </Accordion>
    );
  });

  test('Should show the accordion component', () => {
    expect(screen.getByText('Hello')).toBeDefined();
  });

  test('Should not the children at the start', () => {
    expect(screen.queryByText(/children/i)).toBeNull();
  });

  test('Should show the children white title is clicked', () => {
    const button = screen.getByText(/Open/i);
    fireEvent.click(button);
    expect(screen.queryByText(/children/i)).toBeDefined();
  });

  test('Should hide show the children white title is clicked', () => {
    const button = screen.getByText(/Open/i);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/children/i)).toBeNull();
  });
});

import { describe } from "node:test";
import { render, screen } from '@testing-library/react';

describe('Testing Jest', () => {
  it('Should not break if missing jest setup', () => {
    render(<button>TESTING</button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  })
});
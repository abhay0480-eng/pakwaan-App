import '@testing-library/jest-dom';
import {render, screen,act} from '@testing-library/react'
import About from '../../Pages/About'


global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ /* mock data */ }),
    })
  );

test("Should load About page as component",async() => {
    await act(async () => {
        render(<About />);
      });
        const heading = screen.getByRole("heading")

        expect(heading).toBeInTheDocument();
})

test("Should load text inside About Component ", async() => {
    await act(async () => {
        render(<About />);
      });
    const button = screen.getByAltText("GitHub Avatar")

    expect(button).toBeInTheDocument()
})
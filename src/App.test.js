import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('App', () => {
  it('renders content', () => {
    render(<App />);
    const headerElement = screen.getByText(/Hello World/i);
    const buttonElement  =screen.getByRole('button');
    const inputElement = screen.getByPlaceholderText(/input value.../i);
    expect(headerElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toMatchSnapshot();
  });

  it('doesn\'t render content', () => {
    render(<App />);
    const headerElement = screen.queryByText(/data/i);
    expect(headerElement).toBeNull();
  });

  it('renders data div', async () => {
    render(<App />);
    const headerElement = await screen.findByText(/data/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('toggles content', async () => {
    render(<App />);
    const buttonElement = screen.getByTestId('toggle-button');
    expect(screen.queryByTestId('toggle-element')).toBeNull();
    userEvent.click(buttonElement);
    expect(screen.getByTestId('toggle-element')).toBeInTheDocument();
    userEvent.click(buttonElement);
    expect(screen.queryByTestId('toggle-element')).toBeNull();
  });

  it('correctly renders input', async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/input value.../i);
    const inputValueHeader = screen.getByTestId('input-value');
    expect(inputValueHeader).toHaveTextContent('');
    userEvent.type(inputElement, 'Hello, MazzaFakka!');
    expect(inputValueHeader).toHaveTextContent('Hello, MazzaFakka!');
  });
});


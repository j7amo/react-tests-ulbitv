import {render, screen} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";

describe('Router', () => {
    it('should render different routes', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId('main-link')).toBeInTheDocument();
        expect(screen.getByTestId('about-link')).toBeInTheDocument();
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
        userEvent.click(screen.getByTestId('about-link'));
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        userEvent.click(screen.getByTestId('main-link'));
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    it('should render not found page', () => {
        render(
            <MemoryRouter initialEntries={['/asjkhdfskhfaejefd']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId('main-link')).toBeInTheDocument();
        expect(screen.getByTestId('about-link')).toBeInTheDocument();
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
});
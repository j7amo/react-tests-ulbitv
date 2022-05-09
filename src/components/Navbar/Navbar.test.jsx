import { screen } from "@testing-library/react";
import {renderWithRouter} from "../../tests/helpers/renderWithRouter";
import Navbar from "./Navbar";
import userEvent from "@testing-library/user-event";

describe('Navbar', () => {
    it('should redirect to main page', () => {
        renderWithRouter(<Navbar />);
        const mainLink = screen.getByTestId('main-link');
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    it('should redirect to about page', () => {
        renderWithRouter(<Navbar />);
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    it('should redirect to users page', () => {
        renderWithRouter(<Navbar />);
        const usersLink = screen.getByTestId('users-link');
        userEvent.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    });
});

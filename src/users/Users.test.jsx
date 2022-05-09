import axios from "axios";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Users from "./Users";
import AppRouter from "../router/AppRouter";
import App from "../App";
import {renderWithRouter} from "../tests/helpers/renderWithRouter";

jest.mock('axios');

let response = {
    data: [
        {
            "id": 1,
            "name": "Leanne Graham",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
        },
    ]
}

describe('Users', () => {
    it('should render users', async () => {
        axios.get.mockReturnValue(response);
        render(
            <MemoryRouter>
                <Users />
            </MemoryRouter>
        );
        const users = await screen.findAllByTestId('user-item');
        expect(users).toHaveLength(3);
    });

    it('should render user details page after clicking user link', async () => {
        axios.get.mockReturnValue(response);
        renderWithRouter(<Users />);
        const users = await screen.findAllByTestId('user-item');
        await userEvent.click(users[0]);
        expect(screen.getByTestId('user-details-page')).toBeInTheDocument();
    });
});
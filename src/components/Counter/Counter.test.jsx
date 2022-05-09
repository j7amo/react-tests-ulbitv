import {render, screen} from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe('Counter', function () {
    it('should render content', async function () {
        renderTestApp(null,{
            initialState: {
                count: {
                    value: 10
                }
            },
            initialEntries: '/'
        })
        const valueHeader = screen.getByTestId('value-header');
        const incrementButton = screen.getByTestId('increment-button');
        const decrementButton = screen.getByTestId('decrement-button');
        expect(valueHeader).toBeInTheDocument();
        expect(valueHeader).toHaveTextContent('0');
        expect(incrementButton).toBeInTheDocument();
        expect(decrementButton).toBeInTheDocument();
        userEvent.click(incrementButton);
        expect(valueHeader).toHaveTextContent('11');
        userEvent.click(decrementButton);
        userEvent.click(decrementButton);
        expect(valueHeader).toHaveTextContent('9');
    });
});


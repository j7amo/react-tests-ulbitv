import counterReducer, {decrement, increment} from "./counterSlice";

describe('counterReducer', function () {
    it('should increment counter value', function () {
        expect(counterReducer({value: 0}, increment())).toEqual({value: 1});
    });

    it('should decrement counter value', function () {
        expect(counterReducer({value: 0}, decrement())).toEqual({value: -1});
    });

    it('should increment counter value when state is empty', function () {
        expect(counterReducer(undefined, increment())).toEqual({value: 1});
    });

    it('should decrement counter value when state is empty', function () {
        expect(counterReducer(undefined, decrement())).toEqual({value: -1});
    });
});
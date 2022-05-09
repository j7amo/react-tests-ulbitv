import {getCounterValue} from "./getCounterValue";

describe('getCounterValue', function () {
    it('should work with empty state', function () {
        expect(getCounterValue({})).toBe(0);
    });

    it('should work with non-empty state', function () {
        expect(getCounterValue({
            count: {
                value: 1
            }
        })).toBe(1);
    });
});
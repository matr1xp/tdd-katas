const isLeapYear = require('./leapyear');

test('Test whether it is a leapyear', () => {
    expect(isLeapYear(400)).toBe(false);
    expect(isLeapYear(1582)).toBe(false);
    
    expect(isLeapYear(1800)).toBe(false);
    expect(isLeapYear(2100)).toBe(false);

    expect(isLeapYear(1600)).toBe(true);
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2008)).toBe(true);

    expect(isLeapYear(2017)).toBe(false);
    expect(isLeapYear(2018)).toBe(false);
});
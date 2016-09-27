describe("#calculateTipAmount", function () {

    it("should be defined", function () {
        expect(calculateTipAmount).toBeDefined();
    });

    it("should take a billAmount and tipPercent and return a tipAmount", function () {
        var tipAmount = calculateTipAmount(100, 0.25);
        expect(tipAmount).toBe(25.00);

        tipAmount = calculateTipAmount(50, 0.2);
        expect(tipAmount).toBe(10.00);
    });

    it("should round numbers off to two decimal places", function () {
        var tipAmount = calculateTipAmount(6.23, 0.21);
        expect(tipAmount).toBe(1.31);

        tipAmount = calculateTipAmount(2.23, 0.2);
        expect(tipAmount).toBe(.45);
    });

});

describe("#calculateTip", function () {

    it("should be defined", function () {
        expect(calculateTip).toBeDefined();
    });

});
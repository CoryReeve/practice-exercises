describe("#calculateTipAmount", function () {

    it("should be defined", function () {
        expect(calculateTipAmount).toBeDefined();
    });

    it("should take a billAmount and tipPercent and return a tipAmount", function () {
        var tipAmount = calculateTipAmount(100, 25);
        expect(tipAmount).toBe(25);

        tipAmount = calculateTipAmount(50, 20);
        expect(tipAmount).toBe(10);
    });
});
describe("#calculateTip", function () {

    it("should be defined", function(){
        expect(calculateTip).toBeDefined();
    });

    it("should take a billAmount and tipPercent and return a tipAmount", function () {
        var tipAmount = calculateTip(100, 25);
        expect(tipAmount).toBe(25);

        tipAmount = calculateTip(50, 20);
        expect(tipAmount).toBe(10);
    });
});
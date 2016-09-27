// MDN rounding page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

/**
 * Decimal adjustment of a number
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Decimal round - taken from MDN page for rounding numbers
if (!Math.round10) {
    Math.round10 = function (value, exp) {
        return decimalAdjust('round', value, exp);
    };
}

var calculateTipAmount = function calculateTipAmount(amount, tipPercent) {
    if (tipPercent > 1) {
        tipPercent = (tipPercent / 100)
    }
    return Math.round10((amount * tipPercent), -2);
};

function calculateTip(amount, tip) {
    var tipAmount = calculateTipAmount(amount, tip),
        totalAmount = amount + tipAmount;

    document.getElementById("bill").innerHTML = "$" + amount;
    document.getElementById("tip").innerHTML = "$" + tipAmount;
    document.getElementById("total").innerHTML = "$" + totalAmount;
}

function tipFromForm() {
    var billAmount = parseFloat(document.getElementById("billAmount").value),
        tipAmount = parseFloat(document.getElementById("tipAmount").value);

    calculateTip(billAmount, tipAmount);
}
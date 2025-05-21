"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumEvenNumbers = sumEvenNumbers;
function sumEvenNumbers(arr) {
    var n = arr.length;
    var sum_total = 0;
    for (var i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            sum_total += arr[i];
        }
    }
    return sum_total;
}

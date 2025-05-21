"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenArray = flattenArray;
function flattenArray(arr) {
    var arr1 = new Array();
    function flattened(arr) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var element = arr_1[_i];
            if (Array.isArray(element)) {
                flattened(element);
            }
            else {
                arr1.push(element);
            }
        }
    }
    flattened(arr);
    return arr1;
}

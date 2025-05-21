"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDuplicates = findDuplicates;
function findDuplicates(arr) {
    var final_string = [];
    var myMap = new Map();
    for (var i = 0; i < arr.length; i++) {
        if (myMap.has(arr[i])) {
            var Value = myMap.get(arr[i]);
            if (Value == 1) {
                myMap.set(arr[i], 2);
                final_string.push(arr[i]);
            }
        }
        else {
            myMap.set(arr[i], 1);
        }
    }
    return final_string;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupAnagrams = groupAnagrams;
function groupAnagrams(words) {
    var myMap = new Map();
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var element = words_1[_i];
        var key = element.split('').sort().join('');
        if (!myMap.has(key)) {
            myMap.set(key, []);
        }
        myMap.get(key).push(element);
    }
    return Array.from(myMap.values());
}

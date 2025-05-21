"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var q1_1 = require("./q1");
var q2_1 = require("./q2");
var q3_1 = require("./q3");
var q4_1 = require("./q4");
console.log((0, q1_1.sumEvenNumbers)([1, 2, 3, 4]));
// Output : 6
console.log((0, q2_1.findDuplicates)(["wdjen", "wdjen", "aa", "aa", "aa", "a"]));
// Output : ["wdjen","aa"]
console.log((0, q3_1.flattenArray)([[[[1]]], 2, [[[3]]], 4]));
// Output: [1, 2, 3, 4]
console.log((0, q4_1.groupAnagrams)(["abc", "bca", "cab", "xyz", "zyx", "yxz", "foo", "ofo"]));
// Output: [ ["abc", "bca", "cab"], ["xyz", "zyx", "yxz"], ["foo", "ofo"] ]

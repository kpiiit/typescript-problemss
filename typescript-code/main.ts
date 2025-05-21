import {sumEvenNumbers} from './q1';
import {findDuplicates} from './q2';
import {flattenArray} from './q3';
import {groupAnagrams} from './q4';

console.log(sumEvenNumbers([1, 2, 3, 4]));
// Output : 6
console.log(findDuplicates(["wdjen","wdjen","aa","aa","aa","a"]));
// Output : ["wdjen","aa"]
console.log(flattenArray([[[[1]]], 2, [[[3]]], 4])); 
// Output: [1, 2, 3, 4]
console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "zyx", "yxz", "foo", "ofo"]));
// Output: [ ["abc", "bca", "cab"], ["xyz", "zyx", "yxz"], ["foo", "ofo"] ]

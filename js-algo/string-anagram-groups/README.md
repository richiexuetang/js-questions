# String Anagram Groups

Given an array of strings `strs`, group the strings that are anagrams of each other. The result can be returned in any order.

An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once.

## Input

- `strs: string[]`: An array of strings

## Examples

```
Input: strs = ["abc","bca","cab","xyz","zyx"]
Output: [["abc","bca","cab"],["xyz","zyx"]]
```

Explanation: Two anagram groups: 'abc'-'bca'-'cab' and 'xyz'-'zyx'.

```
Input: strs = ["rat","tar","art","car","arc"]
Output: [["arc","car"],["art","rat","tar"]]
Explanation: Two anagram groups: 'car'-'arc' and 'rat'-'tar'-'art'.
```

```
Input: strs = ["kxac","swavb","lmq","lvhc","sjey"]
Output: [["kxac"],["lmq"],["lvhc"],["sjey"],["swavb"]]
Explanation: Each word has no anagram in the list.
```

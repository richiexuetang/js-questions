# Segment words

Given a string `str` and a list of words `dict`, determine if `str` can be segmented into a sequence of one or more words from dict. Words from dict can be reused multiple times in the segmentation.

Return `true` if it is possible to segment `str`, and `false` otherwise.

## Input

- `str: string`: A string representing the string to be segmented
- `dict: string[]`: An array of strings representing the dictionary of available words

### Notes

- Words from `dict` can be used multiple times in the segmentation

### Examples

```
Input: str = "greatfrontendgreat", dict = ["frontend","great"]
Output: true
Explanation: The string can be segmented as 'great' + 'frontend' + 'great' as we can re-use 'great'.
```

```
Input: str = "abcd", dict = ["a","abc","b","cd"]
Output: true
Explanation: The string can be segmented as 'a' + 'b' + 'cd'.
```

```
Input: str = "a", dict = ["b"]
Output: false
Explanation: The single character 'a' is not in the word dictionary.
```

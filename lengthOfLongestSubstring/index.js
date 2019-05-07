/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

var lengthOfLongestSubstring = function (str) {
    if (str.length === 1) {
        return 1
    }
    let finalStr = ''
    let max = 0
    let currentMax = 0
    for (let i = 0; i < str.length; i++) {
        for (let a of str.slice(i)) {
            if (finalStr.includes(a)) {
                finalStr = ''
                if (currentMax > max) {
                    max = currentMax
                }
                currentMax = 0
                break
            } else {
                finalStr += a
                currentMax++
            }
        }
    }
    return max
}


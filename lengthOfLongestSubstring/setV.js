var lengthOfLongestSubstring = function(s) {
    const group = new Set()
    const n = s.length
    let len = 0, i = 0, j = 0
    while (i < n && j < n) {
        if (!group.has(s[j])) {
            group.add(s[j])
            j++
            len = Math.max(len, group.size)
        } else {
            group.delete(s[i])
            i++
        }
    }
    return len
}


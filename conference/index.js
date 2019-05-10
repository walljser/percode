const a = [
  { id: 1, begin: 3, end: 6 },
  { id: 2, begin: 1, end: 4 },
  { id: 3, begin: 5, end: 7 },
  { id: 4, begin: 2, end: 5 },
  { id: 5, begin: 5, end: 9 },
  { id: 6, begin: 3, end: 8 },
  { id: 7, begin: 8, end: 11 },
  { id: 8, begin: 6, end: 10 },
  { id: 9, begin: 8, end: 12 },
  { id: 10, begin: 12, end: 14 }
]

a.sort((a, b) => {
  if (a.end === b.end) {
    return a.begin > b.begin
  }
  return a.end > b.end
})

let ans = 1
let last = a[0].end

console.log('选择第' + a[0].id + '个会议')
for (let i = 0; i < a.length; i++) {
  if (a[i].begin >= last) {
    ans++
    last = a[i].end
    console.log('选择第' + a[i].id + '个会议')
  }
}
console.log('最多可以安排' + ans + '个会议')

const a = [
  [2, 8],
  [6, 1],
  [7, 9],
  [4, 3],
  [10, 2],
  [3, 4],
]
const g = []
const len = a.length
let m = 19
let sum = 0
for (let i = 0; i < len; i++) {
  g.push({
    w: a[i][0],
    v: a[i][1],
    p: a[i][1] / a[i][0]
  })
}

g.sort((a, b) => {
  if (a.p > b.p) {
    return -1
  }
  if (a.p < b.p) {
    return 1
  }
  return 0
})

for (let i = 0; i < len; i++) {
  if (m > g[i].w) {
    m -= g[i].w
    sum += g[i].v
  } else {
    sum += m * g[i].p
    break
  }
}

console.log('Maxinum value = ' + sum)

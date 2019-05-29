/**
 * 最小生成树
 */
const INF = 65535

const c = [
  [INF, 23, INF, INF, INF, 28, 36],
  [23, INF, 20, INF, INF, INF, 1],
  [INF, 20, INF, 15, INF, INF, 4],
  [INF, INF, 15, INF, 3, INF, 9],
  [INF, INF, INF, 3, INF, 17, 16],
  [28, INF, INF, INF, 17, INF, 25],
  [36, 1, 4, 9, 16, 25, INF]
]
const p = [0, 1, 2, 3, 4, 5, 6]
const s = []
let lowcost = [], closest = []

function prim (n, u0, c) {
  s[u0] = true
  for (let i = 0; i < n; i++) {
    if (i !== u0) {
      lowcost[i] = c[u0][i]
      closest[i] = u0
      s[i] = false
    } else {
      lowcost[i] = 0
    }
  }
  for (let i = 0; i < n; i++) {
    let temp = INF
    let t = u0
    for (let j = 0; j < n; j++) {
      // 寻找未加入V-U集合中，离U集合最近的顶点t
      // console.log(s[j])
      // console.log(lowcost[j])
      if (!s[j] && lowcost[j] < temp) {
        console.log(j)
        t = j
        temp = lowcost[j]
      }
    }
    if (t === u0) {
      // 找不到t，跳出循环
      break
    }
    s[t] = true // 把t加入集合U中
    // 更新lowcost和closest
    for (let j = 0; j <n; j++) {
      if (!s[j] && c[t][j] < lowcost[j]) {
        lowcost[j] = c[t][j]
        closest[j] = t
      }
    }
  }
}

prim(7, 0, c);

console.log('数组lowcost的内容为: ')
console.log(lowcost)
let cost = 0
for (let i = 0; i < lowcost.length; i++) {
  cost += lowcost[i]
}
console.log('最小化费是: ' + cost)

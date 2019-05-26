const INF = 65535
const map = [
  [],
  [INF, 0, 16, 15, INF, 12],
  [INF, 29, 0, INF, 13, INF],
  [INF, 21, INF, 0, 7, INF],
  [INF, INF, 27, 19, 0, INF],
  [INF, 8, 32, INF, INF, 0]
]
const dist = []
const p = []
const flag = [] // 标记顶点是否已加入到集合S中
let n = map.length - 1

function Dijkstra (u) {
  for (let i = 1; i <= n; i++) {
    dist[i] = map[u][i] // 初始化源点到各个点的最短路径
    flag[i] = false
    if (dist[i] === INF) {
      p[i] = -1 // -1代表源点与点i不相邻
    } else {
      p[i] = u // 说明相邻，设置定点i的前驱p[i]为u
    }
  }
  dist[u] = 0
  flag[u] = true
  // console.log(dist)
  // console.log(flag)
  for (let i = 1; i <= n; i++) {
    // 将目前找到的最近的顶点设为u，距离初始化为无限大
    let temp = INF, t = u
    // 寻找距离源点距最近的点
    for (let j = 1; j <= n; j++) {
      if (!flag[j] && dist[j] < temp) {
        t = j
        // 修改距离
        temp = dist[j]
      }
    }
    // 如果没有找到，就跳出循环
    if (t === u) {
      console.log('跳出循环')
      return
    }
    // 将这个邻接顶点放到集合V中
    flag[t] = true
    for (let j = 1; j <= n; j++) { // 更新V-S中与邻接顶点t到源点的距离
      if (!flag[j] && map[t][j] < INF) { // flag[j] === true 的话表示 j顶点已经在集合V中，只需在集合S-V中寻找
        if (dist[j] > (dist[t] + map[t][j])) {
          // 修改距离
          dist[j] = dist[t] + map[t][j]
          // 修改邻接顶点
          p[j] = t
        }
      }
    }
  }
}

Dijkstra(5)
console.log(dist)
console.log(p)
for (let i = 1; i <= n; i++) {
  const pre = '小明要去的位置 ' + i
  if (dist[i] === INF) {
    console.log(pre + ' - 无法到达')
  } else {
    console.log(pre + ' - 最短距离为： ' + dist[i])
  }
}

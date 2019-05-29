/**
 * quick sort
 */

function quickSort (arr) {;
  if (arr.length < 2) {
    return arr
  }
  let privotIndex = Math.floor(arr.length / 2)
  let privot = arr.splice(privotIndex, 1)[0]
  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= privot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([privot], quickSort(right))
}

function produceDrivingRange(blockRange) {
  return function(start, finish) {
    start = parseInt(start)
    finish = parseInt(finish)
    let distance = Math.abs(finish - start)
    let difference = blockRange - distance
    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return (fare * percent)
  }
}
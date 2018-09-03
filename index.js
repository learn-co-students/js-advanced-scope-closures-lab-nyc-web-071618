function produceDrivingRange(blockRange) {
  return function (startingBlock, endingBlock) {
    let start = parseInt(startingBlock)
    let end = parseInt(endingBlock)
    let blocks = Math.abs(start - end)
    let difference = Math.abs(blocks - blockRange)

    if (blocks > blockRange) {
      return `${difference} blocks out of range`
    } else {
      return `within range by ${difference}`
    }
  }
}

function produceTipCalculator(fare) {
  return (percentage) => fare * percentage
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}

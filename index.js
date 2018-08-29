
const produceDrivingRange = function(numBlocks) {
  return function(start, destination) {
    start = start.slice(0, -2)
    // console.log("start", start)
    destination = destination.slice(0, -2)
    // console.log("destination", destination)
    distance = Math.abs(destination - start)
    // console.log("distance", distance)
    difference = numBlocks - distance
    // console.log("difference", difference)
    if(difference >= 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

// let eightBlockRange = produceDrivingRange(8)
// eightBlockRange('10th', '20th')

const produceTipCalculator = function(percentage) {
  return function(billTotal) {
    return billTotal * percentage
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}

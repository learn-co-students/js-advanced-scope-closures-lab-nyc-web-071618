function produceDrivingRange(distance){
  return function inRange(starting, ending){
    let diff = Math.abs(parseInt(starting) - parseInt(ending));
    if (diff > distance){
      return `${diff - distance} blocks out of range`
    }else{
      return `within range by ${distance - diff}`
    }
  }
}

const produceTipCalculator = (tipPercent)=> {
  return function tipAmount(fare) {
    return fare * tipPercent;
  }
}

function createDrivers(){
  driverId = 0
  return class {
    constructor(name){
      this.driverId = driverId++;
      this.name = name;
    }
  }
}

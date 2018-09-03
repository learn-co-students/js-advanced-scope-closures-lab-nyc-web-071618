function produceDrivingRange(blockRange){
  return function(start, end){

    let startBlock = parseInt(start);
    let endBlock = parseInt(end);
    let distance = Math.abs(endBlock - startBlock);
    let difference = blockRange - distance;

    if (difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}



function produceTipCalculator(number){
  return function (price) {
    return price * number;
  }
}

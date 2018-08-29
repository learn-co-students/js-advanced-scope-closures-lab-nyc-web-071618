function produceDrivingRange(limit){
    return function(val1,val2){
        yourTripNum = parseInt(val2.slice(0,2)) - parseInt(val1.slice(0,2));
        
        if(yourTripNum<=limit){
            return `within range by ${limit-yourTripNum}`;
        } else{
            return `${yourTripNum-limit} blocks out of range`;
        }
    }
}

function produceTipCalculator(tipPercentage){
    return function(billAmount){
        return billAmount * tipPercentage
    }
}

function createDriver(driverName){
        let driverId = 0;
        return class Driver{
            constructor(driverName){
                this.name = driverName;
                this.id = driverId
                driverId++;
            }
        }
    }

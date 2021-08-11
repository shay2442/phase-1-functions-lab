function distanceFromHqInBlocks(street) {
    if (street > 42) {
        return street - 42
    }
    else {
        return 42 - street      
    }
}
  
function distanceFromHqInFeet(street) {


        return distanceFromHqInBlocks(street) * 264

    }

function distanceTravelledInFeet(street, streetTwo) {
    if (street > 42) {
        return (streetTwo - street) * 264
    }
    else {
        return (street - streetTwo) * 264

    }
}

function calculatesFarePrice(street, streetTwo) {
    const feet = distanceTravelledInFeet(street, streetTwo);

    if (feet < 400) {
        return 0;
    }

    else if (feet > 400 && feet < 2000) {
        return (feet - 400) * .02;
    }
    
    else if (feet > 2000 && feet < 2500) {
        return 25;
    }

    else if (feet > 2500) {
        return 'cannot travel that far'
    }

}

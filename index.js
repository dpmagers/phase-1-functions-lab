// Code your solution in this file!

//1
function distanceFromHqInBlocks(blocks) {
    if(blocks > 42) {
        return blocks - 42 
    }  else {
        return 42 - blocks
    }
}
distanceFromHqInBlocks(blocks)


//2
function distanceFromHqInFeet(blocks, feet) {
    return distanceFromHqInBlocks(blocks) * 264
}
//distanceFromHqInFeet(distanceFromHqInBlocks, 264)


//3
function distanceTravelledInFeet(start, destination) {
    let feetInBlock = 264
    let distanceTraveledInBlocks 
        if (destination >= start) {
        distanceTraveledInBlocks = destination - start
    } else {
        distanceTraveledInBlocks = start - destination
    }
    // let distanceTraveledInBlocks = destination - start
    return distanceTraveledInBlocks * feetInBlock
}

//passes 2 of 3 tests. wrote conditional logic for last test which broke it all.




//4
function calculatesFarePrice(start, destination) {
    // will pass in distanceTravelledInFeet
    // let feetInBlock = 264
    // let distanceTraveledInBlocks = destination - start
    // return distanceTraveledInBlocks * feetInBlock
//     let result 
//     if (feet <= 400) {
//       return [0.00]
//     }  else if (feet >= 400 && feet <= 2000) {
//       return distanceTravelledInFeet * .02
//     } else if (feet >= 2000 && feet <= 2500) {
//       return [25.00]
//     } else {
//       return 'cannot travel that far
//     }
//   }
    //returns the fare for the customer
  }

//   function calculatesFarePrice (start, destination) {



//distance between 0 and 400 = free 
//distance between 400 and 2000 feet = .02 per foot
//distance between 2001 and 2500 feet = flat fare
//distance over 2500 = 'cannot travel that far' 

//(44-43) * 264 = free
//(32-34 [watch for neg nos.]) * 264 = .02 per foot (2.56)
//(58-50) * 264 = flat feet (25.00)
//(24-34 [watch for neg nos.]) * 264 = 'cannot travel that far'


//   calculatesFarePrice: Given the same starting and ending block as the previous test 
//   (hint hint), return the fare for the customer. The first four hundred feet are free.
//    For a distance between 400 and 2000 feet, the price is 2 cents per foot 
//    (not including 400, which are free!). Then Scuber charges a flat fare for a 
//    distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow 
//    any rides over 2500 feet — the function returns 'cannot travel that far' if a 
//    ride over 2500 feet is requested.

// describe('calculatesFarePrice(start, destination)', function() {
//     it('gives customers a free sample', function() {
//       expect(calculatesFarePrice(43, 44)).to.equal(0);
//     });

//     it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
//       // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
//       expect(calculatesFarePrice(34, 32)).to.equal(2.56);
//     });

//     it('charges 25 dollars for a distance over 2000 feet', function() {
//       expect(calculatesFarePrice(50, 58)).to.equal(25);
//     });

//     it('does not allow rides over 2500 feet', function() {
//       expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
//     });
//   });
// });






























































// function distanceFromHqInBlocks(blocks) {
//     if (blocks > 42) {
//         return blocks - 42
//     }
//     else {
//         return 42 - blocks
//     }
// }

// function distanceFromHqInFeet(blocks) {
//     return distanceFromHqInBlocks(blocks) * 264;
// }

// function distanceTravelledInFeet(start, destination) {
//     // start and destination
// return (start, destination) * 264
// }

// Write a function called distanceTravelledInFeet that takes in both the start 
// and destination blocks, and returns the number of feet travelled. Remember, 
// each block in Manhattan is 264 feet long. 
// For example distanceTravelledInFeet(34, 38) 
// representing 34th St to 38th St, returns 1056 ((38-34)*264). 
// You can assume that we are only calculating distance uptown/downtown, 
// not from river to river.

// describe('distanceTravelledInFeet()', function() {
//     it('returns the distance travelled in feet', function() {
//       expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
//     });

//     it('returns a distance in feet', function() {
//       expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
//     });

//     it('returns distance when destination is below distance', function() {
//       expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
//     });
//   });
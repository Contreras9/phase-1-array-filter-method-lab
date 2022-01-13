// // Code your solution here

// function findMatching(drivers, nameToLookFor) {
//     let matchingDrivers = drivers.filter(driversName => driversName.toLowerCase() === nameToLookFor.toLowerCase());
//     return matchingDrivers;
// }

// function fuzzyMatch(drivers, nameToLookFor) {
//     return drivers.filter(driversName => nameToLookFor === driversName.slice(0, nameToLookFor.length));
// }

// function matchName(drivers, nameToLookFor) {
//     return drivers.filter(driver => driver.name === nameToLookFor);    // return matchProperty(drivers,"name",nameToLookFor);
// }

// function matchProperty(drivers, propertyToLookFor, valueToLook) {
//     return drivers.filter(driver => driver[propertyToLookFor] === valueToLook);
// }



/*

function includeAnyCharacter(drivers, charArray) {
    return drivers.filter(driversName => findIntersection(driversName,charArray));
}

// let leftString = "Charles";
// let rightString = "Ben";

function findIntersection(left,right)
{
    for (l of left)
    {
        for (r of right)
        {
            if (l === r)
            {
                console.log(l);
                return true;
            }
        }
    } 
    return false;
}

function shortIntersection(left,right)
{
    return undefined !== left.find(l => undefined !== right.find(r => l === r));
}

*/
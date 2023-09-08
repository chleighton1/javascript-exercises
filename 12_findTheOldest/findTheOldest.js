const findTheOldest = function(people) {
    oldest = people.sort(function(a, b) {
        date = new Date()
        if(!a.yearOfDeath) {
            a.yearOfDeath = date.getFullYear()
        }
        if(!b.yearOfDeath) {
            b.yearOfDeath = date.getFullYear()
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    })
    return oldest[0];

};

// Do not edit below this line
module.exports = findTheOldest;

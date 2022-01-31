function ALevel(point, subject) {
    if (point === 56) {
        return 'You got A* for ' + subject;
    }
    else if(point === 48) {
        return 'You got A for ' + subject;
    }
    else if(point === 40) {
        return 'You got B for ' + subject;
    }
    else if(point === 32) {
        return 'You got C for ' + subject;
    }
    else if(point === 24) {
        return 'You got D for ' + subject;
    }
    else if(point === 16) {
        return 'You got E for ' + subject;
    }
    else {
        return "Did not find grade for " + subject + " with point " + point;
    }
}

module.exports = ALevel;

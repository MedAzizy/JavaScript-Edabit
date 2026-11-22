////// LEVEL 1 ////////

function bitwiseAND(n1, n2) {
    return n1 & n2;
}

function bitwiseOR(n1, n2) {
    return n1 | n2;
}

function bitwiseXOR(n1, n2) {
    return n1 ^ n2;
}


////////// LEVEL 2 ////////


function redundant(str) {
    return function() {
        return str;    };}

///////// LEVEL 3 ////////////

function getNotesDistribution(students) {
    return students
        .flatMap(student => student.notes)
        .filter(note => note >= 1 && note <= 5)
        .reduce((result, note) => {
            result[note] = (result[note] || 0) + 1;
            return result;
        }, {});
}

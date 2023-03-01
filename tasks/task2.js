let first = 465468784654687583475634756347563475637456534756534756347568537567346573468573;
let second = 5645646645546645546654546564456644565644565645466454568456845485457346332153464;

function sum(first, second) {
    return BigInt(first) + BigInt(second);
}

console.log(sum(first, second))

function difference(first, second) {
    return BigInt(first) - BigInt(second);
}

console.log(difference(first, second))

function multiplication(first, second) {
    return BigInt(first) * BigInt(second);
}

console.log(multiplication(first, second))


function division(first, second) {
    return BigInt(first) / BigInt(second);
}

console.log(division(first, second))

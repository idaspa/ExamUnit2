

export function isNotANumber(received, description) {
    if (isNaN(received)) {
        console.log(`🟢 ${description}`);
    } else {
        console.log(`🔴 ${description}. recived ${received}`);
    }
}




isNotANumber(fromInchesToMm("S"), "BC s not number");
isNotANumber(rootOfNumber([4]), "not a number");
isNotANumber(squareOfNumber(NaN), "NOT A NUMBER");

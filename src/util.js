// generates a random number from min (inclusive) to max (exclusive)
const getRandomInt = (min, max) => Math.floor(min + (Math.random() * (max - min)));

const generateSequence = (length, min = 0, max = 4) => {
    const sequence = [];

    for(let i = 0; i < length; i++){
        sequence.push(getRandomInt(min, max));
    }

    return sequence;
}

export {
    generateSequence
};
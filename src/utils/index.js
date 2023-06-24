export const getRandomNumber = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}

export const alphabeticRegex = /^[A-Za-z\s]*$/;
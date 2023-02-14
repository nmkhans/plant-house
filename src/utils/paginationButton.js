function genButton(buttonCount) {
    const buttonArray = [];
    for (let i = 1; i <= buttonCount; i++) {
        buttonArray.push(i)
    }

    return buttonArray
}

export { genButton }
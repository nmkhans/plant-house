export default function capitalize(text) {
    const capital = text.charAt(0).toUpperCase();
    const textArray = text.split("")
    textArray[0] = capital
    const capitalizedText = textArray.join("");
    return capitalizedText
}
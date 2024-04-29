export default <T>(arr: T[]): T[] => {
    let j, x, i
    let copy = [...arr]

    for (i = copy.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = copy[i]
        copy[i] = copy[j]
        copy[j] = x
    }

    return copy
}
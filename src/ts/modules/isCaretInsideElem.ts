export default (elem: Element): boolean => {
    const selection = window.getSelection()

    if (!selection || !selection.rangeCount) {
        return false
    }

    const range = selection.getRangeAt(0)
    const anchorNode = range.startContainer

    return elem.contains(anchorNode)
}

export default <T>(name: string, params?: T) => {
    const event = new CustomEvent(name, { detail: params })
    window.dispatchEvent(event)
}

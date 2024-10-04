export default <T>(name: string, callback: (data: T) => void) => {
    window.addEventListener(name, (e: any) => callback(e.detail))
}

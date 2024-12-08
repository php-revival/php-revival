export function warn(text: string, err?: any) {
    console.warn(`[PHP Revival]: ${text}`, err)
}

export function err(text: string, err?: any) {
    console.error(`[PHP Revival]: ${text}`, err)
}

export function info(text: string, err?: any) {
    console.info(`[PHP Revival]: ${text}`, err)
}

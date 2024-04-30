export default (version: string): string | null => {
    version = version
        .replace('PHP < 8.0', '7.4.0')
        .replace('PHP < 8.1', '8.0.0')
        .replace('PHP < 8.2', '8.1.0')
        .replace('PHP < 8.3', '8.2.0')
        .replace('PHP < 8.4', '8.3.0')
        .replace('PHP < 9.0', '8.4.0')
        .replace('PHP < 9.1', '9.0.0')
        .replace('PHP < 9.2', '9.1.0')
        .replace('PHP < 9.3', '9.2.0')
        .replace('PHP < 9.4', '9.3.0')

    if (version.startsWith('PHP <')) {
        return null
    }

    if (version.match(/PHP *([\d.]+)/)) {
        return version.replace('PHP ', '') + '.0'
    }

    if (!version.match(/[\d.]+/)) {
        return null
    }

    return version
}

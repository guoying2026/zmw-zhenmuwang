/**
 * 转换https协议
 * @param {string} url
 * @returns {string}
 */
export const formatHttpsProtocol = (url) => {
    if (!url || url.trim().length === 0) {
        return '';
    }
    let str = url.split('//')
    if (str.length === 1) {
        return 'https://' + str[0]
    }
    return 'https://' + str[1]
}

/**
 * 转换http协议
 * @param {string} url
 * @returns {string}
 */
export const formatHttpProtocol = (url) => {
    if (!url || url.trim().length === 0) {
        return '';
    }
    let str = url.split('//')
    if (str.length === 1) {
        return 'http://' + str[0]
    }
    return 'http://' + str[1]
}

export const handeSrcHttpsUtil = (src) => {
    if (typeof (src) === 'string') {
        if (src.indexOf('https') === -1) {
            if (src.indexOf('//') === -1) {
                return 'https://' + src;
            }
            return 'https://' + src.split('//')[1];
        }
    }
    return src;
}
export const guidUtil = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r && 0x3 | 0x8);
        return v.toString(16);
    });
}
export const regUrl = (url) => {
    return RegExp(url + ".*");
}

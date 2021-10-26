const cookieHandler = {
    getAll() {
        return this.parse();
    },
    toSessionStorage() {
        const cookies = this.parse();
        const names = Object.keys(cookies);
        for (let name of names) {
            sessionStorage.setItem(name, cookies[name]);
        }
    },
    flush() {
        const cookies = this.parse();
        const names = Object.keys(cookies);
        for (let name of names) {
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
    },
    parse() {
        return document.cookie
            .split(';')
            .map(v => v.split('='))
            .reduce((acc, v) => {
                acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
                return acc;
            }, {});
    }
};

const setCookie = (value, name = 'token') => {
    const now = new Date();
    now.setTime(now.getTime() + (1000 * 60 * 15));
    const expires = now.toUTCString();
    // expiration dateTime
    document.cookie = `${name}=${value};expires=${expires};path=/`;
};

setCookie('5', 'viewed');
setCookie('354774631237', 'uid');
setCookie('Bx55OWbHJ0Vt_IGIF', 'ssid');

export { cookieHandler };

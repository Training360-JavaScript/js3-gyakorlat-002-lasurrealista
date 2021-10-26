const setCookie = (value, name = 'token') => {
    const now = new Date();
    now.setTime(now.getTime() + (1000 * 60 * 15));
    const expires = now.toUTCString();
    // expiration dateTime
    document.cookie = `${name}=${value};expires=${expires};path=/`;
};

export default setCookie;

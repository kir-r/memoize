export function memoize(funk) {
    if (typeof funk === 'undefined' || typeof funk !== 'function') {
        return null;
    }
    const cache = {};
    function memoized(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const value = funk.apply(this, args);
        cache[key] = value;
        return value;
    }
    return memoized;
}

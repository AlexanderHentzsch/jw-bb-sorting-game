export function randomArray(arr) {
    try {
        const org = clone(arr);
        let r = [];

        for (let i in org) {
            let values = arr.filter(v => v !== org[i])
            let randomIndex = randomNumber(0, values.length - 1);
            let randomValue = values[randomIndex];
            let position = arr.indexOf(randomValue);
            r[i] = arr.splice(position, 1)[0];
        }
        return r;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export function randomNumber(min, max, not) {
    let randomNo = Math.floor(Math.random() * (max - min + 1)) + min;
    if (min !== max && not !== undefined && randomNo === not) {
        randomNumber(min, max, not);
    }
    return randomNo;
}

export function clone(obj) {
    console.log(obj)
    try {
        return JSON.parse(JSON.stringify(obj));
    } catch (e) {
        console.error(e)
        return false;
    }
}
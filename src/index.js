module.exports = function reverse(n) {

    let t = n
    let a = 1
    if (n < 0) {
        a = -1
        t = a * n
    }

    return (t.toString().split('').reverse().join(''))
}


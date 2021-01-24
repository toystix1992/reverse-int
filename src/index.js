module.exports = function reverse (n) {
    if(n < 0) n*=-1;
    let str = String(n);
    let  revNum = str.split('').reverse().reduce((a, b) => a.concat(b))*1;
    return revNum
}

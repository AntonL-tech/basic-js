module.exports = function repeater(str, options) {
    
    if ('addition' in options) {
        options.addition += "";
        if ('additionRepeatTimes' in options || 'additionSeparator' in options) {
            options.addition = repeater(options.addition, {repeatTimes: options.additionRepeatTimes, separator: options.additionSeparator});
            str += options.addition;
        }
    }
    let res = [];
    let repeat;
    if (typeof options.repeatTimes !== 'undefined') {
        repeat = options.repeatTimes;
    } else {
        repeat = 1;
    }

    for (let i = 0; i < repeat; i++) {
        res.push(str);
    }

    if ('separator' in options || typeof options.separator !== 'undefined') {
        sep = options.separator;
    } else {
        sep = '+';
    }

    return res.join(sep);
};
  
module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
      }

      let arr2 = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next') {
            if (i < arr.length - 1) {
                i++;
            }
        } else if (arr[i] == '--discard-prev') {
            if (arr2.length > 0) {
                arr2.pop();
            }
        } else if (arr[i] == '--double-next') {
            if (i < arr.length - 1) {
                arr2.push(arr[i+1]);
            }
        } else if (arr[i] == '--double-prev') {
            if (i > 0) {
                arr2.push(arr[i-1]);
            }
        } else {
            arr2.push(arr[i]);
        }
    }
    return arr2;
};

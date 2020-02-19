module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 0, depthArr = []) {
        depth++;
        depthArr.push(depth);
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                this.calculateDepth(arr[i], depth, depthArr);
            }
        }
    
        depthArr = depthArr.sort((a,b) => a-b);
        return depthArr[depthArr.length-1];
    }
};
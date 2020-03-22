module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) {
            return 0;
        } else if (!arr.length) {
            return 1;
        } else {
            let result = arr.map((e) => {
                return 1 + this.calculateDepth(e);
            });
            return Math.max(...result); 
        } 
    }
};
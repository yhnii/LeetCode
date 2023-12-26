/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


const twoSum = function (nums, target) {

    const obj = {};
    for (let i = 0; i < nums.length; i++) {

        let value = nums[i];
        let complementPair = target - value;
        

        if (obj[complementPair]  !== undefined) {
            return [obj[complementPair], i];
        } else {
            obj[value] = i;
        }
    }
 //return []; 
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
        let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid; // 찾으려는 값 발견
        } else if (nums[mid] < target) {
            left = mid + 1; // 오른쪽 부분 배열 검색
        } else {
            right = mid - 1; // 왼쪽 부분 배열 검색
        }
    }
    
    return -1; // 찾으려는 값이 배열에 없음
};
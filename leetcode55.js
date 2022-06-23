var canJump = function (nums) {
  var n = nums.length;
  var rightmost = 0;
  for (var i = 0; i < n; i++) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i]);
      if (rightmost >= n - 1) {
        return true;
      }
    }
  }
  return false;
};
var arr = [3, 2, 1, 1, 4];
console.log(canJump(arr));

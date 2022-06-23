function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var isSymmetric = function (root) {
  return mirror(root.left, root.right);
};
function mirror(left, right) {
  if (left == null && right == null) {
    return true;
  }
  if (left == null || right == null) {
    return false;
  }
  if (left.val != right.val) {
    return false;
  }
  return mirror(left.left, right.right) && mirror(left.right, left.right);
}

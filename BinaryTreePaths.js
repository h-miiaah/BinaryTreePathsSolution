/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    const isLeaf = node => node && (!node.left) && (!node.right)
    const join = (current, val) => (current ? `${current}->${val}` : `${val}`)
    const aux = (node, currentPath = '', acc) => {
        
      }
  };
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
        if (!node) {
            return acc
          }
        if (isLeaf(node)) {
            currentPath = join(currentPath, node.val)
            acc.push(currentPath)
          }
        aux(node.left, join(currentPath, node.val), acc)
        aux(node.right, join(currentPath, node.val), acc)
        return acc
      }
      return aux(root, '', [])
  };

  /**
   * Start with an empty array, which will eventually hold all the paths.
   * Start with a helper function that takes in a node and returns a boolean indicating whether the node is a leaf.
   * Start with a helper function that takes in a node, a current path, and an array of paths.
   * 
   */
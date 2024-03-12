# _________________________________ //
# _________________________________ //

# find the the sum of all numbers except 7 and 8 and any numbers between them


def sum78(nums):
  total = 0
  inSeq = False
  for num in nums:
    if num == 7:
      inSeq = True
    elif num == 8 and inSeq:
      inSeq = False
    elif not inSeq:
      total += num

  return total

# print(sum78([1,2,7,10,7, 15,8,1]))

# _________________________________ //
# _________________________________ //

# find the number of 1 bits in a given binary representation of an unsigned integer

class Solution(object):
  def hammingWeight(self, n):
    count = 0
    for i in n:
      if i == 1: count += 1

    return count
  
# obj = Solution()
# print(obj.hammingWeight(00000000000000000000000000001011))


# _________________________________ //
# _________________________________ //

# take a BST (binary search tree) and a target integer. return the closest value to the target value contained within the bst

def findClosestValueInBst(tree, target):
    
    def getClosest(node, target, closest):

        if not node : return closest
            
        if abs(target - closest) > abs(target - node.value):
            closest = node.value

        if target < node.value and node.left:
            closest = getClosest(node.left, target, closest)

        if target > node.value and node.right:
            closest = getClosest(node.right, target, closest)

        return closest
    
    return(getClosest(tree, target, tree.value))
    

# _________________________________ //
# _________________________________ //

# take a binary tree and returns a list of it's branch sums ordered from left to right

def branchSums(node):
  
  # set global sums variable
  # create helper function for recursive actions
  # sum node left branches
  # sum node right branches
  # stop when final leaf reached

  sums = []

  def getSums(node, running, sums):
    
    if not node : return

    running += node.value

    if not node.left and not node.right:
       sums.append(running)
       return

    getSums(node.left, running, sums)
    getSums(node.right, running, sums)

  getSums(node, 0, sums)

  return sums


# _________________________________ //
# _________________________________ //

# 





# _________________________________ //
# _________________________________ //
# Binary Tree Test Data

class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def __str__(self):
        return f'BST(value={self.value}, left={self.left}, right={self.right})'


def buildBSTFromDict(nodeList):
    # Create a mapping from id to BST node
    nodeMap = {}
    for node in nodeList:
        nodeMap[node["id"]] = BST(node["value"])
    
    # Set the root of the BST
    root = nodeMap[nodeList[0]["id"]]
    
    # Link nodes to their left and right children
    for node in nodeList:
        if node["left"] is not None:
            nodeMap[node["id"]].left = nodeMap[node["left"]]
        if node["right"] is not None:
            nodeMap[node["id"]].right = nodeMap[node["right"]]
    
    return root

bst = {
  "tree": {
    "nodes": [
      {"id": "10", "left": "5", "right": "15", "value": 10},
      {"id": "15", "left": "13", "right": "22", "value": 15},
      {"id": "22", "left": None, "right": None, "value": 22},
      {"id": "13", "left": None, "right": "14", "value": 13},
      {"id": "14", "left": None, "right": None, "value": 14},
      {"id": "5", "left": "2", "right": "5-2", "value": 5},
      {"id": "5-2", "left": None, "right": None, "value": 5},
      {"id": "2", "left": "1", "right": None, "value": 2},
      {"id": "1", "left": None, "right": None, "value": 1}
    ],
    "root": "10"
  },
  "target": 12
}

# print(findClosestValueInBst(buildBSTFromDict(bst["tree"]["nodes"]), bst['target']))

print(branchSums(buildBSTFromDict(bst["tree"]["nodes"])))

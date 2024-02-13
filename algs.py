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

# write a function that takes a BST (binary search tree) and a target integer. return the closest value to the target value contained within the bst

def findClosestValueInBst(tree, target):
    pass

def build_tree(nodes):
  map = {node['id']: node for node in nodes}
  
  
  return map

# This is the class of the input tree. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

nodes = [
  {"id": "10", "left": "5", "right": "15", "value": 10},
  {"id": "15", "left": "13", "right": "22", "value": 15},
  {"id": "22", "left": None, "right": None, "value": 22},
  {"id": "13", "left": None, "right": "14", "value": 13},
  {"id": "14", "left": None, "right": None, "value": 14},
  {"id": "5", "left": "2", "right": "5-2", "value": 5},
  {"id": "5-2", "left": None, "right": None, "value": 5},
  {"id": "2", "left": "1", "right": None, "value": 2},
  {"id": "1", "left": None, "right": None, "value": 1}
]

# {
#   "tree": {
#     "nodes": [
#       {"id": "10", "left": "5", "right": "15", "value": 10},
#       {"id": "15", "left": "13", "right": "22", "value": 15},
#       {"id": "22", "left": null, "right": null, "value": 22},
#       {"id": "13", "left": null, "right": "14", "value": 13},
#       {"id": "14", "left": null, "right": null, "value": 14},
#       {"id": "5", "left": "2", "right": "5-2", "value": 5},
#       {"id": "5-2", "left": null, "right": null, "value": 5},
#       {"id": "2", "left": "1", "right": null, "value": 2},
#       {"id": "1", "left": null, "right": null, "value": 1}
#     ],
#     "root": "10"
#   },
#   "target": 12
# }

tree = build_tree(nodes)

print(tree)
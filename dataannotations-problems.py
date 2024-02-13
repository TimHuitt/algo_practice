# decode the contents of a text files by obtaining the last string of each sub array after staircase'ing the array by each lines provided number

def decode():
  data = []
  final_data = ''

  def staircase(nums):
    step = 1
    stairs = []
    while len(nums) != 0:
      if len(nums) >= step:
        stairs.append(nums[:step])
        nums = nums[step:]
        step += 1
      else:
        return False
    
    return stairs


  with open('./data.txt') as file:
    for line in file:
      if len(line) > 1:
        num = line[:-1].split(' ')[0]
        text = line[:-1].split(' ')[1]
        data.append((num, text))

    sorted_data = sorted(data, key=lambda x: int(x[0]))

    for i in staircase(sorted_data):
      final_data += ' ' + str(i[len(i) - 1][1])
    
  return(final_data)


print(decode())
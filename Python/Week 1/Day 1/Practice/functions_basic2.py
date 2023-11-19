# Countdown
 
def countdown(num):
    list = []
    for index in range(num,-1,-1):
        list.append(index)
    return list

print(countdown(10))
#  2 Print and Return

def write(arr):
    print(arr[0])

    return arr[1]

print(write([2,5]))
# 3 First Plus Length -
def sum(arr):
   
   return arr[0]+len(arr)



print(sum([1,5,8,7]))
# 4 Values Greater than Second

def greater(Array):
    arr=[]
    gret=Array[1]
    for i in range(len(Array)):
        if (Array[i]>gret):
            arr.append(Array[i])

    print(len(arr))
    print(arr)
    return any 

greater([1,5,8,7])

# This Length, That Value
# Example: length_and_value(6,2) should return [2,2,2,2,2,2]


def Add(len,val):
    Aray=[]
    for i in range(0,len,1):
     Aray.append(val)
        
    return Aray

print(Add(4,8))





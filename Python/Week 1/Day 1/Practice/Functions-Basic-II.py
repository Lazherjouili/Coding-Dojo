# 1-Countdown -
def countdown(num):
    list=[]
    for i in range(num,-1,-1):
        
        list.append(i)
    return list

# print(countdown(5))  
# 2-Print and Return
def Return(arr):
        print(arr[0])
        return arr[1]

# Return([2,10])

# 3-First Plus Length
def Plus_Length(arr):

    sum=arr[0]+len(arr)
    return sum

print(Plus_Length([1,2,3,4,5]))

# 4-Values Greater than Second

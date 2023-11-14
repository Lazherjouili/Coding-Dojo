# 1. TASK: print "Hello World"
print( "Hello world" )
# 2. print "Hello Noelle!" with the name in a variable
name = "Noelle"
print( "Hello",name,"!" )	# with a comma
print( "Hello"+ name +"!" )	# with a +
# 3. print "Hello 42!" with the number in a variable
name = 42
print( "Hello",42,"!" )	# with a comma
print( "Hello"+str(42)+"!" )	# with a +	-- this one should give us an error!
# 4. print "I love to eat sushi and pizza." with the foods in variables

fave_food1 = "sushi"
fave_food2 = "pizza"
print("I love to eat {} and {} ".format(fave_food1,fave_food2) ) # with .format()
print( f"I love to eat {fave_food1}and{fave_food2}" ) # with an f string

my_name = "lazher"
print( "Hello",my_name,"!")

def name():
    print( "Hello",my_name,"!")
    return None
    

my_favorite_number=10

def favorite():
    print("Hello",my_favorite_number,"!")
    return None

def favorit():
    print("Hello"+my_favorite_number+"!")
    return None

food_one=("pizza")
food_two=("sandwich")   
print(f"I love to eat {food_one}and{food_two}") 
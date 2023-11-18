x = [[5, 2, 3], [10, 8, 9]]
students = [
    {"first_name": "Michael", "last_name": "Jordan"},
    {"first_name": "John", "last_name": "Rosales"},
]
sports_directory = {
    "basketball": ["Kobe", "Jordan", "James", "Curry"],
    "soccer": ["Messi", "Ronaldo", "Rooney"],
}
z = [{"x": 10, "y": 20}]

x[1][0] = 15
# print(x)

students[0]["last_name"] = "Bryant"
# print(students)


sports_directory["soccer"][0] = "Andres"

# print(sports_directory)

z[0]["y"] = 30
# print(z)

# 2-Iterate Through a List of Dictionaries

students = [
    {"first_name": "Michael", "last_name": "Jordan"},
    {"first_name": "John", "last_name": "Rosales"},
    {"first_name": "Mark", "last_name": "Guillen"},
    {"first_name": "KB", "last_name": "Tonel"},
]
# iterateDictionary(students)
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)


# iterateDictionary(students)
def iterateDictionary(students):
    for i in range(0, len(students), 1):

        for key, val in students[i].items():
            print(key, " - ", val)


# iterateDictionary(students)


def iterateDictionary2(key_name,some_list):
    for i in range(0,len(some_list),1):
        
        for key, val  in some_list[i].items():
            if key===
                print (val)

        # if key_name==="first_name":
       


print(iterateDictionary2(students))


# 4-Iterate Through a Dictionary with List Values
dojo = {
    "locations": ["San Jose", "Seattle", "Dallas", "Chicago", "Tulsa", "DC", "Burbank"],
    "instructors": [
        "Michael",
        "Amy",
        "Eduardo",
        "Josh",
        "Graham",
        "Patrick",
        "Minh",
        "Devon",
    ],
}


def printInfo(dojo):
    for i in range(0, len(dojo), 1):
        for val in dojo.values():
            print(val)


# printInfo(dojo)

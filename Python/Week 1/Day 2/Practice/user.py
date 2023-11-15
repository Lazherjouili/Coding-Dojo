class user:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print("======================")
        print(f"First_name:{self.first_name}")
        print(f"Last_name:{self.last_name}")
        print(f"email:{self.email}")
        print(f"Age:{self.age}")
        print(f"Member:{self.is_rewards_member}")
        print(f"points:{self.gold_card_points}")
        print("======================")
    def enroll(self):
        self.is_rewards_member=True
        self.gold_card_points=200

    def spend_points(self, amount):
        self.gold_card_points-=amount



user1 = user("lazher", "jouili", "lazher.jouili.job@gmail.com", 27)

    
    
print(user1)
user1.display_info()
user1.enroll()
user1.display_info()
user1.spend_points(100)
user1.display_info()
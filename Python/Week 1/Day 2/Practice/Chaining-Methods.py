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
        return self
    def enroll(self):
        self.is_rewards_member=True
        self.gold_card_points=200
        return self

    def spend_points(self, amount):
        self.gold_card_points-=amount
        return self



user1 = user("lazher", "jouili", "lazher.jouili.job@gmail.com", 27)
user2=user("khaled","hannachi","khaled.hannachi@gmail.com",30)
    
    
print(user1)
print(user2)
user1.display_info().enroll().display_info().spend_points(50).display_info()
user2.display_info().enroll().display_info().spend_points(80).display_info()

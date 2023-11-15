class BankAccount:
    list_of_accounts = []

    # don't forget to add some default values for these parameters!
    def __init__(self):
        self.int_rate = 0.02
        self.balance = 0
        BankAccount.list_of_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print("insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self

    def display_account_info(self):
        print("======================")
        print(f"Balance:{self.balance}")
        return self
        print("======================")

    def yield_interest(self):
        self.balance -= self.balance * self.int_rate
        return self


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount()

    # other methods

    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self
    
    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self
    
    def display(self):
        print(f"{self.name}, checking balance: {self.account.balance} $")
        return self

    

user1 = User("lazher", "lazher.jouili.job@gmail.com")
print(user1)
user1.make_deposit(1000).make_withdrawal(400).display()


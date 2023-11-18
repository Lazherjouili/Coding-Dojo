class BankAccount:
    list_of_accounts = []
    # don't forget to add some default values for these parameters!
    def __init__(self):
        self.int_rate=0.01
        self.balance=0 
        BankAccount.list_of_accounts.append(self)       
    def deposit(self, amount):
        self.balance+=amount
        return self
        
    def withdraw(self, amount):
        if self.balance>=amount:
            self.balance-=amount
        else:
            print("insufficient funds: Charging a $5 fee")
            self.balance-=5 
        return self


    def display_account_info(self):
        print("======================")
        print(f"Balance:{self.balance}")
        
        print("======================")
        return self

    def yield_interest(self):
        self.balance-=self.balance*self.int_rate
        return self



account1=BankAccount()
account2=BankAccount()

print(account1)
print(account2)
account1.deposit(1000).deposit(1000).deposit(1000).withdraw(1500).yield_interest().display_account_info()
account2.deposit(500).deposit(500).withdraw(300).withdraw(300).withdraw(300).withdraw(300).yield_interest().display_account_info()

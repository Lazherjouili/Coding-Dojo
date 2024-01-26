public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    // Be sure to increment the number of accounts
    public BankAccount(){
        
    }
     public BankAccount(double checkingBalance ,double savingsBalance){
        this.checkingBalance=checkingBalance;
        this.savingsBalance=savingsBalance;
        accounts ++;
        totalMoney+=this.checkingBalance+this.savingsBalance;
    }
    // METHODS

   
    // GETTERS
    // for checking, savings, accounts, and totalMoney
    public double getCheckingBalance(){
        return this.checkingBalance;
    }
    public void setCheckingBalance(double checkingBalance){
        this.checkingBalance=checkingBalance;
    }
    public double getSavingsBalance(){
        return this.savingsBalance;
    }
    public void setSavingsBalance(double savingsBalance){
        this.savingsBalance=savingsBalance;
    }
    public static int getAccounts(){
        return BankAccount.accounts;
    }
    public static void setAccounts(int accounts){
        BankAccount.accounts=accounts;
    }
    public static double getTotalMoney(){
        return BankAccount.totalMoney;
    }
    public static void setTotalMoney(double totalMoney){
        BankAccount.totalMoney=totalMoney;
    }
    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account
    public void depositChecking(double money){
        this.checkingBalance+=money;
    }
    public void depositSavings(double money){
        this.savingsBalance+=money;
    }
    // withdraw 
    public void withdrawChecking(double money){
        if(money>this.checkingBalance){
             System.out.println("your sold insuffisant");
            }else{this.checkingBalance-=money;}
        
    }
    public void withdrawSavings(double money){
        if(money>this.savingsBalance){
            System.out.println("your sold insuffisant");
        }else{this.savingsBalance-=money;}
        
    }
    public double getBalance(){
        return this.checkingBalance+this.savingsBalance;
    }
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    // getBalance
    // - display total balance for checking and savings of a particular bank account
}

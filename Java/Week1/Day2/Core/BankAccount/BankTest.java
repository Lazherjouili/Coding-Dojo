public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount userAccount1=new BankAccount(1000.5,100.5);
        BankAccount userAccount2=new BankAccount(2000.5,150.5);
        BankAccount userAccount3=new BankAccount(1200.5,200.5);
     
        // System.out.println(userAccount1.getCheckingBalance()) ;
        // System.out.println(BankAccount.getTotalMoney()) ;
        // System.out.println(BankAccount.getAccounts()) ;
        
        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        userAccount1.depositChecking(200.5);
        // System.out.println(userAccount1.getCheckingBalance());
        System.out.println(userAccount1.getBalance());
        // - each deposit should increase the amount of totalMoney

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney

        // Static Test (print the number of bank accounts and the totalMoney)

    }
}

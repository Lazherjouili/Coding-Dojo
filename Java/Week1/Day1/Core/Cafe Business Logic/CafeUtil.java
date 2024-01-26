import java.util.ArrayList;
import java.util.Arrays;
public class CafeUtil{
    public int getStreakGoal(){
        int[] myArray = {1, 2, 3, 4, 5,6,7,8,9,10};
        int sum=0;
        for(int i=0;i<myArray.length;i++){
            sum +=myArray[i];
        }return sum;
    }
    public double getOrderTotal(double[] prices){
       
        double sum=0.0;
        for(int i=0;i<prices.length;i++){
            sum +=prices[i];
        }return sum;
    }
    public void displayMenu(ArrayList<String> menuItems){
        for(int i=0;i<menuItems.size();i++){
            System.out.println(i+" "+menuItems.get(i));
        }
    }
    public void addCustomer(ArrayList<String> customers){
      System.out.println("Please enter your name:");
      String username = System.console().readLine();
      System.out.println(String.format( "Hello,%s !",username));
      System.out.println(String.format( "There are %s people in front of you %s" ,customers.size(),username));
      customers.add(username);
      
    }
}
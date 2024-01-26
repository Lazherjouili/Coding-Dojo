import java.util.ArrayList;

public class TestCafe{
    public static void main (String[] args){
    CafeUtil cafe = new CafeUtil();
    int testGetStreakGoal=cafe.getStreakGoal();
    System.out.println(testGetStreakGoal);

     // System.out.println("----- Order Total Test-----");
        double[] lineItems = {3.5, 1.5, 4.0, 4.5};
        // System.out.println(cafe.getOrderTotal(lineItems));

        System.out.printf("Order total: %s \n\n",cafe.getOrderTotal(lineItems));
        
        // System.out.println("----- Display Menu Test-----");
        
        ArrayList<String> menu = new ArrayList<String>();
        menu.add("drip coffee");
        menu.add("cappuccino");
        menu.add("latte");
        menu.add("mocha");
        cafe.displayMenu(menu);
    
        // System.out.println("\n----- Add Customer Test-----");
        ArrayList<String> customers = new ArrayList<String>();
        // // --- Test 4 times ---
        for (int i = 0; i < 4; i++) {
            cafe.addCustomer(customers);
            System.out.println("\n");
        }

    }
}
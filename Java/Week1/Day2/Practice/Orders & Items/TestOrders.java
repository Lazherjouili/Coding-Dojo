import java.util.ArrayList;
public class TestOrders{
    public static void main(String[] args){
           // Menu items
            Item  item1=new Item("item1");
            Item  item2=new Item("item2");
            Item  item3=new Item("item3");
            Item  item4=new Item("item4");
            item1.setName("mocha");
            item2.setName("latte");
            item3.setName("drip coffee");
            item4.setName("cappuccino");
            System.out.println(item1.getName());
            item1.setPrice(2.5);
            item2.setPrice(3.5);
            item3.setPrice(4.5);
            item4.setPrice(3.5);
            System.out.println(item1.getPrice());
        // Order variables -- order1, order2 etc.
             Order  order1=new Order("order1");
             Order  order2=new Order("order2");
             Order  order3=new Order("order3");
             Order  order4=new Order("order4");
            //  Set each order's name - "Cindhuri", "Jimmy", "Noah", and "Sam."
             order1.setName("Cindhuri");
             order2.setName("Jimmy");
             order3.setName("Noah");
             order4.setName("Sam");
             System.out.println(order1.getName());
            //  Add item1 to order2's item list and increment the order's total.
             order2.setItems(item1);
             System.out.println(order2.getItems());
             order2.setTotal(item1.getPrice());
             System.out.println(order2.getTotal());
            //  Noah ordered a cappuccino. Add the cappuccino to their order list and to their tab.
             order3.setItems(item4);
             System.out.println(order3.getItems());
             order3.setTotal(item4.getPrice());
             System.out.println(order3.getTotal());
            //  Sam added a latte. Update the order accordingly.
            order4.setItems(item2);
            order4.setTotal(item2.getPrice());
            // Cindhuri’s order is now ready. Update her status.
            order1.setReady(true);
            System.out.println(order1.getReady());
            // Sam ordered more drinks - 2 lattes. Update their order as well.
            order4.setItems(item2);
            order4.setItems(item2);
            order4.setTotal(item2.getPrice()*2);
            System.out.println(order4.getTotal());
            System.out.println(order4.getItems());
            // Jimmy’s order is now ready. Update his status.
            order2.setReady(true);

        // Application Simulations
        // Use this example code to test various orders' updates
        // System.out.printf("Name: %s\n", order1.name);
        // System.out.printf("Total: %s\n", order1.total);
        // System.out.printf("Ready: %s\n", order1.ready);
    }
}
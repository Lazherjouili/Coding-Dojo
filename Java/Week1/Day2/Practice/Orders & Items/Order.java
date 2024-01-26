
import java.util.ArrayList;

public class Order{
  // MEMBER VARIABLES
      private String name;
      private double total;
      private boolean ready;
      private ArrayList<Item> items = new ArrayList<Item>();
//  Constructor
    public Order(String name){
    this.name=name;
}






// GETTERS & SETTERS
    public String getName(){
        return this.name;
    }
    
    public void setName(String name){
        this.name=name ;
    }
    public double getTotal(){
        return this.total;
    }
    
    public void setTotal(double price){
        this.total+=price ;
    }
    public boolean getReady(){
        return this.ready;
    }
    
    public void setReady(boolean ready){
        this.ready=ready ;
    }
    public ArrayList getItems(){
        return this.items;
    }
    
    public void setItems(Item item){
        this.items.add(item);
    }

}
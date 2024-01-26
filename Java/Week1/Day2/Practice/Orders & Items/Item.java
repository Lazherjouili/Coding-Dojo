public class Item{

    // MEMBER VARIABLES
    private String name;
    private double price;

//  Constructor
    public Item(String name){
    this.name = name;
    this.price = 5.5;
}






    // GETTERS & SETTERS
    public String getName(){
        return this.name;
    }
    
    public void setName(String name){
        this.name=name ;
    }
    public double getPrice(){
        return this.price;
    }

    public void setPrice(double price){
        this.price=price ;
    }
}
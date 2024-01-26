
public class Gorilla extends Mammals {
	
	
//	CONSTRUCTOR

	public Gorilla() {
		super();
		
	}
//CONSTRUCTOR
	public Gorilla(int energy) {
		super(energy);
		
	}
//METHODS
	public String throwSomething() {
	    this.setEnergy(this.getEnergy()-5);
	    return "gorilla has thrown something";
	}
	public String eatBananas() {
		this.setEnergy(this.getEnergy()+10);
		return "gorilla's satisfaction";
	}
	public String climb() {
		this.setEnergy(this.getEnergy()-10);
		return "gorilla has climbed a tree";
	}
	
	
	
}

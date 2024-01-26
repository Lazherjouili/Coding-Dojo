
public class Bat extends Mammals {

//	CONSTRUCTOR
	public Bat() {
		super();

	}

//	CONSTRUCTOR
	public Bat(int energy) {
		super(energy);
		
	}
//	METHODS
	public String fly() {
		this.setEnergy(this.getEnergy()-50);
		return "bat is airborne";
	}
	public String eatHumans() {
		this.setEnergy(this.getEnergy()+25);
		return "bat's satisfaction";
	}
	public String attackTown() {
		this.setEnergy(this.getEnergy()-100);
		return "bat's attack";
	}
	
	

}

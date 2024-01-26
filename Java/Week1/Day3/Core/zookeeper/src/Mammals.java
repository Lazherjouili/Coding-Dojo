
public class Mammals {
//	MEMBRE VARIABLE
private int energy;
//CONSTRUCTOR
public Mammals() {
	
}
//CONSTRUCTOR

public Mammals(int energy) {
	
	this.energy = energy;
}
//methods
public String displayEnergy(){
	return String.format("Energy:%d",this.energy);
}



//GETTERS && SETTERS
public int getEnergy() {
	return energy;
}


public void setEnergy(int energy) {
	this.energy = energy;
}

}

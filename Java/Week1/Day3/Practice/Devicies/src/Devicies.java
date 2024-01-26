
public class Devicies {
private int battery;






public Devicies() {

}

public Devicies(int battery) {
	
	this.battery = battery;
}


public String displaystatus() {
	return String.format("Battery remaining:%d", this.getBattery());
}

public int getBattery() {
	return battery;
}

public void setBattery(int battery) {
	this.battery = battery;
}

}

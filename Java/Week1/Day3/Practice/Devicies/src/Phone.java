
public class Phone extends Devicies {

	public Phone() {
		super();
	
	}

	public Phone(int battery) {
		super(battery);
		
	}
	
	public void MakingCall() {
		 this.setBattery(this.getBattery()-5);
	}
	public void PlayingGame() {
		this.setBattery(this.getBattery()-20);
	}
	public void Charging() {
		this.setBattery(this.getBattery()+50);
	}
	
}


public class Test {

	public static void main(String[] args) {
		Gorilla kong=new Gorilla(100);
		kong.throwSomething();
		kong.throwSomething();
		kong.throwSomething();
		kong.eatBananas();
		kong.eatBananas();
		kong.climb();
		System.out.println(kong.displayEnergy());
		Bat bat1=new Bat(400);
		bat1.attackTown();
		bat1.attackTown();
		bat1.attackTown();
		bat1.eatHumans();
		bat1.eatHumans();
		bat1.fly();
		bat1.fly();
		System.out.println(bat1.displayEnergy());
		
		

	}

}

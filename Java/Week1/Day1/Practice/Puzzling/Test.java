
import java.util.ArrayList;
import java.util.Random;
public class Test {

    public static void main(String[] args){


        PuzzleJava generator = new PuzzleJava();
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		System.out.println(randomRolls);


    }
}
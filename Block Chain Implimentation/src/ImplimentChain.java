import java.util.ArrayList;
import java.util.Arrays;

public class ImplimentChain {
	/**
	 Hash = digital signature
	 Each Block will have :-
	 	List of transactions
	 	Previous Hash
	 	Hash
	 */
	
	ArrayList<MyInfo> blockchain = new ArrayList<>();
	
	public static void main(String[] args) {
		String[] genesisTransactions = {"Ishita sent nini 20 bitcoin","Rajat sent fin 50 bitcoin"};
		MyInfo genesisInfo = new MyInfo(0, genesisTransactions);
		
		String[] block2Transaction = {"A sent 10 bitcoin to B", "B sent 5 bitcoin to C"};
		MyInfo block2 = new MyInfo(genesisInfo.getBlockHash(), block2Transaction);
		
		System.out.println("Hash of genesis Block :");
		System.out.println(genesisInfo.getBlockHash());
		System.out.println("Hash of Block 2:");
		System.out.print(block2.getBlockHash());
	}

}

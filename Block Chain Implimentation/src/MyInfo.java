import java.util.Arrays;

public class MyInfo {
	
	private int previousHash;
	private String[] transactions;
	
	private int BlockHash;
	
	public MyInfo(int previousHash, String[] transactions) {
		this.previousHash = previousHash;
		this.transactions = transactions;
		
		Object[] contents = {Arrays.hashCode(transactions), previousHash };
		this.BlockHash = Arrays.hashCode(contents);
	}
	
	public int getPreviousHash() {
		return previousHash;
	}
	
	public String[] getTransactions() {
		return transactions;
	}
	
	public int getBlockHash() {
		return BlockHash;
	}
	
}

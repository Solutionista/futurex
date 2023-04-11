package online.sterz.backend;
public class MarginLevel {
	private int contracts;
	private double initialMargin;
	private double maintenanceMargin;

	public MarginLevel(int contracts, double initialMargin, double maintenanceMargin) {
		this.contracts = contracts;
		this.initialMargin = initialMargin;
		this.maintenanceMargin = maintenanceMargin;
	}

	public int getContracts() {
		return contracts;
	}

	public void setContracts(int contracts) {
		this.contracts = contracts;
	}

	public double getInitialMargin() {
		return initialMargin;
	}

	public void setInitialMargin(double initialMargin) {
		this.initialMargin = initialMargin;
	}

	public double getMaintenanceMargin() {
		return maintenanceMargin;
	}

	public void setMaintenanceMargin(double maintenanceMargin) {
		this.maintenanceMargin = maintenanceMargin;
	}
}
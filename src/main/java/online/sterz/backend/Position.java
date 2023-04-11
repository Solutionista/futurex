package online.sterz.backend;

import java.math.BigDecimal;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//@Entity
public class Position {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String side;
	private String symbol;
	private BigDecimal price;
	private String fillTime;
	private BigDecimal size;
	private BigDecimal unrealizedFunding;
	private String pnlCurrency;

	private String serverTime;

	public Position() {}

	public Position(String side, String symbol, BigDecimal price, String fillTime, BigDecimal size,
		BigDecimal unrealizedFunding, String pnlCurrency, String serverTime) {
		this.side = side;
		this.symbol = symbol;
		this.price = price;
		this.fillTime = fillTime;
		this.size = size;
		this.unrealizedFunding = unrealizedFunding;
		this.pnlCurrency = pnlCurrency;
		this.serverTime = serverTime;
	}

	// Getters and setters for all fields

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSide() {
		return side;
	}

	public void setSide(String side) {
		this.side = side;
	}

	public String getSymbol() {
		return symbol;
	}

	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getFillTime() {
		return fillTime;
	}

	public void setFillTime(String fillTime) {
		this.fillTime = fillTime;
	}

	public BigDecimal getSize() {
		return size;
	}

	public void setSize(BigDecimal size) {
		this.size = size;
	}

	public BigDecimal getUnrealizedFunding() {
		return unrealizedFunding;
	}

	public void setUnrealizedFunding(BigDecimal unrealizedFunding) {
		this.unrealizedFunding = unrealizedFunding;
	}

	public String getPnlCurrency() {
		return pnlCurrency;
	}

	public void setPnlCurrency(String pnlCurrency) {
		this.pnlCurrency = pnlCurrency;
	}

	public String getServerTime() {
		return serverTime;
	}

	public void setServerTime(String serverTime) {
		this.serverTime = serverTime;
	}
}
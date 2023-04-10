
package online.sterz.backend;

import java.io.IOException;
import java.math.BigDecimal;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.util.Calendar;
import java.util.TimeZone;
import java.util.concurrent.CountDownLatch;


public class APITester {
	private static final String apiPath = "https://futures.kraken.com/derivatives/";
	private static final String apiPublicKey = "dz1JPamLXabEEctU5xjEMMuma7kEkOBW3MFX/EAxVYJqvnf+8lgUSzET"; //accessible on your Account page under Settings -> API Keys
//	private static final String apiPrivateKey = "KcB3VyKteO2a3nbtwvUDcCfYIK1H1a36Z/YICX/fVxJhmXH706OOtQ+R"; //accessible on your Account page under Settings -> API Keys
	private static final String apiPrivateKey = "xo0m9OUArBEcR8bf0KR3NeZuGwq81d1lxjfLmwyUcieZqG0I6Pv1f5cTIF7hXh5B2q9PgwX4v0HzGZNAxLEuPszC"; //accessible on your Account page under Settings -> API Keys
//	private static final String apiPublicKey = "/kREWEsbnrxF+4YtuMug+eT23TnGff2Cc+SrtW3HGQTpvvoAOpka5KJtK/0bLYmHCF1ub1Vs+AHrkghEbAuPYg=="; //accessible on your Account page under Settings -> API Keys
boolean run = true;
	private static URI uri;
	private static final int timeout = 10;
	private static final boolean checkCertificate = true; //when using the test environment, this must be set to "False"

	@SuppressWarnings("deprecation")
	public static void main(String[] args)
		throws MalformedURLException, IOException, KeyManagementException, NoSuchAlgorithmException, InvalidKeyException, URISyntaxException {
		uri = new URI("wss://futures.kraken.com/ws/v1/");
		CfApiMethods methods;
		Calendar calendar = Calendar.getInstance();
		calendar.setTimeZone(TimeZone.getTimeZone("UTC"));
		String result, symbol, side, orderType;
		;
		BigDecimal size, limitPrice, stopPrice;
		String privateWebSocketSubscriptionMsg = "{ \"event\": \"challenge\", \"api-key\": \"dz1JPamLXabEEctU5xjEMMuma7kEkOBW3MFX/EAxVYJqvnf+8lgUSzET\"}";
//		openAndStreamWebSocketSubscription("wss://futures.kraken.com/ws/v1/", privateWebSocketSubscriptionMsg);/*---------------------------Public Endpoints-----------------------------------------------*/
		CountDownLatch latch = new CountDownLatch(1);


//		//get instruments
//		result = methods.getInstruments();
//		System.out.println("getInstruments:\n" + result);
//
//		//get tickers
//		result = methods.getTickers();
//		System.out.println("getTickers:\n" + result);

//		//get history
//		symbol = "PI_XBTUSD";
//		calendar.set(2016, 1, 20,0,0,0);
//		result = methods.getHistory(symbol, calendar.getTime());
//		System.out.println("getHistory:\n" + result);

			/*----------------------------Private Endpoints----------------------------------------------*/
			methods = new CfApiMethods(apiPath, apiPublicKey, apiPrivateKey, timeout,
				checkCertificate);

			//get accounts
//		result = methods.getAccounts();
//		System.out.println("getAccounts:\n" + result);
//
//		//send limit order
//		orderType = "lmt";
//		symbol = "PI_XBTUSD";
//		side = "buy";
//		size = BigDecimal.ONE;
//		limitPrice = BigDecimal.ONE;
//		result = methods.sendOrder(orderType, symbol, side, size, limitPrice,null);
//		System.out.println("sendOrder (limit):\n" + result);
//
//		//send stop order
//		orderType = "stp";
//		symbol = "PI_XBTUSD";
//		side = "buy";
//		size = BigDecimal.ONE;
//		limitPrice = new BigDecimal(1.1);
//		stopPrice = new BigDecimal(2.0);
//		result = methods.sendOrder(orderType, symbol, side, size, limitPrice, stopPrice);
//		System.out.println("sendOrder (stop):\n" + result);
//
//		//edit order
//        result =
//                methods.editOrder(
//                        Map.of(
//                                "orderId",
//                                "ccdf6310-9a0d-4173-9efe-2ee5696830e1",
//                                "size",
//                                "1",
//                                "limitPrice",
//                                "1.00"));
//        System.out.println("editOrder(): \n" + result);
//
//		//cancel order
//		String orderId = "ccdf6310-9a0d-4173-9efe-2ee5696830e1";
//		result = methods.cancelOrder(orderId);
//		System.out.println("cancelOrder:\n" + result);
//
//		//batch order
//		String jsonElement = "{"
//				+ "\"batchOrder\":"
//				+ "[ {"
//				+ "\"order\": \"send\","
//				+ "\"order_tag\": \"1\","
//				+ "\"orderType\": \"lmt\","
//				+ "\"symbol\": \"PI_XBTUSD\","
//				+ "\"side\": \"buy\","
//				+ "\"size\": 1,"
//				+ "\"limitPrice\": 1.00,"
//				+ "},{"
//				+ "\"order\": \"send\","
//				+ "\"order_tag\": \"2\","
//				+ "\"orderType\": \"stp\","
//				+ "\"symbol\": \"PI_XBTUSD\","
//				+ "\"side\": \"buy\","
//				+ "\"size\": 1,"
//				+ "\"limitPrice\": 2.00,"
//				+ "\"stopPrice\": 3.00, "
//				+ "},{"
//				+ "\"order\": \"cancel\","
//				+ "\"order_id\": \"7c915a4a-7113-4845-a21f-42363829fce4\","
//				+ "},{"
//				+ "\"order\": \"cancel\","
//				+ "\"order_id\": \"de0a7dd1-4571-4f94-9b33-9a571554ba5e\","
//				+ "},],"
//				+ "}";
//		result = methods.sendBatchOrder(jsonElement);
//		System.out.println("sendBatchOrder:\n" + result);
//

//		//get open orders
//		result = methods.getOpenOrders();
//		System.out.println("getOpenOrders:\n" + result);
//
//		//get fills
//		Date lastFillTime = new Date(2016, 2, 1);
//		result = methods.getFills(lastFillTime);
//		System.out.println("getFills:\n" + result);
//
		//get open positions
		result = methods.getOpenPositions();
		System.out.println("getOpenPositions:\n" + result);

		}


	}
export default `


<p><strong>Previously on &ldquo;How to design a machine learning trading bot&rdquo;</strong></p>

<p>We have started with &ldquo;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p1-data-collection" target="_blank">Collecting Data</a>&rdquo;:</p>

<p>We found out what is OHLCV data, and we learned why we need historical data and online data both together.</p>

<p>Then we continued with &ldquo;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p2-data-analysis" target="_blank">Data Analysis</a>&rdquo;</p>

<p>We have seen how cleaning the data including features engineering is important. We learned that to make a stable machine learning model we need to prepare data in the right way and finally, we found out how visualizing data can help us to reach the goal.s</p>

<p>Then we continued with&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p3-pattern-recognition" target="_blank">finding a pattern</a>&nbsp;and we noted you can be trapped like a horoscopist to find a pattern in data, and always follow the scientific ways and act as an astronomer. Then we had found a very simple pattern which was &ldquo;SMA20&rdquo; and we discussed how to label them to [0,1].</p>

<p>Then, we&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p4-build-model" target="_blank">build a model</a>. We explained after you made an ML (Machine Learning) model, you should evaluate it with a backtest. And at this point, you need a strategy to Buy and Sell. It means, we already have a signal to open a Long/Short position.</p>

<p>Now, it&rsquo;s time to pass this signal to automation or a bot and this bot is going to buy/sell automatically.</p>

<p><strong>Step 5: Running an automation</strong></p>

<p>The automation part is going to control buys, sells, take profits, and stop losses placed by the model&rsquo;s signals.</p>

<p><img alt="Running an automation" src="https://1des.com/uploads/posts/how-to-design-p5/automation.png" style="height:361px; width:500px" /></p>

<p>Before we start to build a crypto bot or automation we need to review a couple of terms together.</p>

<p><strong>Cryptocurrency Exchange:</strong></p>

<p>A cryptocurrency exchange, or digital currency exchange (DCE), is a business that allows customers to trade cryptocurrencies or digital currencies for other assets, such as conventional fiat money or other digital currencies. (<a href="https://en.wikipedia.org/wiki/Cryptocurrency_exchange" target="_blank">Wikipedia</a>)</p>

<p>For example,&nbsp;<a href="https://www.binance.com/en/register?ref=UFAWYPIS" target="_blank">Binance</a>&nbsp;and are two papular exchanges platform.</p>

<p>By registering on Binance with the following link, you will receive 10% back on your commissions.</p>

<p><a href="https://www.binance.com/en/register?ref=UFAWYPIS" target="_blank">Register On Binance</a></p>

<p>&nbsp;</p>

<p><strong>Spot Trading Vs. Margin Trading:</strong></p>

<p>On spot trading, you sell and buy the actual crypto/Fiat pairs. For example, you sell real BTC and receive real ETH or EURO. But in margin trading, you bet on the prices of the pairs with some leverage. In margin trading based on the leverage you use, your assets get locked on the exchange. Typically, each exchange has different rules and protocols for margin trading.</p>

<p><img alt="automation" src="https://1des.com/uploads/posts/how-to-design-p5/auto-2.jpg" style="height:254px; width:450px" /></p>

<p><strong>API connections:</strong></p>

<p>Most of the exchanges are providing a secure API connection. Usually, the API has two parameters: Publick Key and Secret Key.</p>

<p>By having these two parameters you&rsquo;re able to place an order on the exchange from the outside of the exchange.</p>

<p><img alt="API helps developers to connect to the exchange" src="https://1des.com/uploads/posts/how-to-design-p5/api.webp" style="height:270px; width:480px" /></p>

<p>So, now the question is:</p>

<p><strong>What is a crypto bot or automation?</strong></p>

<p>With a crypto bot, you can place an order in the exchange. Managing the communication between the bot and exchange is with a secure API. Depending on the exchanges and their API protocols, it could be different ways to place an order on the exchange. And also in some cases (depending on the exchange), it brings more complexity when we want to place an order with leverage (Margin Market). So, if you follow us so far you have seen that we always start with a simple sample, and at this level, we start with spot trading which has moderate complexity. In our next season, we will see how to implement a crypto bot.</p>

<p><img alt="Crypto Bot" src="https://1des.com/uploads/posts/how-to-design-p5/crypto-bot.gif" style="height:263px; width:350px" /></p>

<p><strong>Actions:</strong></p>

<p>So, our automation at least should support these actions:</p>

<ul>
	<li>Place an order in the marketplace</li>
	<li>Retrieve or query an order from the exchange</li>
	<li>Cancel an order in the exchange</li>
	<li>Get the asset&rsquo;s balance in the exchange</li>
	<li>Get Online prices in a marketplace</li>
</ul>

<p>Now, let&rsquo;s dig into the whole process once and review what we need to do step by step since we got the signal from our model to placing an order.</p>

<p>Just as a sample, consider we have the following signal which is the output of our model.</p>

<p><em>If you don&rsquo;t have any idea about the model, please review the last episode about&nbsp;</em><a href="https://25mordad.medium.com/how-to-design-a-machine-learning-trading-bot-part4-build-a-model-6db5f2aa0818" target="_blank"><em>building a model</em></a><em>.</em></p>

<blockquote>Model output: Open a Long position on BTC/USDT</blockquote>

<p>Here you need to follow step by step.&nbsp;<em>(Kindly, remind you that I always simplify the method to make the concept more understandable)</em></p>

<p><img alt="place an order" src="https://1des.com/uploads/posts/how-to-design-p5/placeorder.gif" style="height:184px; width:328px" /></p>

<ul>
	<li>Set aside and type of your order.</li>
</ul>

<p>On our sample the side is &ldquo;Buy&rdquo; and the type is &ldquo;Market order&rdquo;. (Depending on your signal, the side could be Sell/Buy, and also based on your strategy, the order type could be limit order or market order or also some other advanced orders like Iceberg Order)</p>

<ul>
	<li>Set the size</li>
</ul>

<p>Before you place the order you need to set the size of your order. Also, based on your strategy, in some cases, you need to get your balance and calculate the size you want to dedicate to buy or sell. For example, in our sample, we want to dedicate half of our USDT to buy.</p>

<p>Accordingly, we get the balance of USDT, calculate the half, and set the size to the determined value.</p>

<ul>
	<li>Place your order.</li>
</ul>

<p>So far you know the size of the order, the side, and the type of your order. Then it&rsquo;s ready to place your order.</p>

<ul>
	<li>Retrieve your order</li>
</ul>

<p>Depending on the exchange API you need to retrieve your order to find out if it is filled or not. Also, it could possible that your order is filled with more than one trade with different prices.</p>

<p><img alt="Keep calm!" src="https://1des.com/uploads/posts/how-to-design-p5/keepcalm.gif" style="height:187px; width:250px" /></p>

<ul>
	<li>Place Stop-loss order:</li>
</ul>

<p>If your signal provides &ldquo;Take-profit&rdquo; (TP) and &ldquo;Stop-loss&rdquo; (SL) then most probably you have a challenge in spot trading to place an order for TP and SL together. Because in many exchanges on spot trading when you place an order for TP/SL your asset will be blocked by the exchange to make sure that the order has been supported with an asset. (You won&rsquo;t face this problem in margin trading)</p>

<p>Let&rsquo;s consider your signal comes with stop-loss. So, it means you need to place an order with the type of stop-loss.</p>

<ul>
	<li>Cancel order:</li>
</ul>

<p>In the end, you should be ready to cancel your order at any time. Consider, you want to cancel the stop-loss order and place a take-profit order.</p>

<p><strong>Conclusion:</strong></p>

<p>The automation section could be very complicated depending on the exchange you&rsquo;re working with. So, make sure the API is well-documented and has proper support from the exchange. There are some packages and libraries which help us to connect to several exchanges. In the next season the automation development part, we will discuss how to work with them.</p>

<p>But if you want a secure, comfortable, and easy way to connect your exchange to intelligent automation and make some profit, try&nbsp;<a href="https://1des.com/" target="_blank">1DES</a>.</p>


`

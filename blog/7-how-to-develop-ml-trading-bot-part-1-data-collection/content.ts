export default `
<p><strong>How to create an automated trading system using machine learning.&nbsp;</strong></p>

<p><em>Part 1: Data Collection</em></p>

<p><em><img alt="Data Collection" src="https://1des.com/uploads/posts/how-to-dev/p1/how-to-develop-1.png" style="height:288px; width:400px" /></em></p>

<p>&nbsp;</p>

<p>We have now arrived at the second season of our article series on how to design, build, and make automated bots with machine learning techniques.</p>

<p>It is best to start&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p1-data-collection" target="_blank">designing a trading bot</a>&nbsp;before you start coding it.&nbsp;</p>

<p><strong>Previously on &quot;How to&quot;:&nbsp;</strong></p>

<p>We have begun with &ldquo;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p1-data-collection" target="_blank">Collecting Data</a>&rdquo;:</p>

<p>In that lesson, we learned what OHLCV data is and why we need historical data as well as online data together.</p>

<div data-oembed-url="https://www.youtube.com/watch?v=CIBnXsOfcJw">
<div>
<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;" allowfullscreen="" scrolling="no" src="//if-cdn.com/a5Soots" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" tabindex="-1"></iframe></div>
</div>
</div>

<p>Next, we discussed &ldquo;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p2-data-analysis" target="_blank">Data Analysis</a>&rdquo;</p>

<p>We have seen how important it is to clean data and features engineering. To make a stable machine learning model, we need to prepare the data in the right way and, last but not least, we learned how to visualize this data in order to succeed.</p>

<p>Then we continued with&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p3-pattern-recognition" target="_blank">finding a pattern</a>&nbsp;and we noted you can be trapped like a horoscopist to find a pattern in data. You should always follow the scientific methods and act as an astronomer. Then we identified a very simple pattern, SMA20, and talked about how to label them to [0,1].</p>

<p>Then, we&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p4-build-model" target="_blank">build a model</a>. We explained, Once you make an ML (Machine Learning) model, you should evaluate it with a backtest. You will need a strategy at this point to Buy and Sell. This means that we already have a signal to open a Long/Short position.</p>

<p>Then, we showed how to&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p5-running-automation" target="_blank">run the automation</a>, by these actions:</p>

<ul>
	<li>Place an order</li>
	<li>Retrieve an order</li>
	<li>Cancel an order</li>
	<li>Get the asset&rsquo;s balance</li>
	<li>Get Online price</li>
</ul>

<p>Following by understanding the concept of exchanges, API, and spot trading.</p>

<p>In the end, we discussed&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p5-risk-management" target="_blank">risk management</a>&nbsp;as well, as well as how to monitor the trade online and continuously.&nbsp;</p>

<p>For better performance in developing and coding, please read &quot;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p1-data-collection" target="_blank">How to design a machine learning trading bot - Part 1: Data Collection</a>&quot; before continuing with this section.&nbsp;&nbsp;</p>

<p>Let&#39;s move on to the development season.</p>

<p><img alt="Development" src="https://1des.com/uploads/posts/how-to-dev/p1/development.jpg" style="height:266px; width:400px" /></p>

<p>Here is our plan for today:</p>

<ol>
	<li>Get historical data for the BTC/USDT pair.&nbsp;</li>
	<li>Get stream data from Binance and Kraken.</li>
	<li>Store the BTC/USDT and BTC/EUR in a database in a 1min timeframe.</li>
</ol>

<p>Let&#39;s begin with &quot;Historical Data.&quot;</p>

<h2>What are historical data and why do we need them?&nbsp;</h2>

<p>Historical data in financial markets is collected data about past pair rates. To collect historical data on the crypto market specifically, you first need to know which exchange you&#39;re using. In this study, we will be focusing on two of the most popular cryptocurrency exchanges, Binance and Kraken.&nbsp;</p>

<p>Then, what is the purpose of historical data?&nbsp;</p>

<p>Data is the main fuel for machine learning algorithms. A clean set of data will make your job with ML much easier. We will back to the &quot;clean&quot; term later on in the next episode.&nbsp;&nbsp;</p>

<p>To develop and build a machine learning trading model we need OHLC (Open, High, Low, Close) or OHLCV (Open, High, Low, Close, Volume) data. There are many possibilities for the timing of OHLC data. In most cases, 1MIN OHLC is the shortest time frame for trading. Then, we can build the other common time frames from 1MIN, such as 5MIN or 1Hour. (Custom time frames have also recently become interesting, like 100 minutes).</p>

<p>Most of the financial market&#39;s historical data are in OHLCV format, but you should know that if you have the 1MIN OHLCV you can make any other (longer than 1MIN) time frame format from it. (We&#39;ll explore this further in the next episode)</p>

<p>It is important to have &quot;historical data&quot; for the learning process. In &quot;Build a Model&quot;, we showed that we need a bunch of labeled data to make a machine-learning model.&nbsp;</p>

<p><strong>Where can I find the historical data for cryptocurrencies?</strong></p>

<p>A 1H time frame historical data for BTC/USDT in the Binance exchange since September 2017 has been prepared by&nbsp;<a href="https://1des.com/" target="_blank">1DES</a>. You can find it in this repository:&nbsp;</p>

<p><a href="https://github.com/the1des/historical_data" target="_blank">https://github.com/the1des/historical_data</a></p>

<p>You can find more about data format by reading the &quot;ReadMe&quot; file.&nbsp;</p>

<p>Here are some other free historical data resources:</p>

<ul>
	<li>coinbaseUSD1-mindata2014-12-01to_2019-01-09.csv &amp; bitstampUSD1-mindata2012-01-01to_2020-04-22.csv&nbsp;</li>
	<li><a href="https://www.kaggle.com/mczielinski/bitcoin-historical-data" target="_blank">https://www.kaggle.com/mczielinski/bitcoin-historical-data</a></li>
	<li>Gemini 1-min,1-hour, and day interval data from 17/9/2014- 2020-04-09</li>
	<li><a href="https://www.kaggle.com/prasoonkottarathil/btcinusd" target="_blank">https://www.kaggle.com/prasoonkottarathil/btcinusd</a></li>
	<li>BitMEX (2016-2018) and Zaif (2014-2018) 1min ohlcv</li>
	<li><a href="https://www.kaggle.com/mikoim/bitcoin-historical-data" target="_blank">https://www.kaggle.com/mikoim/bitcoin-historical-data</a></li>
	<li>Bitfinex 1-minute resolution</li>
	<li><a href="https://www.kaggle.com/tencars/392-crypto-currency-pairs-at-minute-resolution" target="_blank">https://www.kaggle.com/tencars/392-crypto-currency-pairs-at-minute-resolution</a></li>
	<li>historical 1-minute candles from Bitfinex-exchange</li>
	<li><a href="https://github.com/Zombie-3000/Bitfinex-historical-data" target="_blank">https://github.com/Zombie-3000/Bitfinex-historical-data</a></li>
	<li><a href="https://cryptoarchive.com.au/" target="_blank">https://cryptoarchive.com.au/</a></li>
	<li>Full 1-hour data for +28 exchanges</li>
	<li><a href="https://www.cryptodatadownload.com/data/" target="_blank">https://www.cryptodatadownload.com/data/</a></li>
	<li>Full 1minCandlesticks Data (Binance):</li>
	<li><a href="https://www.kaggle.com/jorijnsmit/binance-full-history" target="_blank">https://www.kaggle.com/jorijnsmit/binance-full-histor</a></li>
	<li>Binance Crypto Klines</li>
	<li><a href="https://www.kaggle.com/binance/binance-crypto-klines" target="_blank">https://www.kaggle.com/binance/binance-crypto-klines</a></li>
</ul>

<p><strong>What is the best way to consistently store the 1MIN BTC/USDT rate from Binance using the Binance API?&nbsp;</strong></p>

<p><img alt="Price Chart" src="https://1des.com/uploads/posts/how-to-dev/p1/price-chart.jpg" style="height:234px; width:350px" /></p>

<p>0 -Okay then. Let&#39;s take it a step further and collect live data. We are using the following repository to collect data and to build a 1MIN timeframe at 1DES:</p>

<p><a href="https://github.com/the1des/crypto_data_collection" target="_blank">https://github.com/the1des/crypto_data_collection</a></p>

<p>1 -The repository is written in Python. Clone the repository to your local first:</p>

<pre>
<code>git clone git@github.com:the1des/crypto_data_collection.git&nbsp;
</code></pre>

<p>2- Ensure you have installed all the requirements:</p>

<pre>
pip install -r requirements.txt
</pre>

<p>3- You need PostgreSQL installed on your local, then the queries for creating the tables are in the &quot;sql&quot; folder. We recommend the database name &quot;ohlc&quot; for these tables. As a result of your query, you will have four tables. &quot;binance_btcusdt&quot; would be one of them.&nbsp;</p>

<p>4- Duplicate the file &quot;.env.example&quot; and rename it &quot;.env&quot;, and then update the following environmental variables:</p>

<pre>
DB_HOST=localhost
DB_USERNAME=postgres
DB_PASSWORD=YOURPASSWORD
DB_DATABASE=ohlc
</pre>

<p>You do not have to change anything else if you didn&#39;t change the tables&#39; names.&nbsp;</p>

<p>5- The last thing to do is just run the code. If you run the following command, the tables will be filled every minute with data from the exchanges (Binance and Kraken).</p>

<p>Collect BTC/USDT and BTC/EUR from Binance:</p>

<pre>
python bin/binance.py&nbsp;
</pre>

<p>Collect BTC/USD and BTC/EUR from Kraken:</p>

<pre>
python bin/kraken.py&nbsp;
</pre>

<p>6- Done! Now, you are collecting BTC/USDT rates non-stop and converting them to 1MIN OHLCV data format. You will need this data later to feed your machine learning models.&nbsp;&nbsp;</p>


`

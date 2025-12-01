export default `
<section aria-labelledby="post-title" style="max-width:720px;margin:0 auto;padding:16px;line-height:1.75;font-size:16px;">
  <h1 id="post-title" style="font-size:1.375rem;line-height:1.3;margin:0 0 0.75rem;font-weight:700;">
    How to create an automated trading system using machine learning.
  </h1>

  <p style="margin:0 0 1rem;"><em>Part 1: Data Collection</em></p>

  <p style="margin:0 0 1rem;">
    We have now arrived at the second season of our article series on how to design, build, and make automated bots with machine learning techniques.
  </p>

  <p style="margin:0 0 1rem;">
    It is best to start
    <a href="https://cognitrade.1des.com/posts/1-how-to-design-ml-trading-bot-part-1-data-collection" target="_blank" rel="noopener noreferrer">
      designing a trading bot
    </a>
    before you start coding it.
  </p>

  <p style="margin:0 0 0.5rem;"><strong>Previously on "How to":</strong></p>

  <p style="margin:0 0 1rem;">
    We have begun with
    “<a href="https://cognitrade.1des.com/posts/1-how-to-design-ml-trading-bot-part-1-data-collection" target="_blank" rel="noopener noreferrer">Collecting Data</a>”:
  </p>

  <p style="margin:0 0 1rem;">
    In that lesson, we learned what OHLCV data is and why we need historical data as well as online data together.
  </p>

  <!-- Responsive video wrapper -->
  <div data-oembed-url="https://www.youtube.com/watch?v=CIBnXsOfcJw" style="position:relative;width:100%;padding-bottom:56.25%;margin:0 0 1rem;border-radius:12px;overflow:hidden;background:#000;">
    <iframe
      title="YouTube video player"
      src="https://www.youtube.com/embed/CIBnXsOfcJw?rel=0"
      allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;"
      allowfullscreen
      loading="lazy"
      style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
      tabindex="-1"></iframe>
  </div>

  <p style="margin:0 0 1rem;">
    Next, we discussed “<a href="https://cognitrade.1des.com/posts/2-how-to-design-ml-trading-bot-part-2-data-analysis" target="_blank" rel="noopener noreferrer">Data Analysis</a>”
  </p>

  <p style="margin:0 0 1rem;">
    We have seen how important it is to clean data and features engineering. To make a stable machine learning model, we need to prepare the data in the right way and, last but not least, we learned how to visualize this data in order to succeed.
  </p>

  <p style="margin:0 0 1rem;">
    Then we continued with
    <a href="https://cognitrade.1des.com/posts/3-how-to-design-ml-trading-bot-part-3-pattern-recognition" target="_blank" rel="noopener noreferrer">finding a pattern</a>
    and we noted you can be trapped like a horoscopist to find a pattern in data. You should always follow the scientific methods and act as an astronomer. Then we identified a very simple pattern, SMA20, and talked about how to label them to [0,1].
  </p>

  <p style="margin:0 0 1rem;">
    Then, we
    <a href="https://cognitrade.1des.com/posts/4-how-to-design-ml-trading-bot-part-4-build-model" target="_blank" rel="noopener noreferrer">build a model</a>.
    We explained, Once you make an ML (Machine Learning) model, you should evaluate it with a backtest. You will need a strategy at this point to Buy and Sell. This means that we already have a signal to open a Long/Short position.
  </p>

  <p style="margin:0 0 0.5rem;">
    Then, we showed how to
    <a href="https://cognitrade.1des.com/posts/5-how-to-design-ml-trading-bot-part-5-running-automation" target="_blank" rel="noopener noreferrer">run the automation</a>, by these actions:
  </p>

  <ul style="margin:0 0 1rem 1.25rem;padding:0;">
    <li>Place an order</li>
    <li>Retrieve an order</li>
    <li>Cancel an order</li>
    <li>Get the asset’s balance</li>
    <li>Get Online price</li>
  </ul>

  <p style="margin:0 0 1rem;">
    Following by understanding the concept of exchanges, API, and spot trading.
  </p>

  <p style="margin:0 0 1rem;">
    In the end, we discussed
    <a href="https://cognitrade.1des.com/posts/6-how-to-design-ml-trading-bot-part-6-risk-management" target="_blank" rel="noopener noreferrer">risk management</a>
    as well, as well as how to monitor the trade online and continuously.
  </p>

  <p style="margin:0 0 1rem;">
    For better performance in developing and coding, please read
    “<a href="https://cognitrade.1des.com/posts/1-how-to-design-ml-trading-bot-part-1-data-collection" target="_blank" rel="noopener noreferrer">How to design a machine learning trading bot - Part 1: Data Collection</a>”
    before continuing with this section.
  </p>

  <p style="margin:0 0 1rem;">Let's move on to the development season.</p>

  <figure style="margin:0 0 1rem;">
    <img alt="Development" src="/posts/7/development.jpg" loading="lazy" style="display:block;width:100%;height:auto;border-radius:12px;" />
    <figcaption style="font-size:0.875rem;color:#6b7280;margin-top:0.5rem;">Development</figcaption>
  </figure>

  <p style="margin:0 0 0.5rem;">Here is our plan for today:</p>
  <ol style="margin:0 0 1rem 1.25rem;padding:0;">
    <li>Get historical data for the BTC/USDT pair.</li>
    <li>Get stream data from Binance and Kraken.</li>
    <li>Store the BTC/USDT and BTC/EUR in a database in a 1min timeframe.</li>
  </ol>

  <p style="margin:0 0 1rem;">Let's begin with "Historical Data."</p>

  <h2 style="font-size:1.125rem;line-height:1.35;margin:1.25rem 0 0.75rem;font-weight:700;">
    What are historical data and why do we need them?
  </h2>

  <p style="margin:0 0 1rem;">
    Historical data in financial markets is collected data about past pair rates. To collect historical data on the crypto market specifically, you first need to know which exchange you're using. In this study, we will be focusing on two of the most popular cryptocurrency exchanges, Binance and Kraken.
  </p>

  <p style="margin:0 0 1rem;">Then, what is the purpose of historical data?</p>

  <p style="margin:0 0 1rem;">
    Data is the main fuel for machine learning algorithms. A clean set of data will make your job with ML much easier. We will back to the "clean" term later on in the next episode.
  </p>

  <p style="margin:0 0 1rem;">
    To develop and build a machine learning trading model we need OHLC (Open, High, Low, Close) or OHLCV (Open, High, Low, Close, Volume) data. There are many possibilities for the timing of OHLC data. In most cases, 1MIN OHLC is the shortest time frame for trading. Then, we can build the other common time frames from 1MIN, such as 5MIN or 1Hour. (Custom time frames have also recently become interesting, like 100 minutes).
  </p>

  <p style="margin:0 0 1rem;">
    Most of the financial market's historical data are in OHLCV format, but you should know that if you have the 1MIN OHLCV you can make any other (longer than 1MIN) time frame format from it. (We'll explore this further in the next episode)
  </p>

  <p style="margin:0 0 1rem;">
    It is important to have "historical data" for the learning process. In "Build a Model", we showed that we need a bunch of labeled data to make a machine-learning model.
  </p>

  <p style="margin:0 0 0.5rem;"><strong>Where can I find the historical data for cryptocurrencies?</strong></p>

  <p style="margin:0 0 1rem;">
    A 1H time frame historical data for BTC/USDT in the Binance exchange since September 2017 has been prepared by
    <a href="https://1des.com/" target="_blank" rel="noopener noreferrer">1DES</a>.
    You can find it in this repository:
  </p>

  <p style="margin:0 0 1rem;word-break:break-word;">
    <a href="https://github.com/the1des/historical_data" target="_blank" rel="noopener noreferrer">https://github.com/the1des/historical_data</a>
  </p>

  <p style="margin:0 0 1rem;">You can find more about data format by reading the "ReadMe" file.</p>

  <p style="margin:0 0 0.5rem;">Here are some other free historical data resources:</p>
  <ul style="margin:0 0 1rem 1.25rem;padding:0;word-break:break-word;">
    <li>coinbaseUSD1-mindata2014-12-01to_2019-01-09.csv &amp; bitstampUSD1-mindata2012-01-01to_2020-04-22.csv</li>
    <li><a href="https://www.kaggle.com/mczielinski/bitcoin-historical-data" target="_blank" rel="noopener noreferrer">https://www.kaggle.com/mczielinski/bitcoin-historical-data</a></li>
    <li>Gemini 1-min,1-hour, and day interval data from 17/9/2014- 2020-04-09</li>
    <li><a href="https://www.kaggle.com/prasoonkottarathil/btcinusd" target="_blank" rel="noopener noreferrer">https://www.kaggle.com/prasoonkottarathil/btcinusd</a></li>
    <li>BitMEX (2016-2018) and Zaif (2014-2018) 1min ohlcv</li>
    <li><a href="https://www.kaggle.com/mikoim/bitcoin-historical-data" target="_blank" rel="noopener noreferrer">https://www.kaggle.com/mikoim/bitcoin-historical-data</a></li>
    <li>Bitfinex 1-minute resolution</li>
    <li><a href="https://www.kaggle.com/tencars/392-crypto-currency-pairs-at-minute-resolution" target="_blank" rel="noopener noreferrer">https://www.kaggle.com/tencars/392-crypto-currency-pairs-at-minute-resolution</a></li>
    <li>historical 1-minute candles from Bitfinex-exchange</li>
    <li><a href="https://github.com/Zombie-3000/Bitfinex-historical-data" target="_blank" rel="noopener noreferrer">https://github.com/Zombie-3000/Bitfinex-historical-data</a></li>
    <li><a href="https://cryptoarchive.com.au/" target="_blank" rel="noopener noreferrer">https://cryptoarchive.com.au/</a></li>
    <li>Full 1-hour data for +28 exchanges</li>
    <li><a href="https://www.cryptodatadownload.com/data/" target="_blank" rel="noopener noreferrer">https://www.cryptodatadownload.com/data/</a></li>
    <li>Full 1minCandlesticks Data (Binance):</li>
    <li><a href="https://www.kaggle.com/jorijnsmit/binance-full-history" target="_blank" rel="noopener noreferrer">https://www.kaggle.com/jorijnsmit/binance-full-histor</a></li>
    <li>Binance Crypto Klines</li>
    <li><a href="https://www.kaggle.com/binance/binance-crypto-klines" target="_blank" rel="noopener noreferrer">https://www.kaggle.com/binance/binance-crypto-klines</a></li>
  </ul>

  <p style="margin:0 0 0.5rem;"><strong>What is the best way to consistently store the 1MIN BTC/USDT rate from Binance using the Binance API?</strong></p>

  <figure style="margin:0 0 1rem;">
    <img alt="Price Chart" src="/posts/7/price-chart.jpg" loading="lazy" style="display:block;width:100%;height:auto;border-radius:12px;" />
    <figcaption style="font-size:0.875rem;color:#6b7280;margin-top:0.5rem;">Price Chart</figcaption>
  </figure>

  <p style="margin:0 0 1rem;">
    0 - Okay then. Let's take it a step further and collect live data. We are using the following repository to collect data and to build a 1MIN timeframe at 1DES:
  </p>

  <p style="margin:0 0 1rem;word-break:break-word;">
    <a href="https://github.com/the1des/crypto_data_collection" target="_blank" rel="noopener noreferrer">https://github.com/the1des/crypto_data_collection</a>
  </p>

  <p style="margin:0 0 0.5rem;">1 - The repository is written in Python. Clone the repository to your local first:</p>
  <pre style="overflow:auto;background:#0b1020;color:#e5e7eb;padding:12px;border-radius:10px;margin:0 0 1rem;">
<code>git clone git@github.com:the1des/crypto_data_collection.git</code></pre>

  <p style="margin:0 0 0.5rem;">2 - Ensure you have installed all the requirements:</p>
  <pre style="overflow:auto;background:#0b1020;color:#e5e7eb;padding:12px;border-radius:10px;margin:0 0 1rem;">
<code>pip install -r requirements.txt</code></pre>

  <p style="margin:0 0 1rem;">
    3 - You need PostgreSQL installed on your local, then the queries for creating the tables are in the "sql" folder. We recommend the database name "ohlc" for these tables. As a result of your query, you will have four tables. "binance_btcusdt" would be one of them.
  </p>

  <p style="margin:0 0 0.5rem;">4 - Duplicate the file ".env.example" and rename it ".env", and then update the following environmental variables:</p>
  <pre style="overflow:auto;background:#0b1020;color:#e5e7eb;padding:12px;border-radius:10px;margin:0 0 1rem;">
<code>DB_HOST=localhost
DB_USERNAME=postgres
DB_PASSWORD=YOURPASSWORD
DB_DATABASE=ohlc</code></pre>

  <p style="margin:0 0 1rem;">You do not have to change anything else if you didn't change the tables' names.</p>

  <p style="margin:0 0 1rem;">
    5 - The last thing to do is just run the code. If you run the following command, the tables will be filled every minute with data from the exchanges (Binance and Kraken).
  </p>

  <p style="margin:0 0 0.5rem;">Collect BTC/USDT and BTC/EUR from Binance:</p>
  <pre style="overflow:auto;background:#0b1020;color:#e5e7eb;padding:12px;border-radius:10px;margin:0 0 1rem;">
<code>python bin/binance.py</code></pre>

  <p style="margin:0 0 0.5rem;">Collect BTC/USD and BTC/EUR from Kraken:</p>
  <pre style="overflow:auto;background:#0b1020;color:#e5e7eb;padding:12px;border-radius:10px;margin:0 0 1rem;">
<code>python bin/kraken.py</code></pre>

  <p style="margin:0 0 1rem;">
    6 - Done! Now, you are collecting BTC/USDT rates non-stop and converting them to 1MIN OHLCV data format. You will need this data later to feed your machine learning models.
  </p>
</section>
`;

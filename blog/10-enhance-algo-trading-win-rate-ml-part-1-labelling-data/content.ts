export default `
<div class="prose prose-invert max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-100">

  <p>In an era of trading automation, algorithmic trading has become a popular method for gaining profit for a variety of people and companies. The advantage is that you can run an algorithm-based bot to execute trades for you and earn profits across multiple markets. Nevertheless, many algorithms may have low win rates due to the different circumstances that unfold on the market, which makes your algorithm inefficient and useless. That's when machine learning may be useful to solve this problem and maximize potential profit.</p>

  <h2 class="text-2xl font-bold mt-8">How to Enhance Algo Trading Win Rate with ML: Labelling Data</h2>

  <p>In this series of articles, we will examine if machine learning can improve an algorithmic strategy's win rate on the Binance BTC/USDT market.</p>
  <p>This will be accomplished using 1H historical OHLC data.</p>
  <p>First, we calculate the win rate of an algorithmic strategy using the Python backtesting library. Next, we use a machine learning model on the same data and timeline to improve our win rate.</p>
  <p>In this experiment we will focus on these 3 areas:</p>
  <p>Part 1: Labelling Data</p>
  <p>Part 2: Feature Selection</p>
  <p>Part 3: Comparing backtest results and training</p>

  <h2 class="text-2xl font-bold mt-8">Part 1: Labelling Data</h2>

  <p>When it comes to the cryptocurrency market, there may be many algorithmic strategies to consider. We will use the simple and popular strategy known as "Moving Average Crossover" to simplify the problem. When the shorter-term SMA crosses above the longer-term SMA, it's a buy signal, since it indicates that the trend is shifting upward. Meanwhile, when the shorter-term SMA crosses below the longer-term SMA, it's a sell signal, as it indicates that the trend is changing downward. The SMA9 and SMA20 of the close price of the Binance BTC/USDT 1-hour timeframe are used in this example.</p>

  <p>Our experiment will be implemented in the Jupyterlab environment. Clone the <a href="https://github.com/the1des/crypto_labeling_data" target="_blank">improve_algorithmic_trading_ml</a> repository and run the <a href="https://github.com/the1des/improve_algorithmic_trading_ml/blob/main/1-labeling_data.ipynb" target="_blank">1-labeling_data.ipynb</a> for a better understanding.</p>

  <p><strong>Block [1-3]</strong> – First, let's explore the data. In addition to the Binance 1-hour OHLCV data from 2017-08-17 to 2021-11-10, we have added several indicators.</p>
  <div class="my-8">
    <img src="/posts/10/block-1.jpg" alt="data-screenshot" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p><strong>Block [4-8]</strong> – Now let's label our data based on our SMA crossover strategy. When SMA9 &gt; SMA20 it’s a buy signal so we label our data as "target_long" and when SMA9 &lt; SMA20 it’s a sell signal so we label our data as "target_short."</p>
  <div class="my-8">
    <img src="/posts/10/block4.jpg" alt="data-screenshot" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p>Then we visualize using pyplot. Long labels are green points, short labels are red, SMA9 and SMA20 are blue and yellow lines respectively. Below is a sample:</p>
  <div class="my-8">
    <img src="/posts/10/plot4.jpg" alt="data-screenshot" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p><strong>Block [9-13]</strong> – The Backtesting library provides a Strategy class to open/close positions. We map "bull"/"bear" flags to target_long/target_short so our backtest code stays the same even if labeling changes.</p>
  <div class="my-8">
    <img src="/posts/10/block9-13.jpg" alt="data-screenshot" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p>Running a backtest gives a win rate:</p>
  <div class="my-8">
    <img src="/posts/10/backtest.jpg" alt="data-screenshot" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p>Based on 1394 trades, we had a win rate of 36.08%, which is not as high as you might expect. To improve, we need correct labels. Errors in labels feed wrong data to our model.</p>

  <p><strong>Block [14-19]</strong> – To fix labels, we simulate trades and remove those that lost, iterating through labels and correcting mislabels.</p>
  <div class="my-8">
    <img src="/posts/10/block14-19.jpg" alt="data-screenshot" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p>After correction, running backtests again yields a 100% win rate. We now have a clean dataset to feed into our ML model.</p>

  <p>In the next article, we’ll explore feature selection, train our model, and see if we can improve the win rate further.</p>

</div>
`;

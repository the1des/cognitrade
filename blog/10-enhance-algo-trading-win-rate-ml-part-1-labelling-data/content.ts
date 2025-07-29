export default `

<p>In an era of trading automation, algorithmic trading has become a popular method for gaining profit for a variety of people and companies. The advantage is that you can run an algorithm-based bot to execute trades for you and earn profits across multiple markets. Nevertheless, many algorithms may have low win rates due to the different circumstances that unfold on the market, which makes your algorithm inefficient and useless. That&#39;s when machine learning may be useful to solve this problem and maximize potential profit.</p>

<p><img alt="algorithmic trading" src="https://1des.com/uploads/posts/improve-algorithmic/labelling/algorithmic-trading.jpg" style="height:282px; width:500px" /></p>

<h2>How to Enhance Algo Trading Win Rate with ML:&nbsp;Labelling Data</h2>

<p>In this series of articles, we will examine if machine learning can improve an algorithmic strategy&#39;s win rate on the Binance BTC/USDT market.&nbsp;</p>

<p>This will be accomplished using 1H historical OHLC data.</p>

<p>First, we calculate the win rate of an algorithmic strategy using the Python backtesting library. Next, we use a machine learning model on the same data and timeline to improve our win rate.&nbsp;</p>

<p>In this experiment we will focus on these 3 areas:</p>

<p>Part 1: Labelling Data</p>

<p>Part 2: Feature Selection</p>

<p>Part 3: Comparing backtest results and training</p>

<h2>Part 1: Labelling Data</h2>

<p>When it comes to the cryptocurrency market, there may be many algorithmic strategies to consider. We will use the simple and popular strategy known as &quot;Moving Average Crossover&quot; to simplify the problem. When&nbsp;the shorter-term SMA crosses above the longer-term SMA, it&#39;s a buy signal,&nbsp;since&nbsp;it indicates that the trend is shifting&nbsp;upward. Meanwhile, when the shorter-term SMA crosses below the longer-term SMA, it&#39;s a sell signal, as it indicates that the trend is&nbsp;changing downward.&nbsp;The SMA9 and SMA20 of the close price of the Binance BTC/USDT 1-hour timeframe are used in this example.&nbsp;</p>

<p>Our experiment will be implemented in the Jupyterlab environment.&nbsp;Clone the&nbsp;<a href="https://github.com/the1des/crypto_labeling_data" target="_blank">improve_algorithmic_trading_ml</a>&nbsp;repository and run the&nbsp;<a href="https://github.com/the1des/improve_algorithmic_trading_ml/blob/main/1-labeling_data.ipynb" target="_blank">1-labeling_data.ipynb</a>&nbsp;for a better understanding.</p>

<p><strong>Block [1-3]</strong></p>

<p>First, let&#39;s explore the data. In addition to the Binance 1-hour OHLCV data from 2017-08-17 to 2021-11-10, we have added several indicators</p>

<p><img alt="data-screenshot" src="https://1des.com/uploads/posts/improve-algorithmic/labelling/block-1.jpg" style="height:643px; width:898px" /></p>

<p><strong>Block [4-8]</strong></p>

<p>Now let&rsquo;s label our data based on our SMA crossover strategy. To demonstrate that when SMA9 &gt; SMA20 it&rsquo;s a buy signal so we label our data as &quot;target_long&quot; and on the other hand when SMA9 &lt; SMA20 it&rsquo;s a sell signal so we label our data as &ldquo;target_short&rdquo;.</p>

<p><img alt="data-screenshot" src="https://1des.com/uploads/posts/improve-algorithmic/labelling/block4.jpg" style="height:299px; width:734px" /></p>

<p>Then we will visualize the data using the pyplot library. Long labels are on green points and short labels are on red points. And SMA9 and SMA20 are blue and yellow lines, respectively. As a result, we have a good understanding of the distribution of our data. The image below shows a part of the plot.</p>

<p><img alt="data-screenshot" src="https://1des.com/uploads/posts/improve-algorithmic/labelling/plot4.jpg" style="height:474px; width:641px" /></p>

<p><strong>Block [9-13]</strong></p>

<p>The Backtesting library provides a class called Strategy that allows you to create your own strategy for opening and closing long and short positions. Our strategy is to open long positions when we get to a &quot;bull&quot; target and to close long positions when we reach a &quot;bear&quot; point. For short positions, the reverse should be done. Our dataset has two additional columns called &quot;bull&quot; and &quot;bear&quot; that are the same as &quot;target_long&quot; and &quot;target_short&quot; in our crossover strategy, but you can flag your data either as bull or bear if you wish to use a different strategy for labeling. In this way, we don&#39;t have to change our backtesting strategy whenever we change our labeling strategy.</p>

<p><img alt="data-screenshot" src="https://1des.com/uploads/posts/improve-algorithmic/labelling/block9-13.jpg" style="height:408px; width:657px" /></p>

<p>Once we have our backtest function and labeled data ready, let&#39;s run a backtest to calculate our crossover strategy win rate:</p>

<p><img alt="data-screenshot" src="https://1des.com/uploads/posts/improve-algorithmic/labelling/backtest.jpg" style="height:425px; width:369px" /></p>

<p>Based on 1394 trades, we had a win rate of 36.08%, which is not as high as you might expect. What we want to discover is how machine learning can improve this win rate for us. One approach is to feed these labels along with some features directly to a machine learning model to see if it can help improve them. But the problem is that when we have so many errors in the labels it means that we are feeding the wrong data to our model and we can&#39;t expect better results.</p>

<p><strong>Block [14-19]</strong></p>

<p>In order to fix our labels, we should remove the ones that have given us losses when we have opened buy or sell positions. This is done by iterating through our labels one by one, simulating our backtest strategy, and changing the label when it gives us a loss.</p>

<p><img alt="data-screenshot" src="https://1des.com/uploads/posts/improve-algorithmic/labelling/block14-19.jpg" style="height:638px; width:656px" /></p>

<p>We should be able to run backtests again with a 100% win rate once the wrong labels have been removed. To verify that, we prepare our corrected dataset and repeat the same process as we did for our main strategy.</p>

<p>Our labels have been successfully corrected, as you can see. This gives us a nice clean set of data to feed into our machine learning model.</p>

<p>In the next article, we&#39;ll talk about how to find suitable features based on our strategy, then train our model on them and see if we can improve the win rate or not.</p>


`

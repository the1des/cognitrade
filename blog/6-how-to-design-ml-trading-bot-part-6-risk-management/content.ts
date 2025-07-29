export default `

<p>We have started with &ldquo;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p1-data-collection" target="_blank">Collecting Data</a>&rdquo;:</p>

<p>We found out what is OHLCV data, and we learned why we need historical data and online data both together.</p>

<p>Then we continued with &ldquo;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p2-data-analysis" target="_blank">Data Analysis</a>&rdquo;</p>

<p>We have seen how cleaning the data including features engineering is important. We learned that to make a stable machine learning model we need to prepare data in the right way and finally, we found out how visualizing data can help us to reach the goal.</p>

<p>Then we continued with&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p3-pattern-recognition" target="_blank">finding a pattern</a>&nbsp;and we noted you can be trapped like a horoscopist to find a pattern in data, and always follow the scientific ways and act as an astronomer. Then we found a very simple pattern which was &ldquo;SMA20&rdquo; and we discussed how to label them to [0,1].</p>

<p>Then, we&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p4-build-model" target="_blank">build a model</a>. We explained after you made an ML (Machine Learning) model, you should evaluate it with a backtest. And at this point, you need a strategy to Buy and Sell. It means, we already have a signal to open a Long/Short position.</p>

<p>Finally, we showed how to&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p5-running-automation" target="_blank">run the automation</a>, by these actions:</p>

<ul>
	<li>Place an order</li>
	<li>Retrieve an order</li>
	<li>Cancel an order</li>
	<li>Get the asset&rsquo;s balance</li>
	<li>Get Online price</li>
</ul>

<p>Following by understanding the concept of exchanges, API, and spot trading.</p>

<p>Now it&rsquo;s time to take care of the position we have opened and make sure we reach the profit or make our loss minimum as possible.</p>

<p><strong>Step 6: Monitoring the trade and Risk Management</strong></p>

<p>First, let&rsquo;s start to answer this question:</p>

<blockquote>Why do we need to monitor the trade and our position?</blockquote>

<p>Back to years ago with classic trading, it was so normal when you open a position based on a given signal all information you need has been given to you by the signal maker.</p>

<p><img alt="Risk Management" src="https://1des.com/uploads/posts/how-to-design-p6/how-to-des-6.png" style="height:577px; width:568px" /></p>

<p>The following example is one of this classic signal:</p>

<ul>
	<li>Market: Whatever ;)</li>
	<li>Side: Buy</li>
	<li>Order type: Limit</li>
	<li>Open position: 100</li>
	<li>Take-profit (TP) 1: 110</li>
	<li>Take-profit (TP) 2: 115</li>
	<li>Stop-loss (SL): 90</li>
</ul>

<p>As you can see you have all the information you need for TP1, TP2, and SL. Suppose we are the signal maker and try to understand the meaning of this signal with our data vision.</p>

<p><img alt="signal" src="https://1des.com/uploads/posts/how-to-design-p6/signal.gif" style="height:360px; width:480px" /></p>

<p>Signal maker: Based on the data I&rsquo;ve already collected I have decided what would be the best trade for me. And I don&rsquo;t care what happens after I open a position because I&rsquo;m so smart and I predicted what could happen, for this reason, I&rsquo;ve already set my stop-loss and take-profit.</p>

<p>Can you see the problem behind this kind of prediction and action?</p>

<p>It&rsquo;d be so easy to fix this error. We need to evaluate our trade with the new data from the market and we should be flexible to change stop-loss or take-profit while the position is still open. With this perspective, we can follow three methods:</p>

<ol>
	<li>Update SL and TP every minute (The minimum time frame)</li>
	<li>Update SL and TP on each [defined] period (which is not the period you&rsquo;re trading)</li>
	<li>Update SL and TP on the time frame you&rsquo;re trading.</li>
</ol>

<p><em>So, what does it mean?</em></p>

<p>Let&rsquo;s consider we are trading in the 1H (1Hour) time frame.</p>

<blockquote><em>Trading in the 1H time frame means our decision to buy and sell is based on the OHLCV in 1H.</em></blockquote>

<p>1- Then, updating SL and TP every minute (method 1) means we will decide to change TP and SL on 1minutes OHLCV.</p>

<p>2- Method 2: If we decide to change TP or SL every 15 minutes based on the changes in the last 15 minutes (Lower time frame) or if we update SL or TP every 2 hours (Higher time frame)</p>

<p>3- By following the third method, you will decide about changing SL or TP every hour by looking at the last hour&#39;s data.</p>

<p><img alt="problem solved" src="https://1des.com/uploads/posts/how-to-design-p6/problem-solved.gif" style="height:480px; width:480px" /></p>

<p>If you&rsquo;re following me from our&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p1-data-collection" target="_blank">first episode</a>, you have seen that I always go for the simplest way to design and later on to develop. This is my trick to estimate the idea. Well, I bet, you know what method we should start!</p>

<p>Yes, that&rsquo;s right. We are continuing with the third method which is updating SL and TP at the same time frame we are trading.</p>

<h2>Machine Learning:</h2>

<p>It backs again. Do you remember what we have done so far? Let&rsquo;s recap it:</p>

<p>&nbsp;</p>

<ol>
	<li><a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p1-data-collection" target="_blank">Data Collection</a></li>
	<li><a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p2-data-analysis" target="_blank">Analyzing Data</a></li>
	<li><a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p3-pattern-recognition" target="_blank">Pattern Recognition</a></li>
	<li><a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p4-build-model" target="_blank">Build a Model</a></li>
	<li><a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p5-running-automation" target="_blank">Running automation</a></li>
</ol>

<p>So, I have good news and bad news. The bad news is we have to do it all these steps again. And the good news is, we have done it once then it&rsquo;s easy to redo it again on a small scale.</p>

<p>First, we collect the last hour data (OHLCV), from the time we opened the position till the time we want to process.</p>

<p>Then, we analyze it and find the proper features. One of the differences between analyzing data at this time and before is the trade position. This means our key feature at this point is our trade entrance.</p>

<p>After that, we need to find a pattern and do the training and testing and also backtesting.</p>

<p>Then, we should make a model.</p>

<p>Finally, we need to run the bot to change the SL or TP on the exchange. For example, in this step maybe you need to cancel the old SL on the exchange and place a new order for the new SL.</p>

<p><img alt="pattern" src="https://1des.com/uploads/posts/how-to-design-p6/pattern.gif" style="height:240px; width:240px" /></p>

<p><strong>Conclusion:</strong></p>

<p>Risk management and monitoring the position is a separate part of trading with the new input and output. To reach the positive result you need to do all parts from 1 to 5 again. In our development season (Which starts in January 2021) when we want to develop this part we will go deeper and talk more about it.</p>

<p>&nbsp;</p>


`

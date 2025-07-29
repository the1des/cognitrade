export default `

<p>Trading with the machine learning method has just been started and many people want to know more about it. In this series of articles, I&rsquo;m going to tell you how to design and develop intelligent automation to trade in the market.</p>

<p>This article is the first episode from a series of articles with the title of &ldquo;How to design a machine learning trading bot&rdquo;</p>

<p>In this article, we are going to design a pipeline. We don&rsquo;t develop a program to trade at this moment. However, when we make our plan, in the next season we will implement the program.</p>

<p>Here is a table of content regarding what we expected to follow in future articles:</p>

<p>Season1 Episode1: Collecting Data (<em>We are here!</em>)</p>

<p>S1E2:&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p2-data-analysis">Analyzing Data</a></p>

<p>S1E3:&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p3-pattern-recognition">Finding a pattern in analyzed data</a></p>

<p>S1E4:&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p4-build-model">Building a Model based on the determined pattern</a></p>

<p>S1E5:&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p5-running-automation">Running an automation</a></p>

<p>S1E6:&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p5-risk-management">Monitoring the trade and Risk Management</a></p>

<p>S2: <a href="https://1des.com/blog/posts/how-to-develop-machine-learning-trading-bot-data-collection">Development</a></p>

<p>It&rsquo;s so important before you start your development, you have a clear idea of what you want to do and what you want to implement.</p>

<h2>Step 1: Collecting Data</h2>

<p>&nbsp;</p>

<div data-oembed-url="https://www.youtube.com/watch?v=CIBnXsOfcJw">
<div>
<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;" allowfullscreen="" scrolling="no" src="//if-cdn.com/a5Soots" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" tabindex="-1"></iframe></div>
</div>
</div>

<p>Which market do you want to trade? Is it the crypto market or Forex? Maybe it&rsquo;s the stock market? Before starting anything, you should make sure you have the right data in your hand. Let start with the cryptocurrency market as a sample.</p>

<p><img alt="Collecting Data" src="https://1des.com/uploads/posts/a1/how-to-design-machine-learning-trading-bot-p1-data-collection.png" style="height:530px; width:700px" /></p>

<p>In the cryptocurrency markets, each exchange has different data, but most of them at the most time are following the main trend.</p>

<p>I suggest selecting one of the main exchanges and most effective in the market which is Binance. Then, select the pair you want to work on such as Bitcoin/USD or Bitcoin/Euro. In our sample, we choose BTC/USDT in Binance.</p>

<p>Now, we need two items:</p>

<p>First, we should start to collect data from Binance, and also, we need the historical data of BTC/USDT on Binance. There are a lot of websites and web services that provide historical data for free.</p>

<p>So, why we need historical data, and why we should start to collect data now?</p>

<p>In the following, we will use historical data to analyze them and find a pattern in data. Plus, we need to start collecting the data to use them in our prediction segment. The prediction part is a part of the &ldquo;Building model&rdquo; in our process.</p>

<p>Before we finish this article, let&rsquo;s talk a little bit more specifically about our expectations of data.</p>

<p>A minimum numeric data we need is OHLCV data and, I recommend collecting the 1m (one minute) data frames.</p>

<h2>OHLCV:</h2>

<p>OHLCV stands for</p>

<p>O: Open Price</p>

<p>H: High Price</p>

<p>L: Low Price</p>

<p>C: Close Price</p>

<p>V: Volume</p>

<p>In our following article in the next season (Development Season), we will show how to develop a program to collect 1m OHLCV from BTC/USDT.</p>

<p>&nbsp;</p>

`

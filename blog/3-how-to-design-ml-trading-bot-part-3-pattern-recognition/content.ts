export default `
​<p><strong>Previously on &ldquo;How to design a machine learning trading bot&rdquo;</strong></p>

<p>We have started with &ldquo;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p1-data-collection" target="_blank">Collecting Data</a>&rdquo;:</p>

<p>We found out what is OHLCV data, and we learned why we need historical data and online data both together.</p>

<p>Then we continued with &ldquo;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p2-data-analysis" target="_blank">Data Analysis</a>&rdquo;</p>

<p>We have seen how cleaning the data including features engineering is important. We learned that to make a stable machine learning model we need to prepare data in the right way and finally, we found out how visualizing data can help us to reach the goal.</p>

<p>So, let&rsquo;s start the third step considering that we already have valid data in our hands.</p>

<p>This article is the third episode from a series of articles with the title of &ldquo;How to design a machine learning trading bot&rdquo;</p>

<p><strong>Step 3: Finding a pattern in analyzed data</strong></p>

<p>Discovering patterns in the data is a very fundamental task that has been played by advanced machine learning methods and your creativity.</p>

<p>Let&rsquo;s start with this main question in the market:</p>

<p>Do you believe, some patterns in the market repeat frequently? If so, we are on the same track.</p>

<p><img alt="Pattern Recognition" src="https://1des.com/uploads/posts/how-to-design-p3/how-to-p3.png" style="height:351px; width:350px" /></p>

<p>Let&#39;s start with one of the simplest patterns in technical analysis and that&rsquo;s &ldquo;Trend&rdquo;. So, if you don&rsquo;t know what is the trend about, just pause here for a minute and search on Google.</p>

<p>We can find two main patterns in the trend: Bullish (Up Trend) and Bearish (Down Trend). (Again if you don&rsquo;t know about them just pause and search on Google :))</p>

<p>So, let&#39;s recap what we have done so far because it seems we haven&rsquo;t done anything, but actually, we did what we were looking for.</p>

<p>In short, we break the problem into a smaller problem which was finding a trend (pattern) into finding a bullish/bearish trend (pattern). The main key here is we don&rsquo;t start finding a pattern in raw numeric data blindly.</p>

<p><img alt="“Astrology” and “Horoscope”" src="https://1des.com/uploads/posts/how-to-design-p3/horoscope.gif" style="height:480px; width:480px" /></p>

<p>In the pattern recognition phase, you should be so careful and aware. Finding a pattern could be like &ldquo;Astrology&rdquo; and &ldquo;Horoscope&rdquo; if you just look for any nonsense pattern. There are a lot of data out there and you can find many patterns, and even you can make many stories between these patterns, Oppositely, on the other side, we have &ldquo;Astronomy&rdquo;. Always make sure, you are following the data like an astronomer and a scientist, not an astrologer or a horoscopist.</p>

<p><img alt="Astronomer &amp; Scientist way" src="https://1des.com/uploads/posts/how-to-design-p3/astronomer.gif" style="height:384px; width:384px" /></p>

<p>Okay then. Let&rsquo;s get back to our sample. We want to find the &ldquo;Bullish Trend&rdquo; pattern, and one of the simplest strategies to catch this pattern is using the &ldquo;Moving Average&rdquo;. (Pause and google it)</p>

<p><strong>Bullish and Bearish pattern:</strong></p>

<p>Finding a bullish trend by following toward SMA20 (Simple Moving Average 20) is one of the simple and easy ways in the market, I&rsquo;ve called it the &ldquo;Hello, World!&rdquo; in trading courses ;)</p>

<p>In the following chart, you can follow the SMA20 with the black curved line. You can simply say:</p>

<p>Bullish: If Close &gt; SMA20</p>

<p>Bearish: If Close &lt; SMA20</p>

<p><img alt="(Gold/USD, 5m, 27 Nov 2020)" src="https://1des.com/uploads/posts/how-to-design-p3/chart.png" style="height:180px; width:500px" /></p>

<p>&nbsp;</p>

<p><strong>Machine Learning</strong></p>

<p>So, when machine learning shows up?</p>

<p>To solve a problem with machine learning, you need to choose a method. For example, there are some problems that you can find a solution with &ldquo;Unsupervised Learning&rdquo; methods, and some problems are solved with &ldquo;Regression&rdquo; methods.</p>

<p>Again and as always we start with one of the simplest methods which is &ldquo;Binary Classification&rdquo;.</p>

<p><img alt="Binary Classification" src="https://1des.com/uploads/posts/how-to-design-p3/binary.gif" style="height:334px; width:334px" /></p>

<p>In binary classification, you have a label [0,1] for your records. Plus, the machine is going to predict 0 or 1 for your new record.</p>

<p>Now, How binary classification can help us to find a bullish trend? Practically, we will develop it in our next season (How to develop a machine learning trading bot), but having a conclusion for this episode, we assume:</p>

<p>To find a bullish pattern we set the label to 1 if Close &gt; SMA20 for each record and we set it to 0 if it&rsquo;s not. In the end, we have a dataset of OHLCV (check out the very first episode, Data Collection) including an indicator SMA20, plus a target column (label) [0,1]. After training with ML methods, if the prediction comes to 1 it means we have a bullish trend, and if it shows 0 means we are not in a bullish pattern.</p>

<blockquote><em>If you&rsquo;ve noticed so far, I always start with the simple concept and I believe if you fully understand the idea, then you can develop it into a more complex solution.</em></blockquote>

`

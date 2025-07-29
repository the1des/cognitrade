export default `
<p><strong>Previously on &quot;How to develop&quot;:&nbsp;</strong></p>

<p>If you want to maximize the performance of developing and coding, please read &quot;<a href="https://1des.com/blog/posts/how-to-develop-machine-learning-trading-bot-data-collection" target="_blank">How to design a machine learning trading bot - Part 2: Data Analysis</a>&quot; before proceeding.&nbsp;&nbsp;</p>

<p>Next, let&#39;s look at the development.</p>

<p>Data analysis is a key component of machine learning. When combined with the numeric data from the finance market, it becomes even more significant. The articles in this series are designed as educational material. As a result, the complex problem is simplified to a very simple one. This study also uses basic data to demonstrate how they can be analyzed. Ultimately, we are exploring how we can improve trading via machine learning in this series of articles.&nbsp;</p>

<h2>Data Analysis<strong>:</strong></h2>

<p>The previous article discussed how to collect OHLCV data (stream data) and how to use historical data. We utilize historical data to train a machine and stream data to make predictions based on that model.&nbsp;</p>

<p><img alt="Data analysis" src="https://1des.com/uploads/posts/how-to-dev/p2/data-analysis.jpg" style="height:200px; width:300px" /></p>

<p>At this step, we need the historical data, which we use the following repository:&nbsp;&nbsp;<a href="https://github.com/the1des/historical_data/blob/main/binance/1H.csv" target="_blank">1H.csv</a></p>

<p>In the CSV file, you will find Binance 1 hour OHLCV, which starts on 2017-09-05 and ends on 2021-06-01.</p>

<p>We are exploring the code in Jupyterlab this time. Jupyterlab provides a better environment, for education and research objectives.</p>

<p><a href="https://github.com/the1des/crypto_data_analysis" target="_blank">crypto_data_analysis</a>&nbsp;and&nbsp;<a href="https://github.com/the1des/crypto_data_analysis/blob/main/analysis.ipynb" target="_blank">analysis.ipynb</a></p>

<p>Block [1-3]</p>

<p>First, let&#39;s see what we have in our data. We&#39;ll just show the table of data from the CSV file. Note that we need to reformat the date from string to DateTime, and set it as an index.</p>

<p><img alt="data-screen" src="https://1des.com/uploads/posts/how-to-dev/p2/block1.png" style="height:391px; width:619px" /></p>

<p>Block [4-6]</p>

<p>We have two plots with close prices. The first shows the entire data frame. The second one displays a chart of the close price from 2021-04-30 08:00:00 to 2021-05-21 03:00:00. This helps you understand how the data set works.</p>

<blockquote>Don&#39;t be afraid to visualize your data. It will help you in your analysis. Here are the two most useful Python libraries we will be using for plots:</blockquote>

<p>Matplotlib:&nbsp;<a href="https://matplotlib.org/" target="_blank">https://matplotlib.org</a></p>

<p>Seaborn:&nbsp;<a href="https://seaborn.pydata.org/" target="_blank">https://seaborn.pydata.org</a></p>

<p>Block [7-8]:</p>

<p>We are using cleaned data here, and the missing data has been fixed earlier. Before you continue, you must review your data and correct any incorrect and missing data. As an example, we just check if there are any nulls in the Close column.&nbsp;</p>

<p>Block [9-11]:</p>

<p>Let&#39;s add some moving averages of Close (SMA9, SMA20, SMA50, SMA200) to the data frame. Visualize a chart with both the SMA50 and SMA200 included.</p>

<p><img alt="data-screen" src="https://1des.com/uploads/posts/how-to-dev/p2/block9.png" style="height:405px; width:779px" /></p>

<p>Now, let&#39;s review two main keywords in data analysis:</p>

<p>1- Feature</p>

<p>2- Label</p>

<p>In the next article, we&#39;ll discuss labels in greater detail. This time we&#39;re focusing on features.</p>

<p>Selecting the right feature is crucial. Here is the feature definition (from the Google machine learning crash course) again before we go any further:</p>

<p>A feature is an input variable&mdash;the x variable in simple linear regression. A simple machine learning project might use a single feature, while a more sophisticated machine learning project could use millions of features.</p>

<p>Imagine that we have a set of car prices like the following and we want to predict a given car&#39;s price:</p>

<p><img alt="label" src="https://1des.com/uploads/posts/how-to-dev/p2/label.png" style="height:106px; width:300px" /></p>

<p>The Price is our Label, and the Year, Model, and Brand are our Features.&nbsp;</p>

<p>Back to our data, we need to find some features to feed our machine.</p>

<p><img alt="question" src="https://media.giphy.com/media/ghIj4EPRN9qPFnmaFm/giphy.gif" /></p>

<p>Is the feature we need already included in our data set, or should we build it?</p>

<p>Is the close rate a helpful feature to select?</p>

<p>What about the Label? Do we plan to predict the price? Are there any other plans?&nbsp;</p>

<p>We will not predict the price in this study, which means the close rate will not be labeled.&nbsp;</p>

<p><a href="https://github.com/the1des/crypto_data_analysis/blob/main/analysis.ipynb" target="_blank">analysis.ipynb</a></p>

<p>Block [12-13]</p>

<p>Neither Close nor Open can be a feature. Even if you normalize the rate, you can still get a different rate than the machine is trained with.&nbsp;</p>

<p>You can see how Closes are distributed by visualizing the histogram of the Close rate. If you want to select a feature, the histogram should resemble a normal distribution.&nbsp;</p>

<p><img alt="data-screen" src="https://1des.com/uploads/posts/how-to-dev/p2/block12.png" style="height:423px; width:527px" /></p>

<p>Block [14-20]</p>

<p>None of these columns in our data frame could be a potential feature for us. This leads us to build one. Let&#39;s add a new column for the difference between the close and the SMA 20. You can see from the histogram that it is much more similar to a normal distribution than before. But, still, something is wrong here. Close and SMA 20 have a variance between -2000 and +2000. This indicates our updated feature is still dependent on the Close price. So, by dividing the result by the Close rate we can change the variance to -0.1 and +0.1. And the machine loves this range of numbers :)&nbsp;</p>

<p><img alt="data-screen" src="https://1des.com/uploads/posts/how-to-dev/p2/block14.png" style="height:315px; width:592px" /></p>

<p>Block [21-24]</p>

<p>Let&#39;s look at a few useful functions before we finish this section:</p>

<p>By plotting the correlated heatmap, you can identify which features are correlated and avoid using them. The behavior of diff_close_sma20 and diff_close_sma200 in the example is so similar. In practice, that could be quite sufficient.&nbsp;</p>

<p>We will talk more about the label in the next article, but to make it more practical, consider this rule for the label:</p>

<p>A close price that is greater than SMA50 is labeled 1 and vice versa labeled 0.</p>

<p>Using Pairplot, we can see how the features cover the target.&nbsp;</p>

<p><img alt="data-screen" src="https://1des.com/uploads/posts/how-to-dev/p2/block21.png" style="height:477px; width:1293px" /></p>

`

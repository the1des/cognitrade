export default `
​
<p><strong>Previously on &ldquo;How to design a machine learning trading bot&rdquo;</strong></p>

<p>We have started with &ldquo;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p1-data-collection" target="_blank">Collecting Data</a>&rdquo;</p>

<p>We found out what is OHLCV data, and we learned why we need historical data and online data both together.</p>

<blockquote>
<p>In this part, we dive into the process of preparing and transforming raw financial data into clean, structured input ready for use in machine learning models &mdash; a crucial step that determines the accuracy and reliability of your trading bot.</p>
</blockquote>

<p>So, let&rsquo;s start the second step considering that we already collected the data and we have it.</p>

<p>This article is the second episode from a series of articles with the title of &ldquo;How to design a machine learning trading bot&rdquo;</p>

<h2>Step 2: Data Analysis</h2>

<p>&nbsp;</p>

<div data-oembed-url="https://www.youtube.com/watch?v=uMa7_umV5fI">
<div>
<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;" allowfullscreen="" scrolling="no" src="//if-cdn.com/8ZBCgv1" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" tabindex="-1"></iframe></div>
</div>
</div>

<p>Cleaning data, filtering them, and features engineering data is one of the essential steps in the machine learning approach.</p>

<p>To explain how important this section means, I can split the whole development time into ten frames, and &ldquo;Analysing Data&rdquo; should take half the time of the whole process, which is five frames. In other words, you&rsquo;re working on the historical data to provide an expected version of data for a machine.</p>

<p>Keep in your mind that these data are like feed for the machines and, if you feed them with a portion of healthy, low-fat food then you can expect them to run better, but if you provide poor quality food for them, then if you have the top most expensive best quality machine in the world, it doesn&rsquo;t work properly for you.</p>

<p>If you have a mathematics or statistics background you are so fitted for this section, but if you don&rsquo;t have it, don&rsquo;t worry :) you can reach your targets with basic knowledge.</p>

<p><img alt="Visualizing Data" src="https://1des.com/uploads/posts/a2/how-to-p2.png" style="height:216px; width:300px" /></p>

<h2>Visualizing Data:</h2>

<p>Visualizing data is a method to see and analyze them in an easy and perfect way. Thus, by this level, you are going to work a lot with plots and charts and they help you to see what you miss in the raw numbers.</p>

<h2>Key Data&nbsp;Analysis Terminology:</h2>

<p>There are two main keywords in data analysis that you should know before you go further. &ldquo;Labels&rdquo; and &ldquo;Features&rdquo;</p>

<p>In the&nbsp;<a href="https://developers.google.com/machine-learning/crash-course/framing/ml-terminology" target="_blank">Google machine learning crash course</a>, you can find a fine explanation of these terms.</p>

<h2>Last but not least</h2>

<p>In many machine learning courses and tutorials, they provide prepared data for you and the course starts with how you train the machine. The data they use in their examples are totally engineered and ready to go for the training, but in reality, the data is not served for you. It should be you to make the data ready for your purposes. Keep in mind that the resources and references still are limited. In our next season at the development part, we will see how we do &ldquo;Feature Engineering&rdquo; on OHLCV data and prepare them for training.</p>

​
`

export default `


<p><strong>Previously on &ldquo;How to design a machine learning trading bot&rdquo;</strong></p>

<p>We have started with &ldquo;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p1-data-collection" target="_blank">Collecting Data</a>&rdquo;:</p>

<p>We found out what is OHLCV data and, we learned why we need historical data and online data both together.</p>

<p>Then we continued with &ldquo;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p2-data-analysis" target="_blank">Data Analysis</a>&rdquo;</p>

<p>We have seen how cleaning the data including features engineering is important. We learned that to make a stable machine learning model we need to prepare data in the right way and finally, we found out how visualizing data can help us to reach the goal.</p>

<p>Then we continued with&nbsp;<a href="https://1des.com/blog/posts/how-to-design-machine-learning-trading-bot-p3-pattern-recognition" target="_blank">finding a pattern</a>:</p>

<p>We noted that you can be trapped like a horoscopist to find a pattern in data, and always follow the scientific ways and act as an astronomer. Then we had found a very simple pattern which was &ldquo;SMA20&rdquo; and we discussed how to label them to [0,1].</p>

<p>Now, it&rsquo;s time to make a model. Like always I need to mention that at this season we design our product and in the next season we will develop it.</p>

<blockquote><em>In regard, you should always design your pipeline on paper or even in your mind and then go for development. At least, I can say this is my way to follow the process and so far it works for me ;)</em></blockquote>

<p><img alt="It Works!" src="https://1des.com/uploads/posts/how-to-design-p4/works.gif" style="height:360px; width:480px" /></p>

<p><strong>Step 4: Building a Model based on the determined pattern</strong></p>

<p>Let&#39;s start with the format of data in our hands at this moment.</p>

<p>We have OHLCV plus SMA20 and a column named target, like this:</p>

<p><img alt="How_to_design_p4_sample1.csv" src="https://1des.com/uploads/posts/how-to-design-p4/How_to_design_p4_sample1.png" style="height:253px; width:927px" /></p>

<p>Source:&nbsp;<a href="https://gist.github.com/25mordad/64a39ecc0ef71140140251b61db93572" target="_blank">https://gist.github.com/25mordad/64a39ecc0ef71140140251b61db93572</a></p>

<p><strong>Machine Learning</strong></p>

<p>So, at this step machine can help us to build a model, and the main question is how? Let&rsquo;s review how machine learning classification techniques work:</p>

<p><img alt="Build ML Model" src="https://1des.com/uploads/posts/how-to-design-p4/how-to-p4.png" style="height:462px; width:633px" /></p>

<p>First, the machine gets huge labeled data. (we already prepared it)</p>

<p>Then, by splitting the data to train and test, the machine is going to find a proper measure for the training set.</p>

<p>Finally, we do testing on the test dataset to find out if the model we built is fit or not.</p>

<blockquote><em>I&rsquo;ve just simplified the whole procedures, it&rsquo;s a little bit more complicated than what I have told here</em></blockquote>

<p>In many problems, they use machine learning to solve their problem that step is their final step and they reached their models, but in finance and trading problems, that level is not the end. We still need more jobs to do to find a fit model. We need to do &ldquo;Backtesting&rdquo; on the test dataset to review the result.</p>

<p><strong>Backtesting</strong></p>

<p>At this point, we need to define a strategy to buy and sell. In our sample (SMA20) our strategy to buy/sell could be very simple like this:</p>

<p>-The first time you see a label [1] open a long position (Buy)</p>

<p>- If you are in a Long position, close it, as soon as you see the label [0]</p>

<p>If you couldn&rsquo;t follow what we talking about, check the following data. You can see the time we open the long position and the time we close it.</p>

<p><img alt="How_to_design_p4_sample2.csv" src="https://1des.com/uploads/posts/how-to-design-p4/How_to_design_p4_sample2.csv.png" style="height:925px; width:954px" /></p>

<p>Source:&nbsp;<a href="https://gist.github.com/25mordad/511f39f7cb15260736248ce261008a0f" target="_blank">https://gist.github.com/25mordad/511f39f7cb15260736248ce261008a0f</a></p>

<p><strong>Conclusion:</strong></p>

<p>A trading model is a package of machine learning methods plus backtesting. Even, in some cases to have better performance, you can apply some rules to your prediction.</p>

<p>Also, from my point of view, a complete model contains a Long and Short Strategy together. In this case, you need to have more than one ML model.</p>

<p>As an example, an ML model for the Long position and an ML model for the Short position. At this place, your creativity helps you to build a comprehensive model.</p>

<p><img alt="Models" src="https://1des.com/uploads/posts/how-to-design-p4/models.jpg" style="height:463px; width:700px" /></p>


`

export default `
<div class="prose prose-invert max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-100">

  <p><strong>Previously on &quot;How to develop&quot;:&nbsp;</strong></p>

  <p>If you want to maximize the performance of developing and coding, please read &quot;<a href="https://cognitrade.1des.com/posts/9-how-to-develop-ml-trading-bot-part-2-data-analysis" target="_blank">How to design a machine learning trading bot – Part 2: Data Analysis</a>&quot; before proceeding.&nbsp;&nbsp;</p>

  <p>Next, let&apos;s look at the development.</p>

  <p>Data analysis is a key component of machine learning. When combined with numeric finance market data, it becomes even more significant. The articles in this series are designed as educational material, simplifying complex problems. This study uses basic data to demonstrate how it can be analyzed. Ultimately, we explore how to improve trading via machine learning in this series of articles.</p>

  <h2 class="text-2xl font-bold mt-8">Data Analysis:</h2>

  <p>The previous article discussed collecting OHLCV stream data and using historical data to train a model, then applying stream data for real-time predictions.</p>

  <div class="my-8">
    <img src="/posts/9/data-analysis.jpg" alt="Data analysis" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p>At this step, we need the historical data from the following CSV:&nbsp;<a href="https://github.com/the1des/historical_data/blob/main/binance/1H.csv" target="_blank">1H.csv</a>. It contains Binance 1 hour OHLCV from 2017-09-05 to 2021-06-01.</p>

  <p>We will explore the code in JupyterLab, which provides a rich environment for education and research:</p>
  <p><a href="https://github.com/the1des/crypto_data_analysis" target="_blank">crypto_data_analysis</a> &mdash; <a href="https://github.com/the1des/crypto_data_analysis/blob/main/analysis.ipynb" target="_blank">analysis.ipynb</a></p>

  <p><strong>Block [1-3]</strong> – Inspect the CSV data. We reformat the date column to DateTime and set it as the index.</p>
  <div class="my-8">
    <img src="/posts/9/block1.png" alt="data-screen" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p><strong>Block [4-6]</strong> – Plot close prices. First, the full timeframe; then zoom into 2021-04-30 08:00:00 to 2021-05-21 03:00:00 for detail. Visualization helps understanding.</p>

  <blockquote class="border-l-4 border-vibrant-cyan pl-4 italic">Don&apos;t be afraid to visualize your data. It will help you in your analysis. Here are the two most useful Python libraries we will use:</blockquote>
  <p>Matplotlib: <a href="https://matplotlib.org/" target="_blank">https://matplotlib.org</a></p>
  <p>Seaborn: <a href="https://seaborn.pydata.org/" target="_blank">https://seaborn.pydata.org</a></p>

  <p><strong>Block [7-8]</strong> – Ensure data cleaning. Check for nulls in the Close column and correct as needed before proceeding.</p>

  <p><strong>Block [9-11]</strong> – Add moving averages (SMA9, SMA20, SMA50, SMA200) to the DataFrame and plot SMA50 &amp; SMA200 overlays.</p>
  <div class="my-8">
    <img src="/posts/9/block9.png" alt="data-screen" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <h2 class="text-2xl font-bold mt-8">Features vs. Labels</h2>

  <p>Two main keywords in data analysis:</p>
  <ul>
    <li><strong>Feature</strong></li>
    <li><strong>Label</strong></li>
  </ul>

  <p>In the next article, we’ll dive deeper into labels. This section focuses on features. From Google’s ML Crash Course:</p>
  <blockquote class="border-l-4 border-vibrant-cyan pl-4 italic">A feature is an input variable—the x variable in simple linear regression. A simple ML project might use one feature; a sophisticated one could use millions.</blockquote>

  <p>Imagine predicting car prices:</p>
  <div class="my-8">
    <img src="/posts/9/label.png" alt="label" class="w-full h-auto rounded-xl shadow-md" />
  </div>
  <p>Price is our <strong>label</strong>, while Year, Model, and Brand are <strong>features</strong>.</p>

  <p>Back to our data: we need to decide if existing columns suffice or if we must engineer new features. Close price alone isn’t a stable feature; normalization still ties it to absolute value.</p>

  <div class="my-8">
    <img src="https://media.giphy.com/media/ghIj4EPRN9qPFnmaFm/giphy.gif" alt="question" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p><strong>Block [12-13]</strong> – Histogram of Close shows a non-normal distribution. A good feature should approximate normality.</p>
  <div class="my-8">
    <img src="/posts/9/block12.png" alt="data-screen" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p><strong>Block [14-20]</strong> – Engineer <code>diff_close_sma20</code> = (Close – SMA20) / Close to normalize variance to approximately ±0.1. The histogram now resembles normal.</p>
  <div class="my-8">
    <img src="/posts/9/block14.png" alt="data-screen" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p><strong>Block [21-24]</strong> – Plot correlation heatmap to identify and avoid highly correlated features. Example: <code>diff_close_sma20</code> and <code>diff_close_sma200</code> behave similarly, so choose one.</p>
  <div class="my-8">
    <img src="/posts/9/block21.png" alt="data-screen" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p>Next, define a labeling rule for practice: Close price &gt; SMA50 → label 1, else 0. Use Seaborn’s pairplot to visualize how features cover this target.</p>

  <div class="my-8">
    <img src="/posts/9/block21.png" alt="Pair Plot" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p>In the next article, we’ll implement these labels and features in training and backtesting to improve our algo’s win rate.</p>

</div>
`;

export default `
<section aria-labelledby="pattern-title" style="max-width:720px;margin:0 auto;padding:16px;line-height:1.75;font-size:16px;">

  <h2 id="pattern-title" style="font-size:1.25rem;line-height:1.3;margin:0 0 1rem;font-weight:700;">
    Previously on “How to design a machine learning trading bot”
  </h2>

  <p style="margin:0 0 1rem;">
    We have started with
    “<a href="https://cognitrade.1des.com/posts/1-how-to-design-ml-trading-bot-part-1-data-collection" target="_blank" rel="noopener noreferrer">Collecting Data</a>”.
  </p>

  <p style="margin:0 0 1rem;">
    We found out what OHLCV data is, and we learned why we need historical data and online data together.
  </p>

  <p style="margin:0 0 1rem;">
    Then we continued with
    “<a href="https://cognitrade.1des.com/posts/2-how-to-design-ml-trading-bot-part-2-data-analysis" target="_blank" rel="noopener noreferrer">Data Analysis</a>”.
  </p>

  <p style="margin:0 0 1rem;">
    We saw how important data cleaning—including feature engineering—is. To make a stable machine learning model, we must prepare data the right way and, finally, visualize it to reach the goal.
  </p>

  <p style="margin:0 0 1rem;">
    So, let’s start the third step considering that we already have valid data in our hands.
  </p>

  <p style="margin:0 0 1rem;">
    This article is the third episode in the series titled “How to design a machine learning trading bot”.
  </p>

  <h3 style="font-size:1.125rem;line-height:1.35;margin:1.25rem 0 0.75rem;font-weight:700;">
    Step 3: Finding a pattern in analyzed data
  </h3>

  <p style="margin:0 0 1rem;">
    Discovering patterns in the data is a fundamental task that blends advanced machine-learning methods with your creativity.
  </p>

  <p style="margin:0 0 0.5rem;">Let’s start with this main question in the market:</p>
  <blockquote style="margin:0 0 1rem;padding:0.75rem 1rem;border-left:4px solid #e5e7eb;background:#f9fafb;border-radius:8px;">
    Do you believe some patterns in the market repeat frequently? If so, we are on the same track.
  </blockquote>

  <p style="margin:0 0 1rem;">
    Let’s start with one of the simplest patterns in technical analysis: the <strong>Trend</strong>. If you don’t know what a trend is, pause here for a minute and search on Google.
  </p>

  <p style="margin:0 0 1rem;">
    We can find two main patterns in trends: Bullish (Up Trend) and Bearish (Down Trend). (Again, if you don’t know about them, pause and search on Google.)
  </p>

  <p style="margin:0 0 1rem;">
    Let’s recap what we’ve done so far. We broke the problem of “finding a trend (pattern)” into a smaller problem: detecting bullish/bearish trends. The key is: we don’t start searching for patterns blindly in raw numeric data.
  </p>

  <figure style="margin:0 0 1rem;">
    <img alt="“Astrology” and “Horoscope”" src="/posts/3/horoscope.gif" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
  </figure>

  <p style="margin:0 0 1rem;">
    In the pattern-recognition phase, be careful. Pattern hunting can turn into “Astrology” or “Horoscope” if you chase nonsense. There’s a lot of data, and you can always weave stories between patterns. On the other side is “Astronomy”. Always follow the data like an astronomer and a scientist—not an astrologer or a horoscopist.
  </p>

  <figure style="margin:0 0 1rem;">
    <img alt="Astronomer & Scientist way" src="/posts/3/astronomer.gif" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
  </figure>

  <p style="margin:0 0 1rem;">
    Back to our sample: we want to find the <strong>Bullish Trend</strong> pattern. One of the simplest strategies is using the <strong>Moving Average</strong>.
  </p>

  <h4 style="font-size:1rem;line-height:1.35;margin:1rem 0 0.5rem;font-weight:700;">
    Bullish and Bearish pattern
  </h4>

  <p style="margin:0 0 1rem;">
    Finding a bullish trend by comparing price to <strong>SMA20</strong> (Simple Moving Average 20) is simple and effective—my “Hello, World!” of trading courses ;)
  </p>

  <p style="margin:0 0 0.5rem;">In the chart below, follow SMA20 as the black curved line. We can define:</p>
  <ul style="margin:0 0 1rem 1.25rem;padding:0;">
    <li><strong>Bullish:</strong> if Close &gt; SMA20</li>
    <li><strong>Bearish:</strong> if Close &lt; SMA20</li>
  </ul>

  <figure style="margin:0 0 1rem;">
    <img alt="(Gold/USD, 5m, 27 Nov 2020)" src="/posts/3/chart.png" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
  </figure>

  <h3 style="font-size:1.125rem;line-height:1.35;margin:1.25rem 0 0.75rem;font-weight:700;">
    Machine Learning
  </h3>

  <p style="margin:0 0 1rem;">
    When does machine learning show up? To solve a problem with ML, you choose a method. Some problems fit <strong>Unsupervised Learning</strong>; others fit <strong>Regression</strong>.
    As always, we start simple—with <strong>Binary Classification</strong>.
  </p>

  <figure style="margin:0 0 1rem;">
    <img alt="Binary Classification" src="/posts/3/binary.gif" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
  </figure>

  <p style="margin:0 0 1rem;">
    In binary classification, each record has a label [0,1], and the model predicts 0 or 1 for new records.
  </p>

  <p style="margin:0 0 1rem;">
    How can this help detect a bullish trend? We’ll implement it next season (“How to develop a machine learning trading bot”). For a conclusion here, assume:
  </p>

  <p style="margin:0 0 1rem;">
    For each record, set the label to 1 if Close &gt; SMA20; otherwise set it to 0. In the end, we have an OHLCV dataset (see the first episode on Data Collection) including SMA20 and a target column [0,1].
    After training an ML classifier, if the prediction is 1 we’re in a bullish trend; if it’s 0, we’re not.
  </p>

  <blockquote style="margin:0 0 1rem;padding:0.75rem 1rem;border-left:4px solid #e5e7eb;background:#f9fafb;border-radius:8px;">
    <em>I always start with a simple concept. Once you fully understand the idea, you can develop it into a more complex solution.</em>
  </blockquote>

</section>
`;

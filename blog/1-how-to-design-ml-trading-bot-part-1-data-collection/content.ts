export default `
<section aria-labelledby="episode1-title" style="max-width:720px;margin:0 auto;padding:16px;line-height:1.75;font-size:16px;">

  <p style="margin:0 0 1rem;">
    Trading with machine learning has just started, and many people want to know more about it.
    In this series of articles, I’ll explain how to design and develop intelligent automation for market trading.
  </p>

  <p style="margin:0 0 1rem;">
    This is the first episode in the series <em>“How to design a machine learning trading bot”</em>.
  </p>

  <p style="margin:0 0 1rem;">
    In this article, we are going to design a pipeline. We won’t develop a trading program yet.
    First, we make a plan—then, in the next season, we’ll implement it.
  </p>

  <p style="margin:0 0 0.5rem;">Here is the table of contents for upcoming articles:</p>
  <ul style="margin:0 0 1rem 1.25rem;padding:0;">
    <li>Season 1, Episode 1: Collecting Data <em>(You are here!)</em></li>
    <li>S1E2: <a href="https://cognitrade.1des.com/posts/2-how-to-design-ml-trading-bot-part-2-data-analysis" target="_blank" rel="noopener noreferrer">Analyzing Data</a></li>
    <li>S1E3: <a href="https://cognitrade.1des.com/posts/3-how-to-design-ml-trading-bot-part-3-pattern-recognition" target="_blank" rel="noopener noreferrer">Finding a Pattern in Analyzed Data</a></li>
    <li>S1E4: <a href="https://cognitrade.1des.com/posts/4-how-to-design-ml-trading-bot-part-4-build-model" target="_blank" rel="noopener noreferrer">Building a Model</a></li>
    <li>S1E5: <a href="https://cognitrade.1des.com/posts/5-how-to-design-ml-trading-bot-part-5-running-automation" target="_blank" rel="noopener noreferrer">Running an Automation</a></li>
    <li>S1E6: <a href="https://cognitrade.1des.com/posts/6-how-to-design-ml-trading-bot-part-6-risk-management" target="_blank" rel="noopener noreferrer">Monitoring the Trade and Risk Management</a></li>
    <li>Season 2: <a href="https://cognitrade.1des.com/posts/7-how-to-develop-ml-trading-bot-part-1-data-collection" target="_blank" rel="noopener noreferrer">Development</a></li>
  </ul>

  <p style="margin:0 0 1rem;">
    Before starting development, it’s crucial to have a clear idea of what you want to do and implement.
  </p>

  <h2 id="episode1-title" style="font-size:1.25rem;line-height:1.3;margin:1.25rem 0 0.75rem;font-weight:700;">
    Step 1: Collecting Data
  </h2>

  <!-- Responsive YouTube embed -->
  <div data-oembed-url="https://www.youtube.com/watch?v=CIBnXsOfcJw" style="position:relative;width:100%;padding-bottom:56.25%;margin:0 0 1.25rem;">
    <iframe
      src="//if-cdn.com/a5Soots"
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      loading="lazy"
      style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;">
    </iframe>
  </div>

  <p style="margin:0 0 1rem;">
    Which market do you want to trade? Crypto, Forex, or Stocks?
    Before starting, make sure you have the right data in hand.
    For this sample, we’ll focus on the cryptocurrency market.
  </p>

  <p style="margin:0 0 1rem;">
    In crypto, each exchange has slightly different data, but most follow the main market trends.
    I suggest starting with one of the major exchanges, like <strong>Binance</strong>.
    Then, choose your pair—e.g., Bitcoin/USD or Bitcoin/EUR. In this article, we use BTC/USDT on Binance.
  </p>

  <p style="margin:0 0 1rem;">
    Now, we need two things:
  </p>
  <ol style="margin:0 0 1rem 1.25rem;padding:0;">
    <li>Collect live data from Binance.</li>
    <li>Get historical data of BTC/USDT on Binance. (Many websites and services provide free historical data.)</li>
  </ol>

  <p style="margin:0 0 1rem;">
    Why do we need historical data, and why start collecting data now?
    Because we’ll use historical data for analysis and pattern recognition.
    And we’ll use live-collected data for predictions during model building.
  </p>

  <p style="margin:0 0 1rem;">
    Before finishing, let’s clarify what data we expect.
  </p>

  <h2 style="font-size:1.125rem;line-height:1.35;margin:1.25rem 0 0.75rem;font-weight:700;">
    OHLCV
  </h2>

  <p style="margin:0 0 0.5rem;">OHLCV stands for:</p>
  <ul style="margin:0 0 1rem 1.25rem;padding:0;">
    <li><strong>O:</strong> Open Price</li>
    <li><strong>H:</strong> High Price</li>
    <li><strong>L:</strong> Low Price</li>
    <li><strong>C:</strong> Close Price</li>
    <li><strong>V:</strong> Volume</li>
  </ul>

  <p style="margin:0 0 1rem;">
    For this series, I recommend collecting <strong>1-minute (1m) OHLCV</strong> data frames.
  </p>

  <p style="margin:0 0 1rem;">
    In the next season (Development), we’ll show how to programmatically collect 1m OHLCV from BTC/USDT.
  </p>

</section>
`;

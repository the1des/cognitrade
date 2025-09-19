export default `
<section aria-labelledby="section-title"
  style="max-width:720px;margin:0 auto;padding:16px;line-height:1.75;font-size:16px;">

  <h2 id="section-title" style="font-size:1.25rem;line-height:1.3;margin:0 0 1rem;font-weight:700;">
    Step 6: Monitoring the Trade & Risk Management
  </h2>

  <p style="margin:0 0 1rem;">
    We have started with “
    <a href="https://cognitrade.1des.com/posts/1-how-to-design-ml-trading-bot-part-1-data-collection" target="_blank" rel="noopener noreferrer">
      Collecting Data
    </a>”:
  </p>

  <p style="margin:0 0 1rem;">
    We found out what OHLCV data is, and we learned why we need historical data and online data together.
  </p>

  <p style="margin:0 0 1rem;">
    Then we continued with “
    <a href="https://cognitrade.1des.com/posts/2-how-to-design-ml-trading-bot-part-2-data-analysis" target="_blank" rel="noopener noreferrer">
      Data Analysis
    </a>”.
  </p>

  <p style="margin:0 0 1rem;">
    We saw how important data cleaning and feature engineering are. To make a stable machine learning model, we need to prepare data the right way and, finally, visualize it to reach the goal.
  </p>

  <p style="margin:0 0 1rem;">
    Then we continued with
    <a href="https://cognitrade.1des.com/posts/3-how-to-design-ml-trading-bot-part-3-pattern-recognition" target="_blank" rel="noopener noreferrer">finding a pattern</a>
    and noted you can be trapped like a horoscopist when searching for patterns—always follow scientific methods and act as an astronomer. We identified a simple pattern, “SMA20,” and discussed how to label it to [0,1].
  </p>

  <p style="margin:0 0 1rem;">
    Then, we
    <a href="https://cognitrade.1des.com/posts/4-how-to-design-ml-trading-bot-part-4-build-model" target="_blank" rel="noopener noreferrer">built a model</a>.
    After you build an ML model, you should evaluate it with a backtest. At this point, you need a strategy to Buy and Sell—meaning we already have a signal to open a Long/Short position.
  </p>

  <p style="margin:0 0 0.5rem;">
    Finally, we showed how to
    <a href="https://cognitrade.1des.com/posts/5-how-to-design-ml-trading-bot-part-5-running-automation" target="_blank" rel="noopener noreferrer">run the automation</a>,
    by these actions:
  </p>

  <ul style="margin:0 0 1rem 1.25rem;padding:0;">
    <li>Place an order</li>
    <li>Retrieve an order</li>
    <li>Cancel an order</li>
    <li>Get the asset’s balance</li>
    <li>Get online price</li>
  </ul>

  <p style="margin:0 0 1rem;">Following that, we understood exchanges, APIs, and spot trading.</p>

  <p style="margin:0 0 1rem;">
    Now it’s time to take care of the position we opened and make sure we reach profit—or minimize loss as much as possible.
  </p>

  <h3 style="font-size:1.125rem;line-height:1.35;margin:1.25rem 0 0.75rem;font-weight:700;">
    Step 6: Monitoring the Trade and Risk Management
  </h3>

  <p style="margin:0 0 0.5rem;">First, let’s answer this question:</p>
  <blockquote style="margin:0 0 1rem;padding:0.75rem 1rem;border-left:4px solid #e5e7eb;background:#f9fafb;border-radius:8px;">
    Why do we need to monitor the trade and our position?
  </blockquote>

  <p style="margin:0 0 1rem;">
    Years ago with classic trading, it was normal that when you opened a position based on a given signal, all information you needed was provided by the signal maker.
  </p>

  <p style="margin:0 0 0.5rem;">The following example is one of these classic signals:</p>

  <ul style="margin:0 0 1rem 1.25rem;padding:0;">
    <li>Market: Whatever ;)</li>
    <li>Side: Buy</li>
    <li>Order type: Limit</li>
    <li>Open position: 100</li>
    <li>Take-profit (TP) 1: 110</li>
    <li>Take-profit (TP) 2: 115</li>
    <li>Stop-loss (SL): 90</li>
  </ul>

  <p style="margin:0 0 1rem;">
    Suppose we are the signal maker and try to understand the meaning of this signal with our data vision.
  </p>

  <figure style="margin:0 0 1rem;">
    <img alt="Signal example" src="/posts/6/signal.gif" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
    <figcaption style="font-size:0.875rem;color:#6b7280;margin-top:0.5rem;">Classic signal layout</figcaption>
  </figure>

  <p style="margin:0 0 1rem;">
    Signal maker: Based on the data I collected I decided what would be the best trade for me. I don’t care what happens after I open a position because I’m so smart and predicted what could happen; I’ve already set my stop-loss and take-profit.
  </p>

  <p style="margin:0 0 1rem;">Can you see the problem behind this kind of prediction and action?</p>

  <p style="margin:0 0 1rem;">
    It’s easy to fix: evaluate the trade with new market data and be flexible to change stop-loss or take-profit while the position is still open. With this perspective, we can follow three methods:
  </p>

  <ol style="margin:0 0 1rem 1.25rem;padding:0;">
    <li>Update SL and TP every minute (the minimum timeframe).</li>
    <li>Update SL and TP on each <em>defined</em> period (not the one you’re trading).</li>
    <li>Update SL and TP on the same timeframe you’re trading.</li>
  </ol>

  <p style="margin:0 0 1rem;"><em>So, what does it mean?</em></p>

  <p style="margin:0 0 0.5rem;">Let’s consider we are trading in the 1H (1 hour) timeframe.</p>

  <blockquote style="margin:0 0 1rem;padding:0.75rem 1rem;border-left:4px solid #e5e7eb;background:#f9fafb;border-radius:8px;">
    <em>Trading in the 1H timeframe means our decision to buy and sell is based on the OHLCV in 1H.</em>
  </blockquote>

  <p style="margin:0 0 1rem;">
    1) Updating SL and TP every minute means we decide changes on 1-minute OHLCV.
  </p>

  <p style="margin:0 0 1rem;">
    2) Method 2: change TP/SL every 15 minutes (lower timeframe) or every 2 hours (higher timeframe).
  </p>

  <p style="margin:0 0 1rem;">
    3) Method 3: decide about changing TP/SL every hour by looking at the last hour’s data.
  </p>

  <figure style="margin:0 0 1rem;">
    <img alt="Problem solved illustration" src="/posts/6/problem-solved.gif" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
    <figcaption style="font-size:0.875rem;color:#6b7280;margin-top:0.5rem;">Adapting TP/SL dynamically</figcaption>
  </figure>

  <p style="margin:0 0 1rem;">
    If you’re following from the
    <a href="https://cognitrade.1des.com/posts/1-how-to-design-ml-trading-bot-part-1-data-collection" target="_blank" rel="noopener noreferrer">
      first episode
    </a>,
    you’ve seen I go for the simplest way to design and later to develop. That’s my trick to estimate an idea. You know which method we should start with!
  </p>

  <p style="margin:0 0 1rem;">
    Yes—continue with the third method: update SL and TP on the same timeframe we are trading.
  </p>

  <h3 style="font-size:1.125rem;line-height:1.35;margin:1.25rem 0 0.75rem;font-weight:700;">Machine Learning</h3>

  <p style="margin:0 0 1rem;">It’s back again. Do you remember what we’ve done so far? Let’s recap:</p>

  <ol style="margin:0 0 1rem 1.25rem;padding:0;">
    <li><a href="https://cognitrade.1des.com/posts/1-how-to-design-ml-trading-bot-part-1-data-collection" target="_blank" rel="noopener noreferrer">Data Collection</a></li>
    <li><a href="https://cognitrade.1des.com/posts/2-how-to-design-ml-trading-bot-part-2-data-analysis" target="_blank" rel="noopener noreferrer">Analyzing Data</a></li>
    <li><a href="https://cognitrade.1des.com/posts/3-how-to-design-ml-trading-bot-part-3-pattern-recognition" target="_blank" rel="noopener noreferrer">Pattern Recognition</a></li>
    <li><a href="https://cognitrade.1des.com/posts/4-how-to-design-ml-trading-bot-part-4-build-model" target="_blank" rel="noopener noreferrer">Build a Model</a></li>
    <li><a href="https://cognitrade.1des.com/posts/5-how-to-design-ml-trading-bot-part-5-running-automation" target="_blank" rel="noopener noreferrer">Running Automation</a></li>
  </ol>

  <p style="margin:0 0 1rem;">
    Bad news: we must do all these steps again. Good news: we’ve already done them, so it’s easier to redo on a smaller scale.
  </p>

  <p style="margin:0 0 1rem;">
    First, collect the last hour’s OHLCV—from the time we opened the position to the time we want to process.
  </p>

  <p style="margin:0 0 1rem;">
    Then analyze it and find proper features. A key difference now is the trade position itself—our entry becomes a key feature.
  </p>

  <p style="margin:0 0 1rem;">
    After that, find a pattern, do training/testing and backtesting.
  </p>

  <p style="margin:0 0 1rem;">Then, make a model.</p>

  <p style="margin:0 0 1rem;">
    Finally, run the bot to change SL/TP on the exchange. For example, you might cancel the old SL and place a new order for the updated SL.
  </p>

  <figure style="margin:0 0 1rem;">
    <img alt="Pattern example" src="/posts/6/pattern.gif" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
    <figcaption style="font-size:0.875rem;color:#6b7280;margin-top:0.5rem;">Pattern workflow</figcaption>
  </figure>

  <p style="margin:0 0 0.5rem;"><strong>Conclusion:</strong></p>
  <p style="margin:0 0 1rem;">
    Risk management and monitoring the position are a separate part of trading with new inputs and outputs. To reach positive results, you need to do parts 1 to 5 again. In our development season (which starts in January 2021), when we develop this part, we will go deeper and talk more about it.
  </p>
</section>
`;

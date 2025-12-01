export default `
<section aria-labelledby="prev-title" style="max-width:720px;margin:0 auto;padding:16px;line-height:1.75;font-size:16px;">

  <h2 id="prev-title" style="font-size:1.25rem;line-height:1.3;margin:0 0 1rem;font-weight:700;">
    Previously on “How to design a machine learning trading bot”
  </h2>

  <p style="margin:0 0 1rem;">
    We started with “
    <a href="https://cognitrade.1des.com/posts/1-how-to-design-ml-trading-bot-part-1-data-collection" target="_blank" rel="noopener noreferrer">
      Collecting Data
    </a>”.
  </p>

  <p style="margin:0 0 1rem;">
    We found out what OHLCV data is, and why we need both historical and online data.
  </p>

  <p style="margin:0 0 1rem;">
    Then we continued with “
    <a href="https://cognitrade.1des.com/posts/2-how-to-design-ml-trading-bot-part-2-data-analysis" target="_blank" rel="noopener noreferrer">
      Data Analysis
    </a>”.
  </p>

  <p style="margin:0 0 1rem;">
    We saw how important data cleaning and feature engineering are. To make a stable ML model, we must prepare the data correctly and visualize it to reach our goals.
  </p>

  <p style="margin:0 0 1rem;">
    Next, we explored
    <a href="https://cognitrade.1des.com/posts/3-how-to-design-ml-trading-bot-part-3-pattern-recognition" target="_blank" rel="noopener noreferrer">finding a pattern</a>
    and noted how easy it is to be “horoscopist-trapped” when searching for patterns—so we follow scientific methods like astronomers. We identified a simple pattern, “SMA20,” and discussed labeling it to [0,1].
  </p>

  <p style="margin:0 0 1rem;">
    Then we
    <a href="https://cognitrade.1des.com/posts/4-how-to-design-ml-trading-bot-part-4-build-model" target="_blank" rel="noopener noreferrer">built a model</a>.
    After building an ML model, you should evaluate it with a backtest. At this point, you need a Buy/Sell strategy—meaning we already have a signal to open a Long/Short position.
  </p>

  <p style="margin:0 0 1rem;">
    Now, it’s time to pass this signal to automation (a bot) that will buy/sell automatically.
  </p>

  <h3 style="font-size:1.125rem;line-height:1.35;margin:1.25rem 0 0.75rem;font-weight:700;">
    Step 5: Running an automation
  </h3>

  <p style="margin:0 0 1rem;">
    The automation controls buys, sells, take-profits, and stop-losses based on model signals.
  </p>

  <p style="margin:0 0 1rem;">Before building a crypto bot, let’s review a few terms.</p>

  <p style="margin:0 0 0.5rem;"><strong>Cryptocurrency Exchange:</strong></p>
  <p style="margin:0 0 1rem;">
    A cryptocurrency exchange (DCE) lets customers trade cryptocurrencies for other assets, such as fiat or other digital currencies.
    (<a href="https://en.wikipedia.org/wiki/Cryptocurrency_exchange" target="_blank" rel="noopener noreferrer">Wikipedia</a>)
  </p>

  <p style="margin:0 0 1rem;">
    For example,
    <a href="https://www.binance.com/en/register?ref=UFAWYPIS" target="_blank" rel="noopener noreferrer">Binance</a>
    is a popular exchange platform.
  </p>

  <p style="margin:0 0 1rem;">
    By registering with the following link, you may receive 10% back on commissions:
    <a href="https://www.binance.com/en/register?ref=UFAWYPIS" target="_blank" rel="noopener noreferrer">Register on Binance</a>
  </p>

  <p style="margin:0 0 0.5rem;"><strong>Spot Trading vs. Margin Trading:</strong></p>
  <p style="margin:0 0 1rem;">
    In spot trading, you buy/sell the actual crypto/fiat pair (e.g., sell BTC to receive ETH or EUR). In margin trading, you take leveraged positions on price movements; your assets may be locked as collateral. Each exchange has its own rules and protocols for margin trading.
  </p>

  <figure style="margin:0 0 1rem;">
    <img alt="Automation overview" src="/posts/5/auto-2.jpg" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
  </figure>

  <p style="margin:0 0 0.5rem;"><strong>API connections:</strong></p>
  <p style="margin:0 0 1rem;">
    Most exchanges provide secure API access, typically using two keys: <em>Public Key</em> and <em>Secret Key</em>.
    With these, you can place orders from outside the exchange.
  </p>

  <figure style="margin:0 0 1rem;">
    <img alt="API helps developers connect to the exchange" src="/posts/5/api.webp" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
  </figure>

  <p style="margin:0 0 0.5rem;"><strong>What is a crypto bot or automation?</strong></p>
  <p style="margin:0 0 1rem;">
    A crypto bot places orders on an exchange via secure APIs. Protocols vary across exchanges, and leverage (margin markets) adds complexity.
    Following our “start simple” approach, we begin with spot trading (moderate complexity). In the next season, we’ll implement a crypto bot.
  </p>

  <figure style="margin:0 0 1rem;">
    <img alt="Crypto Bot" src="/posts/5/crypto-bot.gif" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
  </figure>

  <p style="margin:0 0 0.5rem;"><strong>Actions:</strong></p>
  <p style="margin:0 0 0.5rem;">Our automation should support at least:</p>
  <ul style="margin:0 0 1rem 1.25rem;padding:0;">
    <li>Place an order in the marketplace</li>
    <li>Retrieve/query an order from the exchange</li>
    <li>Cancel an order on the exchange</li>
    <li>Get the asset’s balance on the exchange</li>
    <li>Get online prices in a marketplace</li>
  </ul>

  <p style="margin:0 0 1rem;">
    Now, let’s review the whole process from receiving a model signal to placing an order.
  </p>

  <p style="margin:0 0 1rem;">
    <em>If you need more background on the model, see the previous episode on</em>
    <a href="https://cognitrade.1des.com/posts/4-how-to-design-ml-trading-bot-part-4-build-model" target="_blank" rel="noopener noreferrer"><em>building a model</em></a><em>.</em>
  </p>

  <blockquote style="margin:0 0 1rem;padding:0.75rem 1rem;border-left:4px solid rgba(0,255,209,0.4);background:#111827;color:#e5e7eb;border-radius:8px;">
    Model output: Open a Long position on BTC/USDT
  </blockquote>

  <figure style="margin:0 0 1rem;">
    <img alt="Place an order" src="/posts/5/placeorder.gif" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
  </figure>

  <ul style="margin:0 0 1rem 1.25rem;padding:0;">
    <li><strong>Set side and type:</strong> In our example, side is “Buy” and type is “Market”. (Depending on your signal/strategy, you might use Sell/Buy and Limit/Market or advanced types like Iceberg.)</li>
  </ul>

  <ul style="margin:0 0 1rem 1.25rem;padding:0;">
    <li><strong>Set the size:</strong> You may fetch your balance and calculate size per strategy (e.g., use half of USDT to buy).</li>
  </ul>

  <ul style="margin:0 0 1rem 1.25rem;padding:0;">
    <li><strong>Place your order:</strong> You now know side, type, and size—submit the order.</li>
  </ul>

  <ul style="margin:0 0 1rem 1.25rem;padding:0;">
    <li><strong>Retrieve your order:</strong> Check fill status. Orders can be filled in multiple trades at different prices.</li>
  </ul>

  <figure style="margin:0 0 1rem;">
    <img alt="Keep calm!" src="/posts/5/keepcalm.gif" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
  </figure>

  <ul style="margin:0 0 1rem 1.25rem;padding:0;">
    <li><strong>Place Stop-loss order:</strong> If your signal includes TP/SL, spot trading may block assets when placing TP/SL simultaneously. (This issue typically doesn’t exist in margin trading.) If SL is provided, place an SL order.</li>
  </ul>

  <ul style="margin:0 0 1rem 1.25rem;padding:0;">
    <li><strong>Cancel order:</strong> Be ready to cancel any order (e.g., cancel SL to place a TP).</li>
  </ul>

  <p style="margin:0 0 0.5rem;"><strong>Conclusion:</strong></p>
  <p style="margin:0 0 1rem;">
    Automation complexity depends on the exchange and its APIs. Prefer well-documented exchanges with solid support.
    There are libraries that unify connections to multiple exchanges. In the next season (automation development), we’ll cover how to use them.
  </p>

  <p style="margin:0 0 1rem;">
    Want a secure, comfortable way to connect your exchange to intelligent automation? Try
    <a href="https://1des.com/" target="_blank" rel="noopener noreferrer">1DES</a>.
  </p>

</section>
`;

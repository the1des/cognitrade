export default `
<section aria-labelledby="ml-model-title" style="max-width:720px;margin:0 auto;padding:16px;line-height:1.75;font-size:16px;">

  <h2 id="ml-model-title" style="font-size:1.25rem;line-height:1.3;margin:0 0 1rem;font-weight:700;">
    Previously on “How to design a machine learning trading bot”
  </h2>

  <p style="margin:0 0 1rem;">
    We started with “
    <a href="https://cognitrade.1des.com/posts/1-how-to-design-ml-trading-bot-part-1-data-collection" target="_blank" rel="noopener noreferrer">
      Collecting Data
    </a>”.
  </p>

  <p style="margin:0 0 1rem;">
    We learned what OHLCV data is, and why both historical and online data are essential.
  </p>

  <p style="margin:0 0 1rem;">
    Then we continued with “
    <a href="https://cognitrade.1des.com/posts/2-how-to-design-ml-trading-bot-part-2-data-analysis" target="_blank" rel="noopener noreferrer">
      Data Analysis
    </a>”.
  </p>

  <p style="margin:0 0 1rem;">
    We saw how critical data cleaning and feature engineering are. To build a stable ML model, we must prepare data correctly and use visualization to better reach our goals.
  </p>

  <p style="margin:0 0 1rem;">
    Then we moved to
    <a href="https://cognitrade.1des.com/posts/3-how-to-design-ml-trading-bot-part-3-pattern-recognition" target="_blank" rel="noopener noreferrer">pattern recognition</a>:
  </p>

  <p style="margin:0 0 1rem;">
    We noted that you can easily fall into the trap of seeing patterns where none exist—like a horoscopist—so you must follow scientific methods like an astronomer. We identified a simple pattern, “SMA20,” and discussed labeling them to [0,1].
  </p>

  <p style="margin:0 0 1rem;">
    Now, it’s time to build a model. As always, remember: in this season we design; in the next season, we will develop.
  </p>

  <blockquote style="margin:0 0 1rem;padding:0.75rem 1rem;border-left:4px solid #e5e7eb;background:#f9fafb;border-radius:8px;">
    <em>You should always design your pipeline on paper or in your mind before development. That’s the method I follow—and it works for me ;)</em>
  </blockquote>

  <figure style="margin:0 0 1rem;">
    <img alt="It Works!" src="/posts/4/works.gif" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
  </figure>

  <h3 style="font-size:1.125rem;line-height:1.35;margin:1.25rem 0 0.75rem;font-weight:700;">
    Step 4: Building a Model Based on the Determined Pattern
  </h3>

  <p style="margin:0 0 1rem;">Let’s look at the data format we have at this moment:</p>

  <p style="margin:0 0 1rem;">We have OHLCV plus SMA20 and a target column, like this:</p>

  <figure style="margin:0 0 1rem;">
    <img alt="Sample dataset with OHLCV and SMA20" src="/posts/4/How_to_design_p4_sample1.png" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
    <figcaption style="font-size:0.875rem;color:#6b7280;margin-top:0.5rem;">
      Source:
      <a href="https://gist.github.com/25mordad/64a39ecc0ef71140140251b61db93572" target="_blank" rel="noopener noreferrer">
        GitHub Gist
      </a>
    </figcaption>
  </figure>

  <h3 style="font-size:1.125rem;line-height:1.35;margin:1.25rem 0 0.75rem;font-weight:700;">Machine Learning</h3>

  <p style="margin:0 0 1rem;">
    At this step, machine learning helps us build a model. The main question is: how? Let’s quickly review how ML classification techniques work:
  </p>

  <figure style="margin:0 0 1rem;">
    <img alt="Building ML Model process" src="/posts/4/build-model.png" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
  </figure>

  <p style="margin:0 0 1rem;">
    First, the machine receives labeled data (which we already prepared).
  </p>
  <p style="margin:0 0 1rem;">
    Then, by splitting the data into training and testing sets, the model learns from the training data.
  </p>
  <p style="margin:0 0 1rem;">
    Finally, we test on the test dataset to see if the model fits well.
  </p>

  <blockquote style="margin:0 0 1rem;padding:0.75rem 1rem;border-left:4px solid #e5e7eb;background:#f9fafb;border-radius:8px;">
    <em>This is a simplified version—the real process is a bit more complex.</em>
  </blockquote>

  <p style="margin:0 0 1rem;">
    In many fields, reaching a working model would be the end. But in finance and trading, it isn’t. We still need to perform <strong>Backtesting</strong>.
  </p>

  <h3 style="font-size:1.125rem;line-height:1.35;margin:1.25rem 0 0.75rem;font-weight:700;">Backtesting</h3>

  <p style="margin:0 0 1rem;">
    At this point, we define a Buy/Sell strategy. For example, with SMA20:
  </p>
  <ul style="margin:0 0 1rem 1.25rem;padding:0;">
    <li>The first time we see a label [1], open a Long position (Buy).</li>
    <li>If in a Long position, close it as soon as we see label [0].</li>
  </ul>

  <p style="margin:0 0 1rem;">
    If this sounds abstract, look at the following data. It shows when we opened and closed long positions:
  </p>

  <figure style="margin:0 0 1rem;">
    <img alt="Trading signals example" src="/posts/4/How_to_design_p4_sample2.png" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
    <figcaption style="font-size:0.875rem;color:#6b7280;margin-top:0.5rem;">
      Source:
      <a href="https://gist.github.com/25mordad/511f39f7cb15260736248ce261008a0f" target="_blank" rel="noopener noreferrer">
        GitHub Gist
      </a>
    </figcaption>
  </figure>

  <h3 style="font-size:1.125rem;line-height:1.35;margin:1.25rem 0 0.75rem;font-weight:700;">Conclusion</h3>

  <p style="margin:0 0 1rem;">
    A trading model is a package of machine learning methods plus backtesting. Sometimes, adding extra rules to predictions improves performance.
  </p>

  <p style="margin:0 0 1rem;">
    From my perspective, a complete model includes both Long and Short strategies. That usually means having two ML models: one for Long positions, one for Short. Here, creativity helps you design a comprehensive model.
  </p>

  <figure style="margin:0 0 1rem;">
    <img alt="Trading models concept" src="/posts/4/models.jpg" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
  </figure>

</section>
`;

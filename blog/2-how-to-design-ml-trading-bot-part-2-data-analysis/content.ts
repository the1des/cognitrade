export default `
<section aria-labelledby="data-analysis-title" style="max-width:720px;margin:0 auto;padding:16px;line-height:1.75;font-size:16px;">

  <h2 style="font-size:1.25rem;line-height:1.3;margin:0 0 1rem;font-weight:700;">
    Previously on “How to design a machine learning trading bot”
  </h2>

  <p style="margin:0 0 1rem;">
    We have started with
    “<a href="https://cognitrade.1des.com/posts/1-how-to-design-ml-trading-bot-part-1-data-collection" target="_blank" rel="noopener noreferrer">Collecting Data</a>”.
  </p>

  <p style="margin:0 0 1rem;">
    We found out what OHLCV data is, and we learned why we need both historical and online data.
  </p>

  <blockquote style="margin:0 0 1.25rem;padding:0.75rem 1rem;border-left:4px solid #e5e7eb;background:#f9fafb;border-radius:8px;">
    In this part, we dive into the process of preparing and transforming raw financial data into clean, structured input ready for machine learning models—a crucial step that determines the accuracy and reliability of your trading bot.
  </blockquote>

  <p style="margin:0 0 1rem;">
    So, let’s start the second step, considering we already collected the data and have it.
  </p>

  <p style="margin:0 0 1rem;">
    This article is the second episode in the series <em>“How to design a machine learning trading bot”</em>.
  </p>

  <h2 id="data-analysis-title" style="font-size:1.25rem;line-height:1.3;margin:1.25rem 0 0.75rem;font-weight:700;">
    Step 2: Data Analysis
  </h2>

  <!-- Responsive YouTube embed -->
  <div data-oembed-url="https://www.youtube.com/watch?v=uMa7_umV5fI" style="position:relative;width:100%;padding-bottom:56.25%;margin:0 0 1.25rem;">
    <iframe
      src="https://www.youtube.com/embed/uMa7_umV5fI?rel=0"
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      loading="lazy"
      style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;">
    </iframe>
  </div>

  <p style="margin:0 0 1rem;">
    Cleaning data, filtering, and feature engineering are essential steps in any machine learning approach.
  </p>

  <p style="margin:0 0 1rem;">
    To explain its importance: imagine splitting development time into ten frames—“Analyzing Data” alone should take five of them. You are working with historical data to provide a structured, usable version for the machine.
  </p>

  <p style="margin:0 0 1rem;">
    Think of this as nutrition for machines: if you feed them with healthy, high-quality data, they perform well. If you feed poor-quality data, even the most powerful machine in the world won’t work properly.
  </p>

  <p style="margin:0 0 1rem;">
    If you have a mathematics or statistics background, this section will feel natural. But if not—don’t worry! Basic knowledge is enough to reach your goals.
  </p>

  <figure style="margin:0 0 1.25rem;">
    <img alt="Visualizing Data" src="/posts/2/how-to-design-machine-learning-trading-bot-p2-data-analysis.png" loading="lazy"
         style="display:block;width:100%;height:auto;border-radius:12px;" />
    <figcaption style="font-size:0.875rem;color:#6b7280;margin-top:0.5rem;">Visualizing Data</figcaption>
  </figure>

  <h2 style="font-size:1.125rem;line-height:1.35;margin:1.25rem 0 0.75rem;font-weight:700;">
    Visualizing Data
  </h2>

  <p style="margin:0 0 1rem;">
    Visualization makes data easier to understand and analyze. At this stage, you’ll work with plots and charts to spot insights that raw numbers can hide.
  </p>

  <h2 style="font-size:1.125rem;line-height:1.35;margin:1.25rem 0 0.75rem;font-weight:700;">
    Key Data Analysis Terminology
  </h2>

  <p style="margin:0 0 1rem;">
    Two key terms in data analysis you must know before going further: <strong>Labels</strong> and <strong>Features</strong>.
  </p>

  <p style="margin:0 0 1.25rem;">
    For a detailed explanation, see the
    <a href="https://developers.google.com/machine-learning/crash-course/framing/ml-terminology" target="_blank" rel="noopener noreferrer">
      Google Machine Learning Crash Course
    </a>.
  </p>

  <h2 style="font-size:1.125rem;line-height:1.35;margin:1.25rem 0 0.75rem;font-weight:700;">
    Last but not least
  </h2>

  <p style="margin:0 0 1rem;">
    Many ML tutorials provide pre-prepared datasets, so you start straight with training. But in reality, data is rarely ready-made—you must prepare it yourself. Keep in mind that resources and references can be limited.
  </p>

  <p style="margin:0 0 1rem;">
    In our next season (development), we will cover how to do <strong>feature engineering</strong> on OHLCV data to prepare it for training.
  </p>

</section>
`;

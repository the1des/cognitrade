export default `
<div class="prose prose-invert max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-100">

  <p>
    Imagine having a system that not only understands your requests, but also processes data, generates reports, and writes social media posts—autonomously.
    At <strong>1des</strong>, we use <strong>AG2 (AutoGen)</strong> to power such intelligent systems using AI agents. In this article, we’ll show you how to build one from scratch using Python.
  </p>

  <p>
    Whether you're handling financial trades, automating data analysis, or building a notification pipeline, <strong>AG2</strong> enables you to coordinate multiple AI agents working collaboratively to get the job done.
  </p>

  <hr class="my-12 border-gray-700" />

  <h2 class="text-2xl font-bold">🔍 What is AG2 (AutoGen)?</h2>

  <p>
    <strong>AG2</strong>, also known as <strong>AutoGen</strong>, is a powerful framework for building <strong>multi-agent systems</strong> (MAS).
    In a MAS, multiple AI agents operate <strong>autonomously</strong>, yet <strong>collaboratively</strong>, to complete complex tasks.
    Each agent specializes in something and communicates with others to share progress or request help.
  </p>

  <p>Key concepts in AG2:</p>

  <ul class="list-disc list-inside space-y-2">
    <li><strong>Assistant Agents</strong>: Handle task execution (e.g., GPT-4 text generation, analysis).</li>
    <li><strong>User Proxy Agents</strong>: Mediate between user and assistants, making interaction seamless.</li>
    <li><strong>Communication</strong>: Agents can talk to each other to coordinate complex workflows.</li>
  </ul>

  <hr class="my-12 border-gray-700" />

  <h2 class="text-2xl font-bold">⚙️ How AG2 Powers Automation at 1des</h2>

  <p>
    At <strong>1des</strong>, we automate repetitive or high-effort processes using AG2.
    A common use case is <strong>automated trade reporting</strong>: when a crypto trade is closed, we generate a report, a tweet, a Telegram update, and a chart — all without human intervention.
  </p>

  <p>Let’s walk you through how this works using a complete Python example.</p>

  <hr class="my-12 border-gray-700" />

  <h2 class="text-2xl font-bold">🧪 Real-World Example: Trade Report Automation with AG2</h2>

  <h3 class="text-xl font-semibold">✅ What it Does</h3>

  <ul class="list-disc list-inside space-y-2">
    <li>Takes in trade details.</li>
    <li>Uses AG2 agents to generate:
      <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
        <li>A human-readable report</li>
        <li>A price movement chart</li>
        <li>A tweet-style summary</li>
        <li>A Telegram-ready message</li>
      </ul>
    </li>
  </ul>

  <hr class="my-12 border-gray-700" />

  <h2 class="text-2xl font-bold">💻 Full Code: AG2-Based Automation Pipeline</h2>

  <div class="overflow-x-auto bg-gray-900 text-sm text-white font-mono p-4 rounded-lg my-6 border border-gray-700">
<pre><code>import matplotlib.pyplot as plt
from datetime import datetime
import autogen
from autogen import config_list_from_json, AssistantAgent

def generate_report_with_assistant(trade_details):
    config_list = config_list_from_json(env_or_file="OAI_CONFIG_LIST")
    assistant = AssistantAgent(name="report_writer", llm_config={"config_list": config_list})

    input_text = "\\n".join([f"- {k}: {v}" for k, v in trade_details.items()])
    message = f"Generate a comprehensive market analysis report from the following trade details:\\n{input_text}"

    result = assistant.run(
        message=message,
        tools=assistant.tools,
        max_turns=2,
        user_input=False,
        summary_method="reflection_with_llm"
    )
    return result.summary

def plot_trade_prices(trade_details):
    open_time = datetime.strptime(trade_details["Open Time"], "%Y-%m-%d %H:%M:%S")
    close_time = datetime.strptime(trade_details["Close Time"], "%Y-%m-%d %H:%M:%S")
    open_price = float(trade_details["Open Price"])
    close_price = float(trade_details["Close Price"])

    times = [open_time, close_time]
    prices = [open_price, close_price]

    plt.figure(figsize=(10, 6))
    plt.plot(times, prices, marker='o', color='b', linestyle='-', linewidth=2, markersize=8)
    plt.axhline(y=float(trade_details["Stop Loss Price"]), color='r', linestyle='--', label='Stop Loss')
    plt.axhline(y=float(trade_details["Take Profit Price"]), color='g', linestyle='--', label='Take Profit')
    plt.title(f"Trade Price Movement for {trade_details['Market']}")
    plt.xlabel('Time')
    plt.ylabel('Price')
    plt.legend()
    plt.grid(True)
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig("trade_price_movement.png")
    print("✅ Plot saved as trade_price_movement.png")

def generate_tweet_from_assistant(report):
    config_list = config_list_from_json(env_or_file="OAI_CONFIG_LIST")
    assistant = AssistantAgent(name="tweet_writer", llm_config={"config_list": config_list})
    tweet = assistant.run(
        message=f"Convert this report into a concise tweet:\\n{report}",
        tools=assistant.tools,
        max_turns=2,
        user_input=False,
        summary_method="reflection_with_llm"
    )
    return tweet.summary

def generate_telegram_message_from_assistant(report):
    config_list = config_list_from_json(env_or_file="OAI_CONFIG_LIST")
    assistant = AssistantAgent(name="telegram_writer", llm_config={"config_list": config_list})
    telegram = assistant.run(
        message=f"Convert this report into a concise Telegram message:\\n{report}",
        tools=assistant.tools,
        max_turns=2,
        user_input=False,
        summary_method="reflection_with_llm"
    )
    return telegram.summary

def main():
    trade_details = {
        "Product": "badalona",
        "Trader": "badalona_long",
        "Market": "BTCUSDT",
        "Side": "Long",
        "Open Time": "2025-04-07 15:00:00",
        "Open Price": "79033.11",
        "Stop Loss Price": "78479.88",
        "Take Profit Price": "81404.1",
        "Close Time": "2025-04-07 15:08:02",
        "Close Price": "78430.48",
        "Closed by Stop Loss": "Yes",
        "Profited": "No",
        "Profit / Loss": "-0.76%",
        "Signal ID": "31"
    }

    print("📄 Generating Report...")
    report = generate_report_with_assistant(trade_details)
    print("\\n--- Generated Report ---\\n", report)

    print("\\n📊 Generating Chart...")
    plot_trade_prices(trade_details)

    print("\\n🐦 Generating Tweet...")
    tweet = generate_tweet_from_assistant(report)
    print("\\n--- Tweet ---\\n", tweet)

    print("\\n📣 Generating Telegram Message...")
    telegram = generate_telegram_message_from_assistant(report)
    print("\\n--- Telegram Message ---\\n", telegram)

if __name__ == "__main__":
    main()
</code></pre>
  </div>

  <hr class="my-12 border-gray-700" />

  <h2 class="text-2xl font-bold">📌 Outcome</h2>
  <div class="my-8">
    <img class="w-full h-auto rounded-xl shadow-md" src="/posts/21/ag2-multi-agent-automation.jpg" alt="AG2 Diagram">
  </div>
  <p>By combining multiple assistant agents, you now have:</p>

  <ul class="list-disc list-inside space-y-2">
    <li>A full automation pipeline.</li>
    <li>Modular AI-driven components.</li>
    <li>Real-time reporting and publishing capability.</li>
  </ul>

  <p>You can easily extend this to:</p>

  <ul class="list-disc list-inside space-y-2">
    <li>Publish to Telegram or X (Twitter) using their APIs.</li>
    <li>Monitor trading bots in real-time.</li>
    <li>Trigger alerts or daily digests.</li>
  </ul>

  <hr class="my-12 border-gray-700" />

  <h2 class="text-2xl font-bold">🧠 Final Thoughts</h2>

  <p>
    AG2 makes it incredibly easy to build systems where <strong>AI agents work together</strong>—each doing its part, sharing context, and coordinating in real time.
  </p>

  <p>At <strong>1des</strong>, AG2 helps us:</p>

  <ul class="list-disc list-inside space-y-2">
    <li>Reduce human error.</li>
    <li>Save development and operational time.</li>
    <li>Stay agile in rapidly changing environments.</li>
  </ul>

  <p>If you're building intelligent automation tools, <strong>multi-agent systems</strong> using AG2 can be a game changer.</p>

</div>
`

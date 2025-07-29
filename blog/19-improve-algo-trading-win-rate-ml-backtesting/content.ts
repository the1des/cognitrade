export default `
<div class="prose prose-invert max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-100">

  <p><strong>Previously on &quot;How to Enhance Algo Trading Win Rate with ML&quot;:</strong></p>
  <p>Before moving forward, it is recommended to review the previous parts of this series in order to optimize your understanding and coding performance:</p>

  <ol>
    <li><a href="https://cognitrade.1des.com/posts/13-enhance-algo-trading-win-rate-ml-part-3-training">How to Enhance Algo Trading Win Rate with ML: Labelling Data</a></li>
    <li><a href="https://cognitrade.1des.com/posts/11-enhance-algo-trading-win-rate-ml-part-2-feature-selection">How to Enhance Algo Trading Win Rate with ML: Feature Selection</a></li>
    <li><a href="https://cognitrade.1des.com/posts/10-enhance-algo-trading-win-rate-ml-part-1-labelling-data">How to improve algorithmic trading's win rate by machine learning: Training</a></li>
  </ol>

  <p>The first article covered the topic of data labeling using the SMA crossover strategy and the manual adjustment of labels, aiming to improve the quality of input data for our machine-learning model.</p>

  <p>The second article focused on analyzing the diversity and reliability of our features and conducting a comparative study to identify the most optimal features for our training phase.</p>

  <p>Within the third article, we divided our data into two parts based on long and short labels. Furthermore, we utilized the TensorFlow and Keras libraries for training two neural network models for each of them.</p>

  <p>In this article, our initial step involves utilizing our models to make predictions on our prediction dataset. Subsequently, we will employ the backtesting library to compare the outcomes of trading with machine-learning-generated labels against the actual results we would have obtained by solely employing the crossover strategy.</p>

  <h2>Part 4: Prediction</h2>

  <p>In a classification neural network, predicting new data involves feeding the input data into the trained model and obtaining the corresponding output class or label.</p>
  <p>As the data propagates through the network, it undergoes a series of transformations, with each layer extracting and refining different features. The final layer of the neural network typically outputs a probability distribution over the different labels. The predicted label is the one with the highest probability.</p>
  <p>During the prediction phase, the neural network applies the learned weights and biases to the input data, performs the necessary computations, and generates the predicted label for the new data point. This process allows the classification neural network to generalize its learning from the training data to make predictions on unseen data.</p>
  <p>Our experiment will be implemented in the &quot;Jupyterlab&quot; environment. Clone the <a href="https://github.com/the1des/improve_algorithmic_trading_ml">improve_algorithmic_trading_ml</a> repository and run the <a href="https://github.com/the1des/improve_algorithmic_trading_ml/blob/main/4-prediction.ipynb">4-prediction.ipynb</a> for a better understanding.</p>

  <p><strong>Block [1-4]</strong></p>
  <p>To initiate the prediction process, we will import the pre-constructed dataset and remove any redundant columns to prepare it for prediction.</p>
  <div class="my-6">
    <img src="/posts/19/dataframe.jpg" alt="Prediction Dataframe" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p><strong>Block [5-10]</strong></p>
  <p>Before utilizing our trained model to predict labels, it is essential to preprocess our data. This involves creating a TensorFlow dataset from our dataframe. To accomplish this, we define a function called &quot;df_to_dataset&quot; that accepts a pandas dataframe as an input. This function also takes additional parameters such as shuffle (to randomly shuffle the data), batch_size (to specify the size of each batch in the dataset), and trg (to determine whether the target is &quot;long&quot; or &quot;short&quot;).</p>
  <p>Following that, we proceed to adjust our numeric and bucketized features accordingly. The bucketized features are modified using the boundaries that were generated during the training phase and saved in a separate file, which we utilize in this context. Lastly, we establish respective feature layers for the long and short datasets.</p>
  <p>For more comprehensive guidance on creating a TensorFlow feature layer, we recommend referring to our previous article, where we delve into the topic in greater detail.</p>
  <div class="my-6">
    <img src="/posts/19/feature-layer.jpg" alt="Feature Layer" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p><strong>Block [11-17]</strong></p>
  <p>In order to do the predictions we first import our models that were trained before which in our case are “crossover_long_model” and “crossover_short_model”. The <code>load_weights</code> method is then used to load the weights from the specified file paths. By loading the saved weights, the models are restored to their previously trained state, enabling them to make predictions on new data.</p>
  <p>Next, we apply the <code>evaluate</code> method to each model with their respective prediction dataset. This method computes the loss and metric values (in this case, the mean absolute error) by comparing the predictions made by the models with the actual labels present in the prediction dataset.</p>
  <p>Finally, the models are employed to make predictions on the prediction datasets. The <code>predict</code> method is used with each model and their respective prediction dataset. This generates the predicted values for the long and short targets, stored in the “predicted_long” and “predicted_short” variables, respectively.</p>
  <div class="my-6">
    <img src="/posts/19/evaluate-predict.jpg" alt="Evaluate and Predict" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p><strong>Block [18-23]</strong></p>
  <p>Now that the prediction variables are set we need to add the predicted labels to our dataframe to prepare it for our backtesting phase.</p>
  <p>We first create a “predicted” dataframe which is a copy of our source dataframe which was initiated for prediction purposes and add two columns "probability_long" and "probability_short" containing the respective probabilities obtained from the model prediction.</p>
  <p>The next step involves populating the "predicted_long" and "predicted_short" columns with the final predicted labels. This is achieved using the <code>np.select</code> method, which allows for the conditional assignment of values. If the probability value in the "probability_long" column is greater than 0.5, the corresponding "predicted_long" value is set to 1; otherwise, it is set to 0. The same process is applied to the "probability_short" column, resulting in the assignment of predicted labels for both the long and short targets.</p>
  <p>In addition, we generate a visual representation of a portion of the predicted dataframe to gain insights into the labeling of the data and obtain a clearer understanding of the accuracy of our model, and then save the dataframe for future use.</p>
  <div class="my-6">
    <img src="/posts/19/predicted-labels.png" alt="Predicted Labels" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <h2>Part 5: Backtesting</h2>
  <p>Backtesting in trading refers to the process of evaluating a trading strategy or system using historical data to assess its performance and potential profitability. It involves simulating trades based on specific rules and analyzing the results to gain insights into how the strategy would have performed in the past.</p>
  <p>Having covered all the necessary steps, the primary objective of this series of articles was to assess whether machine learning can enhance the win rate of algorithmic trading. With this in mind, the time has come to compare the predictions derived from machine learning with those obtained through the crossover algorithm.</p>
  <p>Our experiment will be implemented in the &quot;Jupyterlab&quot; environment. Clone the <a href="https://github.com/the1des/improve_algorithmic_trading_ml">improve_algorithmic_trading_ml</a> repository and run the <a href="https://github.com/the1des/improve_algorithmic_trading_ml/blob/main/5-backtesting.ipynb">5-backtesting.ipynb</a> for a better understanding.</p>

  <p><strong>Block [1-6]</strong></p>
  <p>The <a href="https://pypi.org/project/Backtesting/">Backtesting</a> library we use here provides a class called Strategy which empowers users to customize their own trading strategies for initiating and terminating long and short positions. Our specific strategy involves opening long positions upon reaching a "bull" target and closing them when a "bear" threshold is attained. Conversely, for short positions, the opposite holds true.</p>
  <div class="my-6">
    <img src="/posts/19/backtest-strategy.jpg" alt="Backtest Strategy" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p>The next step is importing the 3 different sets of dataframes we have made before as follows:</p>
  <ul>
    <li>predicted_df: The dataframe with the labels predicted by our machine learning model.</li>
    <li>labeled_df: The dataframe with the labels solely provided by the SMA crossover algorithm.</li>
    <li>corrected_df: The dataframe whose labels have been corrected manually after being labeled by the crossover algorithm to reach the 100% win rate.</li>
  </ul>

  <p><strong>Block [7-11]</strong></p>
  <p>To facilitate result comparison, we proceed by defining the "bull" and "bear" columns in each respective dataframe, aligning with the labeling strategy employed for each dataset. For instance, in our labeled dataFrame, the labels are derived solely from the crossover strategy. However, in our predicted dataframe, we employ the labels generated by our machine-learning model. By adopting this approach, we eliminate the need to modify our backtesting strategy whenever there are changes to our labeling methodology.</p>
  <div class="my-6">
    <img src="/posts/19/define-bull-bear.jpg" alt="Define Bull and Bear" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p>Finally, we proceed by isolating a specific segment of data encompassing the same start and end dates across all the dataframes. This uniform time frame ensures consistency in evaluating the backtest results. In our case, we select a 3-month period for this purpose. Subsequently, we initiate the backtests on these isolated dataframes, employing identical conditions across all of them. By conducting the backtests under the same parameters, we can effectively compare and assess their respective outcomes.</p>
  <div class="my-6">
    <img src="/posts/19/prediction-backtest.jpg" alt="Prediction Backtest" class="w-full h-auto rounded-xl shadow-md" />
  </div>

  <p>Upon comparison of the outcomes, we observe that our predicted labels yield a win rate of 45.07%, while the win rate of our crossover strategy labels stands at 37.81%. Although the improvement brought about by machine learning may not be substantial, it is evident that it has positively impacted our win rate. Despite the relatively modest increase, this outcome signifies the potential for leveraging machine learning techniques to enhance the effectiveness of our trading strategies.</p>

  <p>It is important to note that the experiment began with a basic SMA crossover strategy. Through the utilization of efficient feature selection methods and training a neural network model, we aimed to improve the overall performance. It is worth mentioning that exploring alternative algorithms, making adjustments to feature selection, and refining the model training process can potentially yield significantly more profitable outcomes. This experiment serves as a starting point, demonstrating the potential for further exploration and refinement in pursuit of maximizing trading profitability.</p>

</div>
`;

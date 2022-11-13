## Machine_Learning README

John:
- Neural networking models and predictions ending with XGBoost modeling of original merged set
- XGBoost modeling of revised percap set
- Lasso vs SVM modeling and predictions
- Polyfit_linear_regression_variety modeling and predictions
- Preliminary Forecasting 


preliminary data preprocessing ML input files:

* neural_networking_merged_set.ipynb
   * mega_merged.csv
      * Created with multiple Drug Overdose data tables from the CDC
      * Created with multiple Cannabis use data tables from the SAMHSA
* XGBoost_revised_percap_set.ipynb
   * revised_percap_data_with_predictions.csv
      * Created with multiple Drug Overdose data tables from the CDC
      * Created with multiple Cannabis use data tables from the SAMHSA
      * Created with Opioid data from KFF

Description of preliminary feature engineering and preliminary feature selection, including decision-making process: 

* neural_networking_merged_set.ipynb
   * Label encoded State feature for ML use and sorted year in descending order to allow clear prediction of opioid deaths for the years 2019 and 2020
      * Dropped first 7 rows of dataset as US totals are offputting to machine learning
      * Label encoded the State column
      * Sorted data based on Year feature
      * Reset index
      * Dropped old index
      * Normalized keras layer is utilized for two of the four NN models
* XGBoost_revised_percap_set.ipynb
   * Label encoded State feature for ML use and prepared features to be in proper numerical format
      * Reset index
      * Label encoded the State column
      * Stripped percentage and returned to standard numerical form for all percentage columns
      * Stripped commas from all features containing commas
      * Converted the columns with commas stripped to int
* SVM_Lasso_merged_set.ipynb 
   * Dropped unnecessary rows and label encoded
      * Dropped first 7 rows of dataset as US totals are offputting to machine learning
      * Label encoded the State column
* Polyfit_linear_regression_variety_merged_set.ipynb
   * Dropped unnecessary rows, label encoded, and standard scaler is applied after train test split
      * Dropped first 7 rows of dataset as US totals are offputting to machine learning
      * Label encoded the State column
      * Standard Scaling is applied after Train test split passing the first two models

Description of how data was split into training and testing sets:

* neural_networking_merged_set.ipynb
   * Split into one shuffled train_dataset at 80% and one shuffled test_dataset at 20% 
   * Copied each dataset
   * Removed dependant variable from each train and test set
   * Keras normilization layer adaptation of train set for full set normalizer implimentation
   * Keras normilization layer adaptation of train set feature 'Number of Cannabis Users' for cannabis_use_normalizer implimentation
\\\ XGBoost modeling
   * Dependant variable y is defined as the data feature 'Number of Opioid deaths' 
   * Independant variable(s) X is defined as all features that don't include 'Number of Opioid deaths' 
   * Train test split is instantiated with a test size of 29.3% and a train size of 70.7% and left unshuffled for a clear output of years 2019 and 2020
* XGBoost_revised_percap_set.ipynb   
   * Dependant variable y is defined as the data feature 'Number of Opioid deaths' 
   * Independant variable(s) X is defined as all features that don't include 'Number of Opioid deaths' 
   * Train test split is instantiated with a test size of 28.5% and a train size of 71.5% and left unshuffled for a clear output of years 2019 and 2020
* SVM_Lasso_merged_set.ipynb 
   * Dependant variable y is defined as the data feature 'Number of Opioid deaths' 
   * Independant variable(s) X is defined as all features that don't include 'Number of Opioid deaths' 
   * Train test split is instantiated with a test size of 25% and a train size of 75%
* Polyfit_linear_regression_variety_merged_set.ipynb
   * Dependant variable y is defined as the data feature 'Number of Opioid deaths' 
   * Independant variable(s) X is defined as all features that don't include 'Number of Opioid deaths' 
   * Train test split is instantiated with a test size of 20% and a train size of 80%

Explanation of model choice, including limitations and benefits:

* neural_networking_merged_set.ipynb
   *
* XGBoost_revised_percap_set.ipynb
   * 
* SVM_Lasso_merged_set.ipynb 
   *
* Polyfit_linear_regression_variety_merged_set.ipynb
   *


Output Files:

* neural_networking_merged_set.ipynb
   * mega_merged_with_predictions.csv
* XGBoost_revised_percap_set.ipynb
   * revised_percap_data_with_predictions.csv



Results:

The best model performance for this project's small datasets goes to XGBoost for delivering the most ideal results of prediction differences, MAE scores, and RMSE scores. XGBoost metrics conclude after 500 epochs of training resulting in a Mean Absolute Error of about 17 and a Root Mean Square Error of about 40.

![alt text](Resources/XGBoost_score_improvement.PNG) 

The Predictions (red) against actual (blue) show the best performer for small datasets, XGBoost, deliver the most accurate outcomes.

![alt text](Resources/predictions_against_actual_plot.PNG) 
    
import React, { useState } from "react";
import ModelDropdown from "./components/ModelDropdown";
import FeatureInput from "./components/FeatureInput";
import PredictButton from "./components/PredictButton";

const App = () => {
    const [model, setModel] = useState("Logistic Regression");
    const [features, setFeatures] = useState({
        CreditScore: "",
        Geography: "",
        Gender: "",
        Age: "",
        Tenure: "",
        Balance: "",
        NumOfProducts: "",
        HasCrCard: "",
        IsActiveMember: "",
        EstimatedSalary: "",
    });
    const [prediction, setPrediction] = useState(null);

    const handlePredict = async () => {
        try {
            const response = await fetch("https://your-backend-url/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ model, features }),
            });
            const data = await response.json();
            if (data.error) {
                alert(`Error: ${data.error}`);
            } else {
                setPrediction(data.prediction);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
      <div className="min-h-screen bg-black text-gray-200 p-8">
          <div className="max-w-5xl mx-auto p-6 bg-black rounded-md shadow-lg border border-gray-800">
              <h1 className="text-3xl font-semibold mb-6 text-center">Customer Churn Prediction</h1>
              <ModelDropdown model={model} setModel={setModel} />
              <FeatureInput features={features} setFeatures={setFeatures} />
              <div className="mt-8 text-center">
                  <PredictButton handlePredict={handlePredict} />
              </div>
              {prediction && (
                  <div className="mt-8 p-4 bg-gray-800 rounded-md border border-gray-700">
                      <p className="text-lg font-medium mb-2">Prediction Result:</p>
                      <p className="text-lg">{JSON.stringify(prediction)}</p>
                  </div>
              )}
          </div>
      </div>
  );
};

export default App;

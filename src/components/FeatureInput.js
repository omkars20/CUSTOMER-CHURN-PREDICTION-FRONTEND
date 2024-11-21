import React from "react";

const FeatureInput = ({ features, setFeatures }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFeatures((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Define placeholder hints for each feature
    const placeholders = {
        CreditScore: "Enter credit score (e.g., 600)",
        Geography: "Enter geography (e.g., France, Germany, Spain)",
        Gender: "Enter gender (e.g., Male, Female)",
        Age: "Enter age (e.g., 35)",
        Tenure: "Enter tenure (e.g., 5)",
        Balance: "Enter balance (e.g., 120000)",
        NumOfProducts: "Enter number of products (e.g., 2)",
        HasCrCard: "Has credit card? (0 or 1)",
        IsActiveMember: "Is active member? (0 or 1)",
        EstimatedSalary: "Enter estimated salary (e.g., 50000)",
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            {Object.keys(features).map((feature) => (
                <div key={feature}>
                    <label className="block mb-1 text-sm font-medium text-gray-100 ">
                        {feature}:
                    </label>
                    <input
    type="text"
    name={feature}
    value={features[feature]}
    onChange={handleInputChange}
    placeholder={placeholders[feature]} // Add the placeholder here
    className="w-full px-4 py-2 text-gray-200 bg-black border border-gray-600 rounded-md hover:border-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none placeholder-gray-400 placeholder-opacity-20"
/>
                </div>
            ))}
        </div>
    );
};

export default FeatureInput;

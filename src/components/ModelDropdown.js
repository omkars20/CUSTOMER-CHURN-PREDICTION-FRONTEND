import React from "react";

const ModelDropdown = ({ model, setModel }) => {
    const models = ["Logistic Regression", "Random Forest", "XGBoost", "ANN"];

    return (
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-400">
                Select Model:
            </label>
            <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full px-4 py-2 text-gray-200 bg-black border border-gray-600 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
            >
                {models.map((m) => (
                    <option key={m} value={m} className="text-gray-800">
                        {m}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ModelDropdown;

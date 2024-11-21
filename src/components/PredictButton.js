import React from "react";

const PredictButton = ({ handlePredict }) => {
    return (
        <button
            onClick={handlePredict}
            className="px-6 py-2 font-bold text-white bg-black border border-gray-600 rounded-md hover:border-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-1  focus:ring-blue-400"
        >
            Predict
        </button>
    );
};

export default PredictButton;

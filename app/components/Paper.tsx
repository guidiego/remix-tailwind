import React from "react";

export const Paper: React.FC = ({ children }) => (
    <div className="bg-white p-4 rounded-lg shadow-md border border-solid border-gray-100">
        { children }
    </div>
);

export default Paper;
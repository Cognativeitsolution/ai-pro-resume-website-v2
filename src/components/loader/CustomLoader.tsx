import React from "react";

interface LoaderProps {
    size?: number; // in pixels
    color?: string;
    text?: string;
}

const CustomLoader: React.FC<LoaderProps> = ({ size = 40, color = "#3498db", text }) => {
    return (
        <div className="flex flex-col py-30 rounded-md items-center w-full justify-center">
            <div
                className="animate-spin rounded-full"
                style={{
                    width: size,
                    height: size,
                    borderWidth: size * 0.1,
                    borderStyle: "solid",
                    borderColor: `${color}50`,
                    borderTopColor: color,
                }}
            />
            {text && <p className="mt-2 text-sm  text-gray-600">{text}</p>}
        </div>
    );
};

export default CustomLoader;


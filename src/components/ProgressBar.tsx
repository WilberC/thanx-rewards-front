import React from "react";
import {useRewards} from "../context/RewardsContext.tsx";


interface ProgressBarProps {
    stars: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({stars}) => {
    const maxPoints = 1000;
    const {rewardsLevels} = useRewards();

    return (
        <div className="relative w-full mt-4 mb-8">
            <div className="w-full bg-gray-200 rounded-full h-4 relative mb-2">
                <div
                    className="bg-yellow-500 h-4 rounded-full transition-all"
                    style={{width: `${(stars / maxPoints) * 100}%`}}
                ></div>
            </div>
            <div className="relative flex justify-between text-xs text-gray-700 mb-2 mx-4">
                {rewardsLevels.map((level) => (
                    <div
                        key={level.name}
                        style={{left: `${(level.points_required / maxPoints) * 100}%`}}
                        className="absolute transform -translate-x-1/2 whitespace-nowrap"
                    >
                        <span className="bg-white px-2 py-1 rounded shadow">
                            {level.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;

import {useState, useEffect} from "react";
import {getRewardsRedemptions} from "../services/rewardsService";

interface Reward {
    id: number;
    points_spent: string;
    created_at: string;
    reward_catalog_name: string;
}

const RewardsHistory = () => {
    const [rewards, setRewards] = useState<Reward[]>([]);

    useEffect(() => {
        const fetchRewards = async () => {
            try {
                const data = await getRewardsRedemptions();
                setRewards(data);
            } catch (error) {
                console.error("Failed to fetch rewards:", error);
            }
        };

        fetchRewards();
    }, []);

    return (
        <div className="max-w-md mx-auto mt-6 p-6 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Rewards History</h3>
            {rewards.length === 0 ? (
                <p className="text-gray-500">No rewards claimed yet.</p>
            ) : (
                <ul className="space-y-2">
                    {rewards.map((reward) => (
                        <li key={reward.id} className="p-3 border rounded bg-gray-100">
                            <div className="flex items-center justify-between">
                                <span className="font-medium">{reward.reward_catalog_name}</span>
                                <span className="font-medium">- {reward.points_spent}</span>
                            </div>
                            <span className="block text-sm text-gray-500">
                                {new Date(reward.created_at).toLocaleString()}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RewardsHistory;
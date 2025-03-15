import {useRewards} from "../context/RewardsContext";
import ProgressBar from "../components/ProgressBar.tsx";

const RewardsPage = () => {
    const {userStars, rewardsCatalog, redeemReward} = useRewards();

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-green-800 text-center">⭐ My Rewards</h2>

            <div className="mt-4 text-center">
                <p className="text-lg font-semibold">Your Stars</p>
                <p className="text-3xl font-bold text-yellow-500">{userStars} ⭐</p>
            </div>

            <ProgressBar stars={userStars}/>

            <p className="text-center text-sm text-gray-500 mt-2">Earn more Stars for bigger rewards!</p>

            {/* Redeemable Rewards */}
            <div className="mt-6 space-y-4">
                {rewardsCatalog.map((reward) => (
                    <div
                        key={reward.name}
                        className={`p-4 border rounded-lg flex justify-between items-center ${
                            userStars >= reward.points_cost ? "bg-green-100" : "bg-gray-100 opacity-60"
                        }`}
                    >
                        <p className="font-medium">{reward.name}</p>
                        <button
                            className={`px-3 py-1 text-white rounded ${
                                userStars >= reward.points_cost ? "bg-green-700 hover:bg-green-600" : "bg-gray-400"
                            }`}
                            disabled={userStars < reward.points_cost}
                            onClick={() => redeemReward(reward.points_cost, reward.id)}
                        >
                            Redeem {reward.points_cost} ⭐
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RewardsPage;
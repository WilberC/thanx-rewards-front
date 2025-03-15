import {useAuth} from "../context/AuthContext";
import {useRewards} from "../context/RewardsContext";
import RewardsManage from "../components/RewardsManage.tsx";
import RewardsHistory from "../components/RewardsHistory.tsx";

const ProfilePage = () => {
    const {user} = useAuth();
    const {userStars} = useRewards();

    return (
        <>
            <RewardsManage/>
            <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-green-800">Profile</h2>
                <p className="mt-2 text-lg"><strong>Email:</strong> {user?.email}</p>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Rewards</h3>
                    <p className="text-yellow-600 text-xl font-bold">{userStars} ★</p>
                </div>
            </div>
            <RewardsHistory/>
        </>
    );
};

export default ProfilePage;
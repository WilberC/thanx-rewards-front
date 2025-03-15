import {useState} from "react";
import {useRewards} from "../context/RewardsContext.tsx";

const RewardsManage = () => {
    const [credits, setCredits] = useState("");
    const {addStartsToUser} = useRewards();

    const handleAddCredits = () => {
        addStartsToUser(Number(credits));
        setCredits("");
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6 border border-gray-300 rounded-lg w-64 mx-auto mt-6">
            <h3 className="text-lg font-semibold">Add User Stars</h3>
            <input
                type="number"
                className="w-full px-4 py-2 border rounded"
                placeholder="Enter stars to add"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}/>
            <button
                onClick={handleAddCredits}
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
            >
                Add Stars
            </button>
        </div>
    );
};

export default RewardsManage;

import {createContext, useContext, useEffect, useState} from "react";
import {
    getRewardsCatalog,
    getRewardsLevels,
    getUserRewards,
    postRewardRedemptions,
    postRewardTransaction
} from "../services/rewardsService";

type Level = {
    id: number;
    name: string;
    points_required: number;
};

export type RewardItem = {
    id: number;
    name: string;
    description: string;
    points_cost: number;
};

type UserRewardItem = {
    id: number;
    user_id: number;
    reward_tier_id: number;
    points: number;
    reward_tier: Level
}

interface RewardsContextType {
    userRewards: UserRewardItem | object;
    rewardsLevels: Level[];
    rewardsCatalog: RewardItem[];
    redeemReward: (cost: number, rewardId: number) => void;
    addStartsToUser: (stars: number) => void;
    userStars: number;
}

enum TransactionTypeEnum {
    EARN = "earn",
    REDEEM = "redeem",
}

const RewardsContext = createContext<RewardsContextType | undefined>(undefined);

export const RewardsProvider = ({children}: { children: React.ReactNode }) => {
    const [userStars, setUserStars] = useState(0);
    const [userRewards, setUserRewards] = useState<UserRewardItem | object>({});
    const [rewardsLevels, setRewardsLevels] = useState<Level[] | []>([])
    const [rewardsCatalog, setRewardsCatalog] = useState<RewardItem[] | []>([])

    useEffect(() => {
        const fetchUserRewards = async () => {
            const userRewardData = await getUserRewards();
            setUserRewards(userRewardData);
            setUserStars(userRewardData.points)
        };

        const fetchRewardsCatalog = async () => {
            const rewardCatalogData = await getRewardsCatalog();
            setRewardsCatalog(rewardCatalogData);
        };

        const fetchRewardsLevels = async () => {
            const rewardLevelData = await getRewardsLevels()
            setRewardsLevels(rewardLevelData);
        };

        fetchRewardsLevels();
        fetchRewardsCatalog()
        fetchUserRewards();
    }, []);

    const redeemReward = async (cost: number, rewardId: number) => {
        if (userStars >= cost) {
            setUserStars(userStars - cost)
            await postRewardRedemptions(rewardId);
        }
    };

    const addStartsToUser = async (stars: number) => {
        setUserStars((userStars) => userStars + stars);
        await postRewardTransaction(stars, TransactionTypeEnum.EARN, "add-stars");
    };

    return (
        <RewardsContext.Provider
            value={{userStars, userRewards, rewardsLevels, rewardsCatalog, redeemReward, addStartsToUser}}>
            {children}
        </RewardsContext.Provider>
    );
};

export const useRewards = () => {
    const context = useContext(RewardsContext);
    if (!context) throw new Error("useRewards must be used within a RewardsProvider");
    return context;
};
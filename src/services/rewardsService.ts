import api from "../api.ts";

export const getUserRewards = async () => {
    const res = await api.get("/user_reward");
    return res.data
};

export const getRewardsCatalog = async () => {
    const res = await api.get("/reward_catalog");
    return res.data
};

export const getRewardsLevels = async () => {
    const res = await api.get("/reward_tiers");
    return res.data
}

export const getRewardsRedemptions = async () => {
    const res = await api.get("/reward_redemptions");
    return res.data
};

export const postRewardTransaction = async (
    points: number,
    transactionType: string,
    description: string) => {
    const res = await api.post("/reward_transactions", {
        points: points,
        transaction_type: transactionType,
        description: description
    });
    return res.data
};

export const postRewardRedemptions = async (rewardId: number) => {
    const res = await api.post("/reward_redemptions", {
        reward_catalog_id: rewardId,
    });
    return res.data
};
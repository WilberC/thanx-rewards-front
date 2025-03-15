# Project Structure

```
/src
├── assets/        # Images & Icons
├── components/    # Reusable UI Components (Button, Card, Input)
├── pages/         # Page-Level Components (Login, Signup, Profile, Rewards)
├── hooks/         # Custom Hooks (useAuth, useRewards)
├── services/      # API Calls (Auth, Rewards)
├── context/       # Global State (AuthContext, RewardsContext)
├── router.tsx     # React Router Setup
├── App.tsx        # Main Component
└── main.tsx       # Entry Point
```

# React Env vars:

```zsh
VITE_API_URL_V1=http://localhost:3000/api/v1
```

# React run

- To run the project `npm run dev`
- To install dependencies `npm i`
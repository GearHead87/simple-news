import { create } from 'zustand';

// interface Vote {
// 	articleId: string;
// 	vote: number;
// }

type Store = {
	// articles: Vote[];
	vote: number;
	increaseVote: () => void;
	decreaseVote: () => void;
};

export const useArticlesVoteStore = create<Store>()((set) => ({
	vote: 0,
	increaseVote: () => set((state) => ({ vote: state.vote + 1 })),
	decreaseVote: () => set((state) => ({ vote: state.vote - 1 })),
}));

import { create } from "zustand";

export interface ServerTopMember {
  userId: string;
  msgCount: number;
  username: string;
  overallSentiment: string;
}

export interface ServerData {
  allMessagesJSON: { sentiment: string }[];
  serverName: string;
  serverLastUpdated: string;
  serverFudControlLevel: string;
  serverMemberCount: number;
  serverOverallSentiment: string;
  serverTopMembers: ServerTopMember[];
  serverLogHistory: any[]; // assuming the structure of serverLogHistory is unknown
  serverCommunitySentimentChartData: any[]; // assuming the structure of serverCommunitySentimentChartData is unknown
}

type AppStore = {
  serverDetails: ServerData | null;
  setServerDetails: (state: ServerData) => void;
};

const useAppStore = create<AppStore>((set) => ({
  serverDetails: null,
  setServerDetails: (state) => set({ serverDetails: state }),
}));

export default useAppStore;

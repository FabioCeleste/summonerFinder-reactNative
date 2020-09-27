export interface MatchResult {
  results: MatchSummoner[];
}
export interface MatchSummoner {
  profileIconId: string;
  summonerName: string;
  team: number;
  spell1: string;
  spell2: string;
  ranked: MatchRanked[];
  champion: string;
}
export interface MatchRanked {
  queueType: string;
  tier: string;
  rank: string;
  image: string;
}

export interface SummonerFind {
  summoner: {
    id: string;
    name: string;
    profileIcon: string;
  };
  renked: MatchRanked[];
}

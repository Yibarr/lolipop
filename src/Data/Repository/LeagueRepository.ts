import { SummonerAPIResponse } from "../../Data/API/Entity/SummonerAPIResponse";

export interface LeagueAPIRepository {
  getSummoner(input: string): Promise<SummonerAPIResponse >;
}
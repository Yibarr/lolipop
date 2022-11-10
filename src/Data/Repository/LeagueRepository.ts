import { SummonerModel } from "../../Domain/Model/SummonerModel";

export interface LeagueAPIRepository {
  getSummoner(input: string): Promise<SummonerModel[]>;
}
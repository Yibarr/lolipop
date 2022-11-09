import { SummonerModel } from "../Domain/Model/SummonerModel";

export default interface LeagueAPIDataSource {
  getSummoner(input: string): Promise<SummonerModel[]>;
}
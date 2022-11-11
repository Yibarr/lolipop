import { SummonerAPIResponse } from "../Data/API/Entity/SummonerAPIResponse";

export default interface LeagueAPIDataSource {
  getSummoner(input: string): Promise<SummonerAPIResponse>;
}
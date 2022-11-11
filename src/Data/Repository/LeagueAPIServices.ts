import { SummonerAPIResponse } from "../../Data/API/Entity/SummonerAPIResponse"
import { LeagueAPIRepository } from "./LeagueRepository";
import LeagueAPIDataSource from "../LeagueAPIDataSource";

export class LeagueAPIServices implements LeagueAPIRepository {
  dataSource: LeagueAPIDataSource;

  constructor(_datasource: LeagueAPIDataSource) {
    this.dataSource = _datasource;
  }

  async getSummoner(input: string): Promise<SummonerAPIResponse> {
    return this.dataSource.getSummoner(input);
  }
}
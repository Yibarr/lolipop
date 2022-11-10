import { SummonerModel } from "../../Domain/Model/SummonerModel"
import { LeagueAPIRepository } from "./LeagueRepository";
import LeagueAPIDataSource from "../LeagueAPIDataSource";

export class LeagueAPIServices implements LeagueAPIRepository {
  dataSource: LeagueAPIDataSource;

  constructor(_datasource: LeagueAPIDataSource) {
    this.dataSource = _datasource;
  }

  async getSummoner(input: string): Promise<SummonerModel[]> {
    return this.dataSource.getSummoner(input);
  }
}
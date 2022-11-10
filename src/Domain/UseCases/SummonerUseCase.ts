import { LeagueAPIRepository } from "../../Data/Repository/LeagueRepository";
import { SummonerModel } from "../Model/SummonerModel"

export class SummonerUseCase {
    repository: LeagueAPIRepository;

    constructor(_datasource: LeagueAPIRepository) {
        this.repository = _datasource;
      }

      async invoke(input: string): Promise<SummonerModel[]> {
        return this.repository.getSummoner(input)
      }
}
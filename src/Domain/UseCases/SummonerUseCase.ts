import { LeagueAPIRepository } from "../../Data/Repository/LeagueRepository";
import { SummonerModel } from "../Model/SummonerModel"
import { SummonerAPIResponse } from "../../Data/API/Entity/SummonerAPIResponse"

export class SummonerUseCase {
    repository: LeagueAPIRepository;

    constructor(_repository: LeagueAPIRepository) {
        this.repository = _repository;
      }

      async invoke(input: string): Promise<SummonerModel> {
        let summonerResponse: SummonerAPIResponse = await this.repository.getSummoner(input)
        return {
          id: summonerResponse.id,
          summonername: summonerResponse.name,
          sprite: summonerResponse.sprites.front_default
        }
      }
}
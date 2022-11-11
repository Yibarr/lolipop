import { LeagueAPIRepository } from "../../Data/Repository/LeagueRepository";
import { SummonerModel } from "../Model/SummonerModel"
import { SummonerAPIResponse } from "../../Data/API/Entity/SummonerAPIResponse"

export class SummonerUseCase {
    repository: LeagueAPIRepository;

    constructor(_repository: LeagueAPIRepository) {
        this.repository = _repository;
      }

      async invoke(input: string): Promise<SummonerModel> {
        const query: string = input.toLowerCase().trim();
        const summonerResponse: SummonerAPIResponse = await this.repository.getSummoner(query)
        const summonerName: string = summonerResponse
          .name
          .toLowerCase()
          .replace(/\w/, firstLetter => firstLetter.toUpperCase());

        return {
          id: summonerResponse.id,
          summonername: summonerName,
          sprite: summonerResponse.sprites.front_default
        }
      }
}
import { SummonerModel } from "../../Domain/Model/SummonerModel";
import LeagueAPIDataSource from "../LeagueAPIDataSource";
import { SummonerAPIResponse } from "./Entity/SummonerAPIResponse";

const BASE_URL = "https://pokeapi.co/api/v2"

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args);
}

export default class LeagueAPIDataManager implements LeagueAPIDataSource {
  async getSummoner(input: string): Promise<SummonerModel[]> {
    try {
        let response = await myFetch<SummonerAPIResponse>(`${BASE_URL}/pokemon/${input}`);
        let data = await response.json();
        return [{
        id: data.id,
        summonername: `${data.name}`,
        }]
    } catch(e) {
        throw e
    }
  }
}
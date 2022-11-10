import { useState } from "react";
import LeagueAPIDataManager from "../../../Data/API/LeagueAPIDataManager";
import { LeagueAPIServices } from "../../../Data/Repository/LeagueAPIServices";
import { SummonerModel } from "../../../Domain/Model/SummonerModel";
import { SummonerUseCase } from "../../../Domain/UseCases/SummonerUseCase";

export default function SearchBarViewModel() {
  const [summoner, setSummoner] = useState<SummonerModel | undefined>();
  const [error, setError] = useState<Boolean>(false)
  const [loading, setLoading] = useState<Boolean>(false)

  const SearchUseCase = new SummonerUseCase(
    new LeagueAPIServices(new LeagueAPIDataManager())
  );

  async function getSummoner(input: string) {
    try {
      debugger
        setError(false)
        setLoading(true)
        if (input.length > 0) {
          setSummoner(await SearchUseCase.invoke(input))  
        } else {
          setSummoner(undefined)
        }
        setLoading(false)
    } catch (error) {
        setError(true)
        setLoading(false)
    }
  }

  return {
    getSummoner,
    summoner,
    error,
    loading
  };
}
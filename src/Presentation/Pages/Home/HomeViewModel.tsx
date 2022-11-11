import { useState } from "react";
import LeagueAPIDataManager from "../../../Data/API/LeagueAPIDataManager";
import { LeagueAPIServices } from "../../../Data/Repository/LeagueAPIServices";
import { SummonerModel } from "../../../Domain/Model/SummonerModel";
import { SummonerUseCase } from "../../../Domain/UseCases/SummonerUseCase";

export default function HomeViewModel() {
  const [summoner, setSummoner] = useState<SummonerModel | undefined>();
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const summonerUseCase = new SummonerUseCase(
    new LeagueAPIServices(new LeagueAPIDataManager())
  );

  async function getSummoner(input: string) {
    try {
        setError(false)
        setLoading(true)
        if (input.length > 0) {
          setSummoner(await summonerUseCase.invoke(input))  
        } else {
          setSummoner(undefined)
        }
        setLoading(false)
    } catch (error) {
        setError(true)
        setLoading(false)
        setSummoner(undefined)
    }
  }

  return {
    getSummoner,
    summoner,
    error,
    loading
  };
}
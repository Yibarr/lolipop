import { useState } from "react";
import LeagueAPIDataManager from "../../../Data/API/LeagueAPIDataManager";
import { LeagueAPIServices } from "../../../Data/Repository/LeagueAPIServices";
import { SummonerModel } from "../../../Domain/Model/SummonerModel";
import { SummonerUseCase } from "../../../Domain/UseCases/SummonerUseCase";

export default function SearchBarViewModel() {
  const [summoners, setSummoners] = useState<SummonerModel[]>([]);
  const [error, setError] = useState(false)

  const UseCase = new SummonerUseCase(
    new LeagueAPIServices(new LeagueAPIDataManager())
  );

  async function getSummoners(input: string) {
    try {
        setError(false)
        setSummoners(await UseCase.invoke(input))   
    } catch (error) {
        setError(true)
    }
  }

  return {
    getSummoners,
    summoners,
    error
  };
}
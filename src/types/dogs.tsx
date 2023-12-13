import { Vaccines } from "./vaccines";

export interface IDog {
  id: string,
  name: string,
  race: string,
  birthDate: string,
  vaccines: Vaccines[]
}

import { Vaccines } from "./vaccines";

export interface Dog {
  id: string,
  name: string,
  race: string,
  birthDate: string,
  vaccines: Vaccines[]
}

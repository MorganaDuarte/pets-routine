import { Vaccines } from "./vaccines";
import { Dewormers } from "./dewormers";

export interface Dog {
  id: string,
  name: string,
  race: string,
  birthDate: string,
  vaccines: Vaccines[],
  dewormers: Dewormers[]
}

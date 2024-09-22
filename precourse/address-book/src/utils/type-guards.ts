import { CreatedPerson } from "./types";

export const isCreatedPerson = (person: any): person is CreatedPerson => 
  person && typeof person.userId === 'string' && 
    typeof person.fullName === 'string' && typeof person.email === 'string';
;

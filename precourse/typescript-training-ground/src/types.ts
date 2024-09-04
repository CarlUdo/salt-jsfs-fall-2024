export type Address = {
  street: string;
  streetNo: number;
  city: string;
};

export type Person = {
  name: string;
  birthYear: number;
  address: Address;
};

export interface IPerson {
  name: string;
  birthYear: number;
}

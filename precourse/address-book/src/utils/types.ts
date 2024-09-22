export type Person = {
  fullName: string;
  email: string;
  address: string;
  phoneNumber?: string;
  age?: number;
  gender?: string;
  zodiacSign?: string;
  favoriteDish?: string;
  pet?: string;
  bio?: string;  
  avatar?: string;
};

export type CompletePerson = Person & {
  age: number;
  gender: string;
  zodiacSign: string;
  favoriteDish: string;
  pet: string;
  bio: string;  
  avatar: string;
};

export type CreatedPerson = Person & {
  userId: string; 
};


export type Personss = {
  fullName: string;
  email: string;
  address: string;
  phoneNumber?: string;
  age: number;
  gender: string;
  zodiacSign: string;
  favoriteDish: string;
  pet: string;
  bio: string;  
  avatar: string;
};

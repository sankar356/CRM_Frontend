export enum NamePrefix {
    Mr = 'Mr',
    Mrs = 'Mrs',
    Miss = 'Miss',
    Dr = 'Dr',
    Prof = 'Prof',
    Ms = 'Ms',
    Mx = 'Mx',
  }

  export enum CountryCode {
    India = +91,
    UnitedStates = +1,
    UnitedKingdom = +44,
    Canada = +1,
    Australia = +61,
  }
  
  export interface Country {
    code: CountryCode;
    name: string;
    flagUrl: string;
  }
  
  export const countries: Country[] = [
    {
      code: CountryCode.India,
      name: 'India',
      flagUrl: 'https://restcountries.com/data/ind.svg', // Replace with the actual flag URL
    },
    {
      code: CountryCode.UnitedStates,
      name: 'United States',
      flagUrl: 'https://restcountries.com/data/usa.svg', // Replace with the actual flag URL
    },
    {
      code: CountryCode.UnitedKingdom,
      name: 'United Kingdom',
      flagUrl: 'https://restcountries.com/data/gbr.svg', // Replace with the actual flag URL
    },
    {
      code: CountryCode.Canada,
      name: 'Canada',
      flagUrl: 'https://restcountries.com/data/can.svg', // Replace with the actual flag URL
    },
    {
      code: CountryCode.Australia,
      name: 'Australia',
      flagUrl: 'https://restcountries.com/data/aus.svg', // Replace with the actual flag URL
    },
  ];
  
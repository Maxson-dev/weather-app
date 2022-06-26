export interface Day {
  dTemp: number,
  nTemp: number,
  humidity: number,
  main: string,
  icon: string
}
export interface Today {
  temp: number,
  humidity: number,
  clouds: number,
  main: string,
  icon: string
}
export interface Weather {
  weather: Today,
  place: string,
}

export interface APIinfo {
  humidity: number,
  clouds: number,
  weather: {
    main: string,
    icon: string
  }
  temp: {
    day: number,
    night: number
  }
}
export interface Day {
  dTemp: number,
  nTemp: number,
  humidity: number,
  main: string,
  icon: string,
  dt: [number|string, number|string],
  clouds: number
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
  weather: Day[]
  temp: {
    day: number,
    night: number
  }
}

export interface DayProps {
  data: Day
}

export interface ArrayDay {
  children: any;
  days: Day[]
}
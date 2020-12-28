import { DataReader } from './DataReader'

export const asDate = (dayMonthYear: string): Date => {
  const [day, month, year] = dayMonthYear
    .split(/\//)
    .map((value, index) => +value - Number(index === 1))
  return new Date(year, month, day)
}

export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

export type MatchData = [
  date: Date,
  homeTeam: string,
  awayTeam: string,
  homeTeamGoals: number,
  awayTeamGoals: number,
  result: MatchResult,
  referee: string
]

export class MatchReader {
  public data: MatchData[] = []
  constructor(private reader: DataReader) {}
  load() {
    this.reader.read()
    this.data = this.reader.data.map(
      (row: string[]): MatchData => [
        asDate(row[0]),
        row[1],
        row[2],
        +row[3],
        +row[4],
        row[5] as MatchResult,
        row[6],
      ]
    )
  }
}

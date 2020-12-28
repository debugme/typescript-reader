import fs from 'fs'

export abstract class CsvFileReader<T> {
  public data: T[] = []
  constructor(private path: string) {}
  read() {
    const csvData = fs.readFileSync(this.path, 'utf-8')
    const lines = csvData.split(/\n/)
    const table = lines.map((line) => line.split(/,/))
    this.data = table.map(this.buildRow)
  }
  abstract buildRow(row: string[]): T
}

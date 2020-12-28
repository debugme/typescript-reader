import fs from 'fs'
import { DataReader } from './DataReader'

export class CsvReader implements DataReader {
  data: string[][] = []
  constructor(private path: string) {}
  read() {
    const csvData = fs.readFileSync(this.path, 'utf-8')
    const lines = csvData.split(/\n/)
    this.data = lines.map((line) => line.split(/,/))
  }
}

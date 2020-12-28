import {
  MatchCsvFileReader,
  MatchResult,
} from './approachOne/MatchCsvFileReader'

import { CsvReader } from './approachTwo/CsvReader'
import { MatchReader } from './approachTwo/MatchReader'

function useApproachOne() {
  // PARSING STAGE
  const reader = new MatchCsvFileReader('assets/football.csv')
  reader.read()
  const matchList = reader.data

  // ANALYSING STAGE
  let manUnitedWins = 0
  for (let match of matchList) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
      manUnitedWins++
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
      manUnitedWins++
    }
  }

  // REPORTING STAGE
  console.log(`Man United had ${manUnitedWins} wins`)
}

function useApproachTwo() {
  // PARSING STAGE
  const path = 'assets/football.csv'
  const csvReader = new CsvReader(path)
  const matchReader = new MatchReader(csvReader)
  matchReader.load()
  const matchList = matchReader.data

  // ANALYSING STAGE
  let manUnitedWins = 0
  for (let match of matchList) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
      manUnitedWins++
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
      manUnitedWins++
    }
  }

  // REPORTING STAGE
  console.log(`Man United had ${manUnitedWins} wins`)
}

useApproachOne()
useApproachTwo()


const csvFilePath='list 1.csv'
import csv from 'csvtojson'

const result = await csv().fromFile(csvFilePath)

console.table(result);



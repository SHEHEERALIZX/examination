
const { Parser } = require('json2csv');

const fields = ['regno', 'name', 'ins'];
const opts = { fields };


xlsxj = require("xlsx-to-json");
  xlsxj({
    input: "list 1.xlsx", 
    output: "output.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.table(result);
      const parser = new Parser(opts);
      const csv = parser.parse(result);
      console.log(csv);
    }
  });


  
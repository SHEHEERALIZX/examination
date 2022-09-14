const fs = require('fs')


const csvFilePath='filter-file copy.csv'
const csv=require('csvtojson')

let array = []

csv()
.fromFile(csvFilePath)
.then(async (jsonObj)=>{
    // console.log(jsonObj);

    array = await jsonObj
    // array = 'new array'

    // console.log(array);

    // require('fs').writeFile('file.json', JSON.stringify(jsonObj), (error) => {
    //     if (error) {
    //         throw error;
    //     }
    // });
   
})



// var data = JSON.parse(fs.readFileSync('data.json'));


// const names = Object.keys(data);


// console.table(names);



// console.log(
//     array
// );
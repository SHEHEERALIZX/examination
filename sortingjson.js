
const fs = require('fs')


const csvFilePath='list 1.csv'
const csv=require('csvtojson')

let array = []

csv()
.fromFile(csvFilePath)
.then(async (jsonObj)=>{
    array = await jsonObj


    console.log(jsonObj);

    jsonObj.sort((a, b) => parseFloat(a.regno) - parseFloat(b.regno));



    // const newArray = jsonObj.map(({dropAttr1, dropAttr2, ...keepAttrs}) => keepAttrs)

    // jsonObj.forEach(function(v){ delete v.inst });

    jsonObj.map(function(item) { 
        delete item.inst; 
        // if(item.num2=== 'R'){
        //     // delete item.num2
        // }
        return item; 
    });

    const newarray = jsonObj.filter((item)=>{
        
        return item.type != 'R' && item.s3 === '3159'
    })

    // console.table(jsonObj);

    console.table(newarray);



})











const csvFilePath='list 1.csv'
const csv=require('csvtojson')
const GetArray = require('./arraypassing')
const rooms = require('./rooms')


let dataArray 

 csv()
.fromFile(csvFilePath)
.then(async (jsonObj)=>{

    jsonObj.sort((a, b) => parseFloat(a.regno) - parseFloat(b.regno));
    jsonObj.map(v=>{
        delete v.inst
        delete v.sem
        // delete v.name
        // delete v.

    })

    // const filterArray = jsonObj.filter(v=> v.regno >=  20150370 && v.type === 'S')
    const filterArray = jsonObj.filter(v=> v.type === 'R' || v.type === 'S')



    const examsList = ['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10']

    filterArray.forEach((item)=>{

        let count = 0 ;

        let TotalCount = 0;


        examsList.forEach((val)=>{
            if(item[val]!=''){
                count++
            }

            if(item[val]===''){
                item[val] = null
            }

        })

        item['totalcount'] = count;

    })

    // console.table(filterArray);
    // console.table(jsonObj);



    // const mostSupplies = filterArray.filter(v=> v.totalcount >= 5)

    // console.table(mostSupplies)


    // GetArray(filterArray)
    // console.table(filterArray)




  






    // console.log(rooms);



    // console.table(filterArray);


    const todayExams = [4032,4151,4212]


    let divisons = []


    todayExams.forEach((batch,index)=>{

       
      const NewArray = filterArray.filter((obj)=>{

            let flag = false
    
            Object.keys(obj).forEach(function(key) {
                if (obj[key] == batch) {
                //   console.log('exists');
                flag = true
                }
              });
    
              if(flag===true){
                obj['todayexam'] = batch
                return obj
              }
        
    
        })


        divisons.push(NewArray)

    })


    // console.table(divisons);
    // console.log(divisons.length);




    let MixedRooms = []

    MixedRooms = MixedRooms.concat(...divisons)

    // console.table(MixedRooms);




    MixedRooms.map(v=>{
        
        examsList.forEach((item)=>{
            delete v[item]
        })

        delete v.totalcount
        delete v.index
        delete v.type



    })

    // console.table(MixedRooms);






    let teachers = 0


    let studentsCount = MixedRooms.length






    if(studentsCount % 20 != 0){
        teachers =  Math.floor( studentsCount / 20 );
        teachers++
    } else {
        teachers = Math.floor( studentsCount / 20 );
    }


    console.log("Total Teachers Required :" + teachers);





    // const examsCHE =  



    // const examsCLE =  filterArray.filter((obj)=>{

    //     let flag = false

    //     Object.keys(obj).forEach(function(key) {
    //         if (obj[key] == '6218') {
    //         //   console.log('exists');
    //         flag = true
    //         }
    //       });

    //       if(flag===true){
    //         obj['todayexam'] = 6218
    //         return obj
    //       }
    

    // })


   

    
    




    // const mixedClassRooms =  examsCHE.concat(examsCLE)

    // mixedClassRooms.map(v=>{
        
    //     examsList.forEach((item)=>{
    //         delete v[item]
    //     })

    //     delete v.totalcount
    //     delete v.index
    //     delete v.type



    // })


    // console.table(mixedClassRooms.length);



    
     







    module.exports = await MixedRooms






    



    
})






// let obj = {
//     name:"SHEHEER ALi",
//     s1:'4001',
//     s2:'4010',
//     s3:'4015',
//     s4:'4051',
//     s5:'4081',
// }


//     const val = Object.values(obj).includes("5")

//     // console.log(val);



    
    

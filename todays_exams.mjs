
const csvFilePath='list 1.csv'
import  csv from 'csvtojson'

let data = await csv().fromFile(csvFilePath)


// console.table(data);


data.sort((a, b) => parseFloat(a.regno) - parseFloat(b.regno));
data.map(v=>{
    delete v.inst
    delete v.sem
    // delete v.name
    // delete v.
})


// console.table(data);



// const filterArray = data.filter(v=> v.type === 'R')


const filterArray = data


// console.table(filterArray);



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


export default  MixedRooms




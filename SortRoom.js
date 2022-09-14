import MixedRooms from './todays_exams.mjs'
const rooms = [
    [
     4,
     2,
     4
    ],
    [
    4,
    4
    ],
    [
    
        3,
        3,
        3
    ],
    [
        5,
        5,
        5
    ],
    [
        4,
        2,
        4
       ],
       [
       4,
       4
       ],
       [
       
           3,
           3,
           3
       ],
       [
           5,
           5,
           5
       ],
       [
       
           3,
           3,
           3
       ],
       [
           5,
           5,
           5
       ],[
        3
       ]
   
 ]
 
 let totalStudent = 0
 
 
//  rooms.forEach(v=>totalStudent += [...v].reduce((partialSum, a) => partialSum + a, 0));
 
 
 
//  console.log("Total Student Capacity  "+totalStudent*2);
//  console.log("Total Benches  "+totalStudent);



let SingleColumn = [] // Vertical Arragement

let SingleRooms = [] // Single ClassRooms like 101,102,CF LAB

let ClassRooms = [] // ALL ClassROoms Array

let counter = 0


// MixedRooms.forEach((student,key)=>{

// })

rooms.forEach((room,index)=>{
    let num = 1;
    // console.log(room.length); 
    room.forEach((height,index)=>{
        // console.log("Current Room "+room.length);
        // console.log(height);
        // console.log("Current index "+index);

        let num = 1

        // if(MixedRooms)

        for(let i=0;i<height;i++){
            let bench

            // if(MixedRooms[counter +2 ].regno===undefined){
            //     break;
            // }

            if(index===0){
                bench = {
                    ['A'+num]:parseInt(MixedRooms[counter+1].regno),
                    ['B'+num]:parseInt(MixedRooms[counter+2].regno)
                }

                num++

                counter = counter + 2
                SingleColumn = [...SingleColumn,bench]



            } else if(index===1){
                bench = {
                    // ['A'+num]:counter+1,
                    // ['B'+num]:counter+2,
                    ['C'+num]:parseInt(MixedRooms[counter+1].regno),
                    ['D'+num]:parseInt(MixedRooms[counter+2].regno)


                }
                num++
                counter = counter + 2
                SingleColumn = [...SingleColumn,bench]
            } else if(index===2){
                bench = {
                    ['E'+num]:parseInt(MixedRooms[counter+1].regno),
                    ['F'+num]:parseInt(MixedRooms[counter+2].regno)


                }
                num++
                counter = counter + 2
                SingleColumn = [...SingleColumn,bench]
            }



            SingleRooms = [...SingleRooms,SingleColumn]

            SingleColumn = []





        }
        
    })

    ClassRooms = [...ClassRooms,SingleRooms]

    SingleRooms = []
})





let TotalRooms = []


ClassRooms.forEach((room)=>{
    let rooms = []
    room.forEach((row)=>{
        row.forEach((bench)=>{
            // console.table(bench);
            rooms.push(bench)
        })
    })

    TotalRooms.push(rooms)

})

console.log(TotalRooms);


rooms.forEach(v=>totalStudent += [...v].reduce((partialSum, a) => partialSum + a, 0));
 
 
 
console.log("Total Student Capacity  "+totalStudent*2);
console.log("Total Benches  "+totalStudent);

console.log("Total Students in List "+MixedRooms.length);


// console.log(parseInt(MixedRooms[0].regno));





// console.table(TotalRooms[0]);
// console.table(TotalRooms[1]);

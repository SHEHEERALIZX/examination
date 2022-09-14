
import MixedRooms from './todays_exams.mjs'


console.log(MixedRooms);



const rooms = [
   [
    5,
    4
   ],
   [
    4
   ]
  
]

let totalStudent = 0


rooms.forEach((room)=>{
    totalStudent = totalStudent + [...room].reduce((partialSum, a) => partialSum + a, 0);
})


console.log("Total Students "+totalStudent*2);



let SingleColumn = [] // Horizontal Arragement

let SingleRooms = [] // Single ClassRooms like 101,102,CF LAB

let ClassRooms = [] // ALL ClassROoms Array

let counter = 0

// console.log(rooms[0].length);


for (m in rooms){
    let num =1
    for (i =0;i<rooms[m].length;i++){
        for (j=0;j<rooms[m][i];j++){


            let bench            
            let choice = rooms[i].length

            

            switch(choice){

                case 1:
                    bench = {
                        ['A'+num]:counter+1,
                        ['B'+num]:counter+1,


                    }
                    num++
                    counter = counter +rooms[i].length
                    SingleColumn = [...SingleColumn,bench]
                    break;



                case 2 :
                     bench = {
                        ['A'+num]:counter+1,
                        ['B'+num]:counter+2,
                        ['C'+num]:counter+3,
                        ['D'+num]:counter+4
                    }
                    num++
                    counter = counter +rooms[i].length
                    SingleColumn = [...SingleColumn,bench]
                    break;

            }


        }




        SingleRooms = [...SingleRooms,SingleColumn]

        SingleColumn = []

        
    
    }

    ClassRooms = [...ClassRooms,SingleRooms]

    SingleRooms = []


}







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



// console.log(TotalRooms);



console.table(MixedRooms);




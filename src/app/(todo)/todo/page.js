// "use client"
// import React, { useState } from 'react'
// import { GetAllWorkSpace } from '../../../service/get-all-work-space'
// import CardComponent from '@/components/card'

// function ToDopage({getTaskByIdWorkSpace}) {


  
//   return (
//    <>
//    <div className=' grid grid-cols-12 gap-15'>
//     {/* Not Stated */}
//       <div className='grid col-span-4'>
//       <div>
//         <span className='text-red-500'>Not Started</span> <span><hr className='text-red-500' /></span>
//       </div>
//       {
//         getTaskByIdWorkSpace.map((task)=> (
//           <div key={task.taskId}>
//           <CardComponent 
//           taskTitle={task.taskTitle} 
//           taskDetails={task.taskDetails}
//           tag={task.tag}
//           />
//           </div>
//         ))
//       }
//       </div>

//     {/* In Progress */}
//     <div className='grid col-span-4 '>
//       <div>
//         <span className='text-blue-500'>Not Started</span> <span><hr className='text-blue-500' /></span>
//       </div>
//       {/* <CardComponent /> */}
//       </div>

//       {/* Finished */}
//       <div className='grid col-span-4'>
//       <div>
//         <span className='text-green-500'>Not Started</span> <span><hr className='text-green-500' /></span>
//       </div>
//       {/* <CardComponent /> */}
//       </div>

//    </div>
//    </>
//   )
// }

// export default ToDopage
import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page
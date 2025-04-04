
import Logo from '@/components/logo'
import WorkspaceUI from '@/components/ui/sidebar'

import { AddWorkSpace } from '../../../service/add-work-space-service';
import { Label } from '@/components/ui/label';
import { BellRing, ChevronRight, Star } from 'lucide-react';
import Profile from '@/components/ui/profile';
import { GetWorkSpace } from '../../../service/get-all-work-space';



async function layoutPage({children}) {
    const workspaceOri = await GetWorkSpace();
    const workspace = await workspaceOri.payload;
    console.log("WWWWWWWWWWWWWWWWWWWWW:",workspace);
    const addWorkSpace = await AddWorkSpace();
    console.log(addWorkSpace);
    
    
    
  return (
    <>
        <div className='grid grid-cols-12 h-full '>
            <div className='grid col-span-3 '>
            <div className="p-15 ">
                <Logo />
            </div>
            <div className='pl-10 '>
            <WorkspaceUI  workspace={workspace} />
            
            </div>
            </div>
            {/* Main Content */}
            <div className='col-span-9 py-5 px-5 items-center'>
                <div className='flex justify-between items-center'>


                <div className='flex items-center'>
                 <span className='text-[20px]'>WorkSpace</span> <span className='mx-2.5'><ChevronRight/></span> <span className='text-[20px]'>Name Of WorkSpace</span>
                </div>


                <div className='flex items-center justify-between'>
                  <span className='mr-6'><BellRing size={30}/></span> <span><Profile/></span>
                </div>

                </div>
                <hr className='text-gray-300'/>
                {/* Secornd Title */}
                <div className='flex justify-between mt-10'>

                <div className='text-2xl font-semibold '>
                  Secornd Title
                </div>

                <div className=' w-10 flex justify-center h-10 items-center rounded-[8px]  bg-gray-400'>
                  <Star size={25}/>
                </div>


                </div>
                <div>
                {children}
                </div>
            </div>
        </div>
    </>
  )
}

export default layoutPage
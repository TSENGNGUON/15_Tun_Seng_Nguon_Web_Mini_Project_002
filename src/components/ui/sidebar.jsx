"use client"
import { PlusSquareIcon, MoreHorizontal} from "lucide-react";
import AddForm from "./add-work-space";
import { useState } from "react";
import UdateForm from "./updateForm";


const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-gray-500",
];

const WorkspaceUI = ({workspace}) => {

  
    const [isOpen, setIsOpen] = useState(true);
    const [selectedWorkspaceId, setSelectedWorkspaceId] = useState(null);
    const [selectedWorkspaceName, setSelectedWorkspaceName] = useState(null);

   console.log("1111111111",workspace);
   

   
    function handleClick(){
        setIsOpen(!isOpen)
    }



   
        
   
  return (
   
    <div className="w-80  h-full mt-14 bg-white  text-gray-900">
       <AddForm workspace={workspace} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="flex ">
      <Section title="Workspace">
      <div className="h-72 overflow-y-scroll">
      {
        workspace.map((item) =>( 
           
            <WorkspaceItem
            key={item.workspaceId}
            workspaceId={item.workspaceId} 
            workspaceName={item.workspaceName}
            onMoreClick={setSelectedWorkspaceId}
            onMoreClickName={setSelectedWorkspaceName}
            />
        ))
       }
      </div>
      </Section>
      <div><PlusSquareIcon onClick={handleClick}/></div>
      </div>

      <Section title="Favorite">
        <WorkspaceItem title="HRD Design" color="red" />
        <WorkspaceItem title="Website Design" color="blue" />
      </Section>
      {/* {selectedWorkspaceId !== null && (
        <p className="text-center text-gray-500 mt-4">
          Selected Workspace ID: {selectedWorkspaceId}
          Selected Workspace Name: {selectedWorkspaceName}
        </p>
      )} */}
    </div>
  );
};

const Section = ({ title, children}) => (
  <div className="mb-4">
   <div className="flex justify-between items-center pr-10">
   <h3 className="text-gray-500 font-semibold mb-2 text-2xl     ">{title}</h3>
   </div>
    <div className="space-y-2">{children}</div>
  </div>
);

const WorkspaceItem = ({workspaceName,workspaceId, index,onMoreClick}) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const [isOpen, setIsOpen] = useState(true)
   
      function handleClick(){
      setIsOpen(!isOpen)
      console.log("Clicked workspace Id:", workspaceId)
      onMoreClick(workspaceId);
      }
    

  return (
    <div key={index}  className="flex items-center w-[350px] justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      <div className="flex items-center space-x-2 mx-8 justify-between">
        <span className={`w-3 h-3 rounded-full ${randomColor} `} ></span>
        <span className="font-medium text-2xl ml-4">{workspaceName}</span>
      </div>
      <UdateForm workspaceId={workspaceId}  isOpen={isOpen} setIsOpen={setIsOpen} />
      <MoreHorizontal onClick={handleClick} size={24} className="text-gray-400" />
    </div>
  );
};

export default WorkspaceUI;

import { redirect } from "next/navigation";
import { auth } from "../../../../auth"

export default async function DashboardPage(){

     const session = await auth();
     console.log("payload: ", session);
     if (!session?.payload?.token){
        redirect("/login");
     }else{
        redirect("/todo");
     }     
  
}
import { redirect } from "next/navigation";
import { auth } from "../../../../auth"

export default async function DashboardPage(){

     const session = await auth();
     console.log("payload: ", session);
     const sessionMap = await session.payload.token;
     if (!sessionMap){
        redirect("/login");
     }

    return(
        <>
        <h1>Dashboard Page</h1>
        </>
    )
}
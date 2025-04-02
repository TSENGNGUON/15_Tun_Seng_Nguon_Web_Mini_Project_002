
export async function loginService({email, password}){
    const res = await fetch(`http://96.9.81.187:8080/api/v1/auth/login`,{
        method: "POST",
        headers:{
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password})
        ,})
    if (!res.ok) {
        throw new Error("Failed to login")
    }
    const data = await res.json();
    console.log("data", data)
    return data;
}
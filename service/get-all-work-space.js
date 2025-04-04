export async function GetWorkSpace() 
{
    const res = await fetch(`http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,{
        method: "GET",
        headers: {
            'accept': '*/*',
            'Authorization': ` Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJzdWIiOiJzZW5nbjUxMTJAZ21haWwuY29tIiwiaWF0IjoxNzQzNjY2MjExLCJleHAiOjE3NDM3NTI2MTF9.uTQ3SRryJaXdZK6u-DS0rq34H3CvQjcC0D48x2Ve8dt-NmIwhvTLpoRWON-VQfwBHY9uePN7gGnwF4g6haNzbQ`,
           
        },
        next: {tags: ["workspace"]}
    });  
    const data = await res.json();
    
    return data;
}





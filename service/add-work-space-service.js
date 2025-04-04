export async function AddWorkSpace(workSpace){
   const res =   await fetch(`http://96.9.81.187:8080/api/v1/workspace`,
        {
            method: "POST",
            headers:{
                'accept': '*/*',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJzdWIiOiJzZW5nbjUxMTJAZ21haWwuY29tIiwiaWF0IjoxNzQzNjY2MjExLCJleHAiOjE3NDM3NTI2MTF9.uTQ3SRryJaXdZK6u-DS0rq34H3CvQjcC0D48x2Ve8dt-NmIwhvTLpoRWON-VQfwBHY9uePN7gGnwF4g6haNzbQ',
                'Content-Type':   'application/json',
            }
            ,
           body: JSON.stringify({
            workspaceName: workSpace
           }),
            next: {tags: ["workspace"]}
        }
    )
     await res.json();
    
}
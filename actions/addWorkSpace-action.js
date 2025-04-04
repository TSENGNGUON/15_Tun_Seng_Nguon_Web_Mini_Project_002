"use server"

import { revalidateTag } from "next/cache";
import { AddWorkSpace } from "../service/add-work-space-service";

export async function addWorkSpaceAction(formData) {
  const workSpaceName = formData.get("workSpaceName");
  console.log("workSpaceName: ", workSpaceName);
  await AddWorkSpace(workSpaceName);
  revalidateTag("workspace")
  // Add your logic to handle the action here, e.g., API call or state update
}
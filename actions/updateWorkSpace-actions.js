"use server";

import { revalidateTag } from "next/cache";
import { UpdateWorkSpace } from "../service/update-work-space-service";

export const UpdateWorkSpaceAction = async (formData) => {
  const workSpaceName = formData.get("workSpaceName");
  const workSpaceId = formData.get("workSpaceId");
  await UpdateWorkSpace(workSpaceId,workSpaceName);
  revalidateTag("workspace")
};
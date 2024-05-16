"use server";

import prisma from "@/lib/db";

export async function addTasks(formData: FormData) {
  await prisma.task.create({
    data: {
      title: formData.get("title") as string
    }
  });
}

import Image from "next/image";

import { addTasks } from "@/actions/actions";
import prisma from "@/lib/db";

export default async function Home() {
  const tasks = await prisma.task.findMany();
  console.log(tasks);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <form action={addTasks}>
        <input type='text' name='title' />
        <button type='submit'>Add</button>
      </form>
    </main>
  );
}

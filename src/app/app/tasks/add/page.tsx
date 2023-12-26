import AddTaskForm from "@/app/ui/tasks/AddTaskForm";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Adding Task" }

export default function Page() {

  return (
    <section>
      <AddTaskForm />
    </section>
  )
}
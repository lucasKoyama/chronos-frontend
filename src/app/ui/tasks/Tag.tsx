import { FolderOpenIcon } from "@heroicons/react/24/solid";

export default function Tag({ name, color }: { name: string, color?: string }) {
  return (
    <section>
      <h4 className="font-bold text-blue-950 flex items-center">
        <FolderOpenIcon color={color} className="w-10 cursor-pointer inline-block mr-1"/>
        {name}
      </h4>
    </section>
  )
}
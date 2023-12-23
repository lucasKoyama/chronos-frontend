import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export default function Tag() {
  return (
    <section>
      <h4 className="font-bold text-blue-950 flex items-center">
        <FolderArrowDownIcon color="darkcyan" className="w-10 cursor-pointer inline-block mr-1"/>
        Casa
      </h4>
    </section>
  )
}
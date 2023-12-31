'use client';
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function SuccessAlert(
  { title, message }:
  {
    readonly title: string,
    readonly message: string,
  }
) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => setShow(false), 1000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div
      className={clsx(
        "my-5 bg-teal-100 border-t-4 transition-all border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md",
        {
          "opacity-1": show,
          "opacity-0": !show,
        }
      )} role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <CheckCircleIcon className="w-6 mr-4" />
        </div>
        <div>
          <h4 className="font-bold">{ title }</h4>
          <p className="text-sm">{ message }</p>
        </div>
      </div>
    </div>
  )
}
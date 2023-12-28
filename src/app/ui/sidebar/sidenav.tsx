'use client';
import Link from "next/link";
import NavLinks from "./nav-links";
import { PowerIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useAuth } from "@/app/lib/utils/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Squash as Menu } from 'hamburger-react'

export default function SideNav() {
  const { logout } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push('/');
  }

  const [toggleSideBar, setToggleSideBar] = useState(false); 

  return (
    <aside
      id="separator-sidebar"
      className={clsx(
        "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0",
        {"translate-x-0": toggleSideBar}
      )}
      aria-label="Sidebar"
    >
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="block p-2 absolute -right-6 bg-blue-950/[0.3] hover:bg-blue-950 transition-all text-sm text-gray-50 rounded-lg sm:hidden focus:outline-none focus:ring-2"
        onClick={() => setToggleSideBar(!toggleSideBar)}
        onMouseLeave={() => setToggleSideBar(false)}
      >
        <Menu toggled={toggleSideBar} />
      </button>
      <div className="h-full px-3 py-4 overflow-y-auto bg-blue-950">
        <h2 className="text-4xl font-extrabold text-gray-50 drop-shadow-2xl">Chronos</h2>
        <ul className="mt-2.5 space-y-2 font-medium">
          <NavLinks />
        </ul>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-700">
          <li key="Conta">
            <Link
              href="/app/account"
              className={clsx(
                "flex h-11 grow items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 flex-none justify-start px-3",
              )}
            >
              <UserCircleIcon className="w-6" />
              <p>Conta</p>
            </Link>
          </li>
        </ul>
        <button
          className="flex h-11 grow absolute bottom-2 items-center shadow-sm gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-950 text-white flex-none justify-start px-3"
          onClick={() => handleLogout()}
        >
          <PowerIcon className="w-6" />
          <p>Sign Out</p>
        </button>
      </div>
    </aside>
  );
}

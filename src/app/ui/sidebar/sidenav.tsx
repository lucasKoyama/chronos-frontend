'use client';
import Link from "next/link";
import NavLinks from "./nav-links";
import { PowerIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useAuth } from "@/app/lib/utils/context/AuthContext";
import { useRouter } from "next/navigation";

export default function SideNav() {
  const { logout } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push('/');
  }

  return (
    <>
      <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
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
                  "flex h-11 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                )}
              >
                <UserCircleIcon className="w-6" />
                <p className="hidden md:block">Conta</p>
              </Link>
            </li>
          </ul>
          <button
            className="flex h-11 grow absolute bottom-2 items-center shadow-sm justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-950 text-white md:flex-none md:justify-start md:p-2 md:px-3"
            onClick={() => handleLogout()}
          >
            <PowerIcon className="w-6" />
            <p className="hidden md:block">Sign Out</p>
          </button>
        </div>
      </aside>
    </>
  );
}

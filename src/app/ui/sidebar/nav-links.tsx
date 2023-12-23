"use client"
import {
  HomeIcon,
  PlusCircleIcon,
  CalendarDaysIcon,
  Squares2X2Icon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home',       href: '/app',           icon: HomeIcon         },
  { name: 'Add',        href: '/app/tasks/add', icon: PlusCircleIcon   },
  { name: 'Calendar',   href: 'app/calendar',   icon: CalendarDaysIcon },
  { name: 'Priorities', href: 'app/priorities', icon: Squares2X2Icon   },
  { name: 'Pomodoro',   href: 'app/pomodoro',   icon: ClockIcon        }
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                "flex h-11 grow items-center shadow-sm justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                { 'bg-sky-100 text-blue-600 shadow-inner': pathname === link.href }
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </li>
        );
      })}
    </>
  );
}

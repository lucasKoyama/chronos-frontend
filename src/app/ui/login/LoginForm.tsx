'use client';
import { LoginData } from "@/app/lib/types/login";
import { useAuth } from "@/app/lib/utils/context/AuthContext";
import { ArrowRightEndOnRectangleIcon, AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function LoginForm() {
  const [loginData, setLoginData] = useState<Partial<LoginData>>({});
  const [loginSubmitted, setLoginSubmitted] = useState(false);

  const handleFormChange = useDebouncedCallback(
    ({ value, id }: { value: string, id: string}) => {
      setLoginData({ ...loginData, [id]: value });
    }, 200);

  const router = useRouter();
  const { user, login } = useAuth();
  const handleLogin = async () => {
    setLoginSubmitted(true);

    const userFromAPI = await login(loginData as LoginData);
    if (userFromAPI) router.push('/app');
  };

  const invalidData = !user && loginSubmitted;

  return (
    <form
      className="w-[310px] bg-gray-700/[0.2] backdrop-blur-sm p-7 rounded-3xl md:mt-28 shadow-inner border border-gray-200/[0.4]"
    >
      <div className="flex-1">
        <h1 className="text-xl font-extrabold text-gray-200">
          Sign in to manage your time like a god.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-4 block font-semibold text-gray-200"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border-2 border-gray-400/[0.2] py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                onChange={(input) => handleFormChange(input.target)}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-4 block font-semibold text-gray-200"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border-2 border-gray-400/[0.2] py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="passwordHash"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                onChange={(input) => handleFormChange(input.target)}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <button
          className="mt-5 w-full py-2 px-4 flex items-center justify-center bg-gray-500 hover:bg-gray-400 text-white font-bold rounded ring-gray-200/[0.1] hover:ring-4"
          onClick={() => handleLogin()}
          type="button"
        >
          Log in <ArrowRightEndOnRectangleIcon className="h-5 w-5 ml-1 text-gray-50 inline-block" />
        </button>
        { invalidData && <p className="text-red-600 font-semibold mt-1 text-center">Email or password invalid!</p> }
      </div>
    </form>
  )
}

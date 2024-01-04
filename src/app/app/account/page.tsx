'use client';
import { useAuth } from "@/app/lib/utils/context/AuthContext"

export default function Page() {
  const { user } = useAuth();

  return (
    <h2>Hello {user?.firstName} {user?.lastName}!</h2>
  )
}
import { Metadata } from "next"
import Loading from "../ui/Loading"

export const metadata: Metadata = { title: 'Loading...' }

export default function Page() {
  return <Loading />
}
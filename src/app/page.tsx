import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Link href="/reports">Go to Reports</Link>
    </div>
  )
}

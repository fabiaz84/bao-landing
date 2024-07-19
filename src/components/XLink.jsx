import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'

export function XLink() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6 align-middle lg:mt-0 lg:flex-shrink-0">
      <Link
        href="https://discord.gg/BW3P62vJXT"
        aria-label="Join Bao Finance on Discord"
        className="flex place-items-center space-x-2 rounded-3xl bg-gray-400 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <Image src="/icons/x.png" width="36" height="36" className="-mx-2" />
        <span className="inline justify-center align-middle font-bold">
          Follow X
        </span>
      </Link>
    </div>
  )
}

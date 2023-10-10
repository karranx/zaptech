import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  return (
    <div>
        <div className="flex itmes-center justify-between p-5">
            <Link href="/" className="text-[#28a1f7] flex items-center">
                <ArrowUturnLeftIcon className="h-5 w-5 text-[#28a1f7] mr-2" />
                Go To Website
            </Link>
        </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar

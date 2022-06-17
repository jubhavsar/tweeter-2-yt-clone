import React, {SVGProps} from 'react'
import { Interface } from 'readline'
interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

function SidebarRow({Icon, title}: Props) {
  return (
    <div className="flex items-center px-3 py-4 space-x-2 transition-all duration-200 rounded-full cursor-pointer max-w-fit group hover:bg-gray-100">
      <Icon className='w-6 h-6'/>
      <p className="hidden text-base font-light group-hover:text-tweeter md:inline-flex lg:text-xl">{title}</p>
    </div>
  )
}

export default SidebarRow
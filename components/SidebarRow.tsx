import React, {SVGProps} from 'react'
import { Interface } from 'readline'
interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

function SidebarRow({Icon, title}: Props) {
  return (
    <div>
      <Icon className='w-6 h-6'/>
      <p>{title}</p>
    </div>
  )
}

export default SidebarRow
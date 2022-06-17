import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,

} from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div>
      <img className='w-10 h-10' src="https://links.papareact.com/drq" alt="logo-img" />
      <SidebarRow  Icon={HomeIcon} title="Home"/>
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
    </div>
  )
}

export default Sidebar

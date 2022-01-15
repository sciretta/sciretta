const navAnchorClass =
  'text-lighter hover:bg-darker/40 px-3 py-2 rounded-md text-sm font-medium font-body'

function TopBar() {
  return (
    <nav className="z-10 fixed w-full backdrop-blur-sm flex items-center justify-center h-16 pl-10 pr-10 sm:justify-between">
      <img className="h-8 w-8 rounded-full" src="./avatar.png" alt="" />
      <div className=" hidden sm:block rounded-full focus:ring-white">
        <div className="flex space-x-4">
          <a href="#" className={navAnchorClass} aria-current="page">
            Who I Am
          </a>

          <a href="#" className={navAnchorClass}>
            Skills
          </a>

          <a href="#" className={navAnchorClass}>
            Experience
          </a>

          <a href="#" className={navAnchorClass}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default TopBar

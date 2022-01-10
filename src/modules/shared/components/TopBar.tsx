function TopBar() {
  return (
    <nav className="fixed bg-dark w-full backdrop-filter:blur(2px) flex items-center justify-center h-16 pl-10 pr-10 sm:justify-between">
      <div className=" hidden sm:block rounded-full focus:ring-white">
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>

      <div className="flex space-x-4">
        <a
          href="#"
          className="bg-gray-900  text-white px-3 py-2 rounded-md text-sm font-medium"
          aria-current="page"
        >
          Dashboard
        </a>

        <a
          href="#"
          className="text-light hover:bg-lighter hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Team
        </a>

        <a
          href="#"
          className="text-light hover:bg-lighter hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Projects
        </a>

        <a
          href="#"
          className="text-light hover:bg-lighter hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Calendar adssad
        </a>
      </div>
    </nav>
  )
}

export default TopBar

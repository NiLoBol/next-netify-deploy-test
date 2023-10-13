import Link from 'next/link'
function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3  '>
      <Link className='text-white font-bold' href={"/"}>Home</Link>
      <Link className='bg-white p-2 font-bold'  href={"/addtodo"}>Add todo</Link>
    </nav>
  )
}

export default Navbar

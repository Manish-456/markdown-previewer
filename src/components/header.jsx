import { ChevronsLeftRight, Expand, FileTerminal } from 'lucide-react'

export  function Header({
    title,
    handleExpansion,
    isExpanded
}) {
  return (
    <div className=" bg-secondary flex items-center justify-between px-2 border-l-0 border-t-0 border-r-0 border shadow-xl shadow-black border-black py-1">
      <div  className='flex items-center gap-1'>
        <FileTerminal size={18} />
      <h2 id="toolbar" className='text-lg  '>
        {title}
        </h2>
      </div>
      <button onClick={handleExpansion} className='outline-none border-none focus:ring-0'>
        {
          isExpanded ? <ChevronsLeftRight className='h-6 w-6 font-bold -rotate-12' /> :   <Expand  className='h-6 w-6'/>
        }
      </button>
</div>
  )
}

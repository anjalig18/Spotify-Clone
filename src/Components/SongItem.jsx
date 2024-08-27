import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'

const SongItem = ({name,image,desc,id}) => {
  const {playwithId} = useContext(PlayerContext)

  return (
    <div onClick={()=>playwithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
    <img className='roun' src={image}/>
    <p className='font-bold mt-2 mb-1'>{name}</p>
    <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem
'use client'

import { useState } from 'react';
import NoteItem from "@/components/projects/noteItem";

export default function Notes({ noteData }) {

  const animalSortFilter = [
    { name: '모두', filter: '', bgcolor: '#fff'},
    { name: '포유류', filter: '포유류', bgcolor: 'bg-[#ff9f3f99]' },
    { name: '파충류', filter: '파충류', bgcolor: '#D2B48C99' },
    { name: '양서류', filter: '양서류', bgcolor: '#A8FF9E99' },
    { name: '조류', filter: '조류', bgcolor: '#ff8bc599' },
    { name: '어류', filter: '어류', bgcolor: '#82cfff99' },
  ]
  const [selectedTag, setSelectedTag] = useState("모두");



  return (
    <div>
      <div className="flex space-x-3 flex-row items-center justify-center pt-5">
        {animalSortFilter.map((button, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-md ${
              button.name === '어류'
                ? 'bg-[#82cfff99]'
                : button.name === '양서류'
                ? 'bg-[#A8FF9E99]'
                : button.name === '파충류'
                ? 'bg-[#D2B48C99]'
                : button.name === '조류'
                ? 'bg-[#ff8bc599]'
                : button.name === '포유류'
                ? 'bg-[#ff9f3f99]'
                : 'bg-slate-600  border-2 border-gray-300'
            }`}
            onClick={() => setSelectedTag(button.name)}
          >
            {button.name}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 align-middle lg:grid-cols-4 md:grid-cols-2 px-24 py-11 max-xl:px-3 m-4 gap-8 transition-opacity ">
          {
            noteData.filter(note => selectedTag === '모두' || note.properties["태그"].multi_select.some(tag => tag.name === selectedTag)).map((note)=>(
              <NoteItem key={note.id} note={note} />
            ))
          }
        </div>

    </div>
  )
}

import Image from "next/image";

export default function NoteItem({ note }) {

  const noteImg = note.cover?.external.url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUYk9EEmfihL28UIePdXaRFFhdC0bpF5xZMg&usqp=CAU"
  const noteTitle = note.properties["이름"].title[0]?.text.content || "제목 없음"
  const noteTag = note.properties["태그"].multi_select
  const noteText = note.properties["설명"].rich_text[0]?.plain_text || "내용 없음"
  console.log('noteTitle: ', noteTitle);
  console.log('noteTag: ', noteTag);

  return (
    <>
      <div className="w-full h-auto pb-14 bg-white drop-shadow-md rounded-2xl hover:scale-105 transition-all ease-out duration-300 cursor-pointer overflow-hidden">
        <div className="w-full h-[160px] relative object-center overflow-hidden">
          <Image
            src={noteImg}
            alt="cover image"
            width={500}
            height={160}
            // layout="responsive"
            objectFit="cover"
            objectPosition="center center"
            quality={100}
          />
        </div>
        <h1 className="text-black text-base text pt-2 px-3 font-semibold">{noteTitle}</h1>
        <div className="flex items-start mt-2 px-2 pb-2">
            {noteTag.map((tag) => (
                <h1 className="px-2 py-1 mr-2 rounded-md bg-gray-100 dark:bg-slate-600 w-30 text-xs" key={tag.id}>{tag.name}</h1>
            ))}
        </div>
        <h2 className="text-black text-sm pt-1 px-3">{noteText}</h2>
        </div>
    </>
  )
}

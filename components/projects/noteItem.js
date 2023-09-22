import Image from "next/image";

export default function NoteItem({ note }) {

  const noteTitle = note.properties["이름"].title[0]?.text.content || "제목 없음"
  const noteText = note.properties["설명"].rich_text[0]?.plain_text || "내용 없음"
  const noteImg = note.cover?.external.url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUYk9EEmfihL28UIePdXaRFFhdC0bpF5xZMg&usqp=CAU"
  console.log('noteTitle: ', noteTitle);
  console.log('noteImg: ', noteImg);

  return (
    <>
      <div className="w-full h-80 p-0 bg-white drop-shadow-md rounded-2xl hover:scale-105 transition-all ease-out duration-300 cursor-pointer overflow-hidden">
        <div className="w-full h-[120px] relative object-center overflow-hidden">
          <Image
            src={noteImg}
            alt="cover image"
            width={500}
            height={120}
            // layout="responsive"
            objectFit="cover"
            objectPosition="center center"
            quality={100}
          />
        </div>
        <h1 className="text-black text-base text pt-2 px-3 font-semibold">{noteTitle}</h1>
        <h2 className="text-black text-sm pt-1 px-3">{noteText}</h2>
        </div>
    </>
  )
}

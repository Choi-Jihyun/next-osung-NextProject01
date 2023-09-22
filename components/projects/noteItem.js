import Image from "next/image";

export default function NoteItem({note}) {

  const noteTitle = note.properties["이름"].title[0]?.text.content || "제목 없음"
  const noteText = note.properties["설명"].rich_text[0]?.plain_text || "내용 없음"
  const noteImg = note.cover?.external?.url || "https://www.jne.go.kr/images/co/na/noImg.gif"
  console.log('noteTitle: ', noteTitle);
  console.log('noteImg: ', noteImg);

  return (
    <>
      <div className="p-0 bg-white drop-shadow-md rounded-2xl hover:scale-105 transition-all ease-out duration-300 cursor-pointer overflow-hidden">
        <div className="w-full h-50">
          <Image
            className="w-full h-50"
            src={noteImg}
            alt="cover image"
            width={500}
            height={190}
            layout="responsive"
            objectFit="cover"
            quality={100}
          />
        </div>
        <h1 className="text-black text-xl pt-2">{noteTitle}</h1>
        <h2 className="text-black text-base pt-1">{noteText}</h2>
      </div>
    </>
  )
}

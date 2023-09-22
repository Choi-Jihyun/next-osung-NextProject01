import Image from "next/image";

export default function NoteItem({note}) {

  const noteTitle = note.properties["이름"].title[0]?.text.content || "제목 없음"
  const noteText = note.properties["설명"].rich_text[0].plain_text || "내용 없음"
  const noteImg = note.cover.file?.url || note.cover.external.url
  console.log('noteTitle: ', noteTitle);
  console.log('noteImg: ', noteImg);

  return (
    <>
      <div className="p-6 bg-white drop-shadow-md rounded-md">
        <Image
          className="rounded-t-xl w-full h-50"
          src={noteImg}
          alt="cover image"
          width={500}
          height={190}
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
        <h1 className="text-black text-xl pt-2">{noteTitle}</h1>
        <h2 className="text-black text-base pt-1">{noteText}</h2>
      </div>
    </>
  )
}

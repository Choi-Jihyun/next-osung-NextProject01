import Image from "next/image";

export default function NoteItem({note}) {

  const noteTitle = note.properties["설명"].rich_text[0].plain_text || "제목 없음"
  const noteImg = note.cover.file?.url || note.cover.external.url
  console.log('noteTitle: ', noteTitle);
  console.log('noteImg: ', noteImg);

  return (
    <>
      <div className="p-6 bg-white drop-shadow-md rounded-md">
        <Image
          className="rounded-t-xl"
          src={noteImg}
          alt="cover image"
          width={500}
          height={190}
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
        <h1 className="text-black">{noteTitle}</h1>
      </div>
    </>
  )
}

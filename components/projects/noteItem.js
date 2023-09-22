export default function NoteItem({note}) {

  const noteTitle = note.properties["설명"].rich_text[0].plain_text

  return (
    <>
      <div className="p-6 bg-slate-400 rounded-md">
        <h1>{noteTitle}</h1>
      </div>
    </>
  )
}

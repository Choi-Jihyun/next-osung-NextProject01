import NoteItem from "@/components/projects/noteItem";
import { TOKEN, DATABASE_ID } from "@/config/index"

async function getData() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`
    },
    body: JSON.stringify({page_size: 100})
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

  const notes = res.json()


  return notes
}

export default async function Project() {
  const data = await getData()
  console.log('data: ', data)
  const noteData = data.results
  console.log('noteData[0]', noteData[0])

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 pb-10">
        <title>오성노트 보기</title>
        <meta name="description" content="Notes by osung" />
        <link rel="icon" href="/favicon.ico" />

        <h2>오성 지현의 자바스크립트 문법</h2>
        <div className="grid grid-cols-1 align-middle lg:grid-cols-4 md:grid-cols-2 p-10 m-4 gap-8 transition-opacity">
          {
            noteData.map((note)=>(
              <NoteItem key={note.id} note={note}/>
            ))
          }
        </div>
      </div>
    </>
  )
}


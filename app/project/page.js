import { TOKEN, DATABASE_ID } from "@/config/index"

export default function Project({ notes }) {

  console.log('notes: ', notes);
  console.log('DATABASE_ID: ', DATABASE_ID);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 pb-10">

          <title>Project - OSUNG</title>
          <meta name="description" content="project by osung" />
          <link rel="icon" href="/favicon.ico" />

        <h2>총 노트 수</h2>
        <div className="grid grid-cols-1 align-middle lg:grid-cols-4 md:grid-cols-2 p-10 m-4 gap-8 transition-opacity">
          
        </div>



      </div>
    </>
  )
}

export async function GetServerSideProps() {
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`
    },
    body: JSON.stringify({
      sorts: [
        {
          "property": "WorkPeriod",
          "direction": "ascending"
        }
      ],
      page_size: 100
    })
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
  const notes = await res.json()

  return {
    props: { notes }
  }
}
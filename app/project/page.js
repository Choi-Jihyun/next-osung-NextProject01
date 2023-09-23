import Notes from "@/components/projects/notes";
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
    body: JSON.stringify({
      sorts: [
        {
          "property": "title",
          "direction": "ascending"
        }
      ],
      page_size: 100
    })
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
  const noteData = data.results

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 pb-4 p-24 max-sm:p-3">
        <title>척추동물</title>
        <meta name="description" content="척추 동물의 종류와 예시를 볼 수 있습니다." />
        <link rel="icon" href="/favicon.ico" />

        <h2 className="font-bold text-lg pb-3">척추 동물 분류 어려웠죠?</h2>
        <p className="px-4">
          초등학교 교과서에 반복적으로 나오는 척추동물들을 데리고 나왔습니다!<br/>
          등뼈의 유무에 따라 등뼈가 있는 동물을 척추동물이라 하고 등뼈가 없는 동물을 무척추 동물이라고 합니다.<br/>
          그 중 '척추 동물'의 구분과 각 구분에 따른 동물을 소개하고자 합니다.
        </p>

        <Notes noteData={noteData}/>
        
      </div>
    </>
  )
}


import Link from 'next/link'
import LottieAnimation from './lottieAnimation';

export default function MyProjectsSection() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-200 body-font">
        <div className="container pb-24 mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              초등교사이며
              <br/>
              프론트엔드 개발자
              <br/>
              최지현입니다.
            </h1>
            <p className="mb-4 leading-relaxed">
              학생들을 가르칠 때, 보다 효과적으로 내용을 전달하기 위해 연구하고 누구보다 열정을 가지고 나아가고 있는 최지현입니다.
            </p>
            <p className="mb-4 leading-relaxed">
            이 사이트는 과학을 공부하는 학생들이 복잡하게 느껴질 수 있는 주제를 쉽게 이해할 수 있도록 설명하고자 제작했습니다. 척추 동물의 구분은 학생이 어려움을 겪는 주제 중 하나입니다. 
            이 사이트가 그러한 어려움을 해소하고, 척추 동물에 대한 명확한 개념을 가질 수 있도록 돕는 역할을 하면 좋겠습니다. 
            </p>
            <p className="mb-4 leading-relaxed">
            앞으로 더 다양한 주제로 준비하고자 합니다. <br/>
            방문해주셔서 감사합니다.
              {/* 코드를 작성하고 디자인을 구현하는 것을 좋아하며, 사용자 경험을 개선하고 웹 애플리케이션을 더 효율적으로 만드는 것에 대한 열망을 가지고 있습니다. 최신 웹 기술과 도구에 대한 관심이 많아, 항상 새로운 것을 배우고 프로젝트에 적용하는 데 흥미를 느끼고 있습니다.
              저는 다양한 프론트엔드 프레임워크와 라이브러리를 다루는 경험을 토대로 웹 애플리케이션을 개발하고 최적화하는 데 자신감을 가지고 있습니다. */}
            </p>
            <div className="mb-8 flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link href="/project">척추 동물 구분 바로가기</Link>
              </button>
            </div>
            {/* <p className="mb-8 leading-relaxed">
              더 자세한 정보나 협업 기회에 관심이 있다면 언제든지 연락 주세요. 함께 일하며 멋진 프로젝트를 만들어 나갈 수 있기를 소망합니다!
            </p> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <LottieAnimation />
          </div>
        </div>
      </section>
    </>
  );
}
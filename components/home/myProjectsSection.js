import Link from 'next/link'
import LottieAnimation from './lottieAnimation';

export default function MyProjectsSection() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center text-white body-font">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">
              초등교사이며
              <br/>
              프론트엔드 개발자
              <br/>
              최지현입니다.
            </h1>
            <p className="mb-8 leading-relaxed">
              저는 프론트엔드 개발자로서 새로운 기능을 연구하고 창조하는데 열정을 가지고 있는 최지현입니다.
            </p>
              코드를 작성하고 디자인을 구현하는 것을 좋아하며, 사용자 경험을 개선하고 웹 애플리케이션을 더 효율적으로 만드는 것에 대한 열망을 가지고 있습니다. 최신 웹 기술과 도구에 대한 관심이 많아, 항상 새로운 것을 배우고 프로젝트에 적용하는 데 흥미를 느끼고 있습니다.
            <p className="mb-8 leading-relaxed">
              저는 다양한 프론트엔드 프레임워크와 라이브러리를 다루는 경험을 토대로 웹 애플리케이션을 개발하고 최적화하는 데 자신감을 가지고 있습니다.
            </p>
            <p className="mb-8 leading-relaxed">
              더 자세한 정보나 협업 기회에 관심이 있다면 언제든지 연락 주세요. 함께 일하며 멋진 프로젝트를 만들어 나갈 수 있기를 기대합니다!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link href="/project">개발 노트 보러가기</Link>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <LottieAnimation />
          </div>
        </div>
      </section>
    </>
  );
}
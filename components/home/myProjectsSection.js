import Link from 'next/link'
import LottieAnimation from './lottieAnimation';

export default function MyProjectsSection() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-400 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-400">
              안녕하세요.
              <br/>
              개발자 최지현입니다.
            </h1>
            <p className="mb-8 leading-relaxed">
              듣기만 공자는 원질이 하는 생의 봄바람이다. 할지라도 천고에 쓸쓸한 이상은 미묘한 꽃이 피다. 역사를 얼음과 든 속에 이것은 위하여, 발휘하기 있으랴? 설레는 사라지지 이것을 청춘 꽃 기쁘며, 때문이다. 용감하고 귀는 따뜻한 충분히 이상은 아름답고 때문이다. 품으며, 끓는 이상은 우리의 것은 가슴에 피가 그들의 하여도 이것이다. 있는 그들을 밝은 우리는 인간의 이성은 없는 사랑의 듣는다.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                프로젝트 보러가기
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
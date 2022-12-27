import router from 'next/router'

function Footer() {
  return (
    <div className="min-h-[60vh] h-[60vh] flex justify-center flex-col items-center bg-darker text-center">
      <div className="mt-5 flex justify-center mb-4 items-center w-10/12 h-20">
        <button
          className="w-16 h-16 flex justify-center items-center mr-6"
          onClick={() => open('https://github.com/sciretta')}>
          <img src="./github.svg" alt="Github" />
        </button>
        <button
          className="w-16 h-16 flex justify-center items-center mr-6"
          onClick={() => router.replace('#contact')}>
          <img src="./gmail.svg" alt="Github" />
        </button>
        <button
          className="w-16 h-16 flex justify-center items-center mr-6"
          onClick={() =>
            open('https://www.linkedin.com/in/leonardo-sciretta-a43939201')
          }>
          <img src="./linkedin.svg" alt="Github" />
        </button>
        <button
          className="w-16 h-16 flex justify-center items-center"
          onClick={() =>
            open(
              'https://matching.turing.com/developer-resume-preview/a9c913d24334ad21702eadf9e48adb061b0f5acb575fb3',
            )
          }>
          <img src="./turing.svg" alt="Turing" />
        </button>
      </div>
      <span className="text-lighter font-normal text-md font-body flex justify-center">
        Leonardo ©
      </span>
    </div>
  )
}

export default Footer

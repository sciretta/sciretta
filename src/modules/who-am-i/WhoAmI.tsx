import Typewriter from 'typewriter-effect'

const primaryFontStyle =
  'color: #ADBECC; font-family: Open Sans, Helvetica; font-weight: 500; font-size: 1.875rem;'

function WhoAmI() {
  return (
    <div className="h-screen min-h-min flex justify-center items-center flex-col text-center">
      <div className="text-lighter text-3xl font-medium text-3xl font-body mb-10">
        Hello I am
      </div>
      <div className="text-lighter text-3xl font-medium text-6xl font-body mb-10">
        Leonardo Sciretta
      </div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .typeString(
              `<span style="${primaryFontStyle}">TypeScript, JavaScript ...</span>`,
            )
            .pauseFor(3000)
            .deleteAll(130)
            .typeString(
              `<span style="${primaryFontStyle}">Web and Mobile developer.</span>`,
            )
            .start()
        }}
        options={{
          cursor: `<span style="${primaryFontStyle}">|</span>`,
        }}
      />
      <div className="mt-5 flex justify-center items-center w-10/12 h-20">
        <button onClick={() => console.log('github')}>
          <img className="w-12 h-12 sepia-0" src="./github.svg" alt="Github" />
        </button>
        <button onClick={() => console.log('gmail')}>
          <img
            className="ml-6 mr-6 w-12 h-12 sepia-0"
            src="./gmail.svg"
            alt="Github"
          />
        </button>
        <button style={{ zIndex: 1 }} onClick={() => console.log('linkedin')}>
          <img
            className="w-12 h-12 sepia-0"
            src="./linkedin.svg"
            alt="Github"
          />
        </button>
      </div>
    </div>
  )
}

export default WhoAmI

import Typewriter from 'typewriter-effect'

const primaryFontStyle =
  'color: #ADBECC; font-family: Open Sans, Helvetica; font-weight: 500; font-size: 1.875rem;'

function WhoAmI() {
  return (
    <div className="h-screen min-h-min bg-dark flex justify-center items-center flex-col">
      <div className="text-center">
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
      </div>
    </div>
  )
}

export default WhoAmI

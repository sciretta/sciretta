import Typewriter from 'typewriter-effect'

const primaryFontStyle =
  'color: #59899D;font-size: 30px; font-family: Open Sans'

function WhoAmI() {
  return (
    <div className="h-screen min-h-min bg-dark flex justify-center items-center flex-col">
      <div>Hi im a Leonardo Sciretta</div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .typeString(
              `<span style="${primaryFontStyle}">TypeScript and JavaScript developer.</span>`,
            )
            .pauseFor(3000)
            .deleteAll()
            .typeString(
              `<span style="${primaryFontStyle}">Web and Mobile developer.</span>`,
            )
            .pauseFor(10000)
            .start()
        }}
        options={{
          loop: true,
          cursor: `<span style="${primaryFontStyle}">|</span>`,
        }}
      />
    </div>
  )
}

export default WhoAmI

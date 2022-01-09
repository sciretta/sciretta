import React from 'react'
import Typewriter from 'typewriter-effect'

function WhoAmI() {
  return (
    <>
      <Typewriter
        options={{
          strings: ['Hello', 'World'],
          autoStart: true,
          loop: true,
        }}
      />
      <div
        // style={{ fontFamily: 'Open Sans', fontSize: 50 }}
        className="bg-black"
      >
        PROBANDO las letras open sans
      </div>
    </>
  )
}

export default WhoAmI

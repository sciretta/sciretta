function Experience() {
  return (
    <div className="flex flex-col items-evenly mt-40 h-screen">
      <div className="text-lighter font-medium text-5xl font-body mb-10 flex justify-center">
        Experience
      </div>
      <div className="flex justify-between flex-col md:flex-row">
        <div
          onClick={() => open('https://www.cobuildlab.com/')}
          className={`m-4 min-h-[300px] min-w-[240px] md:h-[470px] md:w-[400px] lg:h-[570px] lg:w-[500px] bg-center md:bg-top bg-[url('/cobuildLab.png')] bg-contain bg-no-repeat px-10 hover:cursor-pointer`}
        />
        <div className="flex flex-col w-full p-8">
          <div className="flex w-full flex-col md:flex-row items-center mb-10">
            <div className=" text-center text-lighter font-medium text-3xl font-body mr-2">
              CobuildLab
            </div>
            <div className=" text-center text-lighter font-medium text-xl font-body ">
              since december 2020.
            </div>
          </div>
          <div className="flex w-full text-start text-lighter font-medium text-base font-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            odio? Sed nobis qui tenetur placeat repellat iure incidunt quasi
            nulla, earum rem quo dolores, delectus, dolore sapiente enim id
            expedita?
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

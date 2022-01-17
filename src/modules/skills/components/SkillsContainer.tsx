import React, { useRef } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import SkillCard from './SkillCard'

function SkillsContainer({ name, idx }: { name: string; idx: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  return (
    <Draggable draggableId={name} index={idx}>
      {(draggableProvided) => (
        <div
          // ref={containerRef}
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          {...draggableProvided.dragHandleProps}
          className="h-[600px] w-[340px] md:h-[900px] md:w-[380px] m-5 overflow-y-auto rounded-lg flex flex-col justify-start items-center pt-5"
          style={{ border: '1px solid yellow' }}
        >
          <div className="text-lighter text-3xl font-medium text-3xl font-body mb-10">
            {name}
          </div>
          <div className="flex flex-col justify-start items-center min-h-min">
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
          </div>
          <button
            onClick={() =>
              containerRef.current?.scrollBy({
                top: 300,
                behavior: 'smooth',
              })
            }
            className="sticky bottom-5 opacity-20 z-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <img src="./down-arrow.svg" className="h-8 w-8" alt="Down" />
          </button>
        </div>
      )}
    </Draggable>
  )
}

export default SkillsContainer

import React from "react";

export default function Events({EventList, title}) {

  return (
    <>
      <h1 className="font-semibold text-2xl p-4">{title}</h1>
      <div className="flex flex-row pb-10">
        {
          EventList.map(({id, nomeDoEvento, descricao, local}) => (
            <div className="p-4 m-4 card border border-gray-300 rounded basis-1/4" key={id}>
              <h2 className="font-bold text-xl">{nomeDoEvento}</h2>
              <p className="text-sm py-3">{descricao}</p>
              <p className="font-medium">{local}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}
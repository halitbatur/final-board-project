import React from "react";

function ListContainer({ boards }) {

  return (
        <div className="border-2 border-black min-h-[450px] md:mx-20 lg:mx-30 mb-10">
            {boards.map((board) => {
        return (
          <>
            <h1 key={board.boardId} className="bg-red-800 text-white font-bold pl-7 py-5 text-2xl">{board.title} </h1>
            <ul>
                {board.tasks.map ( (task,index) => {
                    return (
                          < React.Fragment>
                            <li key={index} className="flex-wrap md:justify-between pt-5 pb-5 px-10 text-center md:text-start md:flex md:px-8">
                            <div className="md:flex">
                            <svg className="justify-center pt-1 md:pt-1 mx-auto md:m-0" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                 <path d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 
                                  47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 
                                  63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12
                                  12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16
                                  16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16
                                  16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 
                                  16-16v-32a16 16 0 0 0-16-16z"/>
                             </svg>
                             <h4 className="font-bold text-xl md:pl-2">{task.title}</h4>
                             <p className="md:pl-3 text-lg text-center">{task.description}</p>
                            </div>
                             
                             <div className="flex justify-center pt-3 md:pt-0 md:justify-end ">
                             <svg className={{paddingTop:"6px", color: "#8B0000"}} width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16">
                                 <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 
                                 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" fill="#8B0000"></path> <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 
                                 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 
                                 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" fill="#8B0000"></path> 
                            </svg>
                            <svg className="pl-1" width="30" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8
                                 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 
                                 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 
                                 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/>
                            </svg>
                             </div>

                           </li>
                           </ React.Fragment>
                           )
                })}
            </ul>

          </>
        );
      })}
          
    
        </div>
      );
}

export default ListContainer;
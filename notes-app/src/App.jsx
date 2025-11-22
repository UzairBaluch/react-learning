import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const sumbitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, detail });

    setTask(copyTask);

    console.log(task);

    setTitle("");
    setDetail("");
  };
  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  };

  return (
    <div className=" h-screen  lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          sumbitHandler(e);
        }}
        className="flex  items-start  gap-4 flex-col p-10 lg:w-1/2"
      >
        <h1 className="text-xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="w-full font-medium px-5 py-2 border-2 rounded outline-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          className="w-full h-32 px-5 py-2 border-2 rounded outline-none font-medium"
          placeholder="Write Details"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        ></textarea>

        <button className="w-full active:bg-gray-400 bg-white text-black px-5 py-2 cursor-pointer rounded outline-none font-medium">
          Add Notes
        </button>
      </form>

      <div className=" lg:w-1/2 p-10 lg:border-l-2">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto ">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between items-start flex-col bg-cover relative h-52 w-40 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] rounded-2xl text-black pb-4 pt-9 px-5 font-bold over"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-5 font-medium leading-tight text-gray-700 ">
                    {elem.detail}
                  </p>
                </div>
                <button
                  onClick={()=>deleteNote(idx)}
                  className="w-full bg-red-500 py-1 text-xs text-white rounded font-bold cursor-pointer active:bg-red-400 "
                >
                  Delete{" "}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

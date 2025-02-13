"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [mainTask, setMainTask] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch("/api/todos");
      const data = await res.json();
      setMainTask(data);
    }
    fetchTasks();
  }, []);


  const submitHandler = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" },
    });
    const newTask = await res.json();
    setMainTask([...mainTask, newTask]);
    setTitle("");
  };


  const deleteHandler = async (id) => {
    await fetch("/api/todos", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    setMainTask(mainTask.filter((task) => task._id !== id));
  };

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        To-do List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Your Task Here"
          className="text-black text-2xl border-zinc-800 border-2 m-8 px-4 py-2"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="text-zinc-900 text-2xl bg-slate-400 m-8 px-4 py-2">
        {mainTask.length > 0 ? (
          mainTask.map((task) => (
            <li key={task._id} className="flex items-center justify-between">
              <div className="flex items-center justify-between mb-5 w-2/3">
                <h2 className="text-2xl font-semibold">{task.title}</h2>
              </div>
              <button
                onClick={() => deleteHandler(task._id)}
                className="bg-red-600 text-white px-4 py-2 rounded font-bold"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <h2>No Task Available</h2>
        )}
      </div>
    </>
  );
};

export default Page;

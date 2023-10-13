"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewtitle] = useState();
  const [newDescription, setDescription] = useState();
  const router =useRouter();

  const Submit= async(e)=>{
    e.preventDefault();
    try {
      const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics/${id}`,{
        method:"PUT",
        headers:{
          "Content-type":"appication/json"
        },
        body: JSON.stringify({newTitle,newDescription}),
      });
      if(!res.ok){
        throw new Error("Failed to Fetch update topic ");
      }
      router.push('/');
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div onSubmit={Submit} className="max-w-3xl mx-auto">
      <form className="flex flex-col gap-3 px-4">
        <input
          onChange={(e) => setNewtitle(e.target.value)}
          className="border border-slate-800 px-8 py-2"
          type="text"
          placeholder="Topic Title"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Description"
        />
        <button className="text-white bg-green-600 font-bold py-3 px-6 w-fit">
          Update Topic
        </button>
      </form>
    </div>
  );
}

export default EditTopicForm;

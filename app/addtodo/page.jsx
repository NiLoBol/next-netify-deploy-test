"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const hSubmit =async(e)=>{
    e.preventDefault();

    if(!title||!description){
      alert("ใส่ข้อมูลไม่ครบ");
      return;
    }
    try {
      const apiUrl =process.env.NEXT_PUBLIC_API_URL;
      const res =await fetch(`${apiUrl}/api/topics`,{
        method:"POST",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title,description})
      });
      if(res.ok){
        router.push('/');
        router.refresh();
      }else{
        throw new Error("Failed to Create Topic")
      }
    } catch (error) {
      
    }
  }
  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={hSubmit} className="flex flex-col gap-3 px-4">
        <input
          onChange={(e) => settitle(e.target.value)}
          className="border border-slate-800 px-8 py-2"
          type="text"
          placeholder="Topic Title"
        />
        <input
          onChange={(e) => setdescription(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Description"
        />
        <button className="text-white bg-green-600 font-bold py-3 px-6   w-fit"
         >
          Add Topic
        </button>
      </form>
    </div>
  );
}

export default Page;

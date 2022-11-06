import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createArticle, getAllArticle } from "../store/actions/articleAction";

export default function AddArticle({closeModal}) {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content,setContent] = useState('')
  const handlePublish = () => {
    const formData = {
      title,
      content
    }
    console.log(formData)
    dispatch(createArticle(formData))
    dispatch(getAllArticle())
    closeModal()
  };

  return (
    <div className="flex flex-col w-96 ">
      <div className="flex flex-col gap-4  p-2">
        <div className="flex flex-col">
          <label className="">Title</label>
          <input type="text" onChange={(e)=>setTitle(e.target.value)} className="border-gray-500 border" />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            className="border-gray-500 border"
            placeholder="title"
            onChange={(e)=>setContent(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-5 p-2 ">
          <button onClick={handlePublish}>Publish</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}

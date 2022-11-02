import React, { useState } from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";
import "/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function AddArticle() {
  const [editor, setEditor] = useState(() => EditorState.createEmpty());

  const handlePublish = () => {
    const data = {
      title: "dummy",
      content: editor,
    };
    console.log(data);
  };

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-4  p-2">
        <div className="flex flex-col">
          <label className="">Title</label>
          <input type="text" className="border-gray-500 border" />
        </div>

        {/* <input
          type="text"
          className="border-gray-500 border"
          placeholder="title"
        /> */}
        <div className="h-80 min-h-full border border-black bg-white">
          <Editor editorState={editor} onEditorStateChange={setEditor} />
        </div>
        <div className="flex justify-end gap-5 p-2 ">
          <button onClick={handlePublish}>Publish</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}

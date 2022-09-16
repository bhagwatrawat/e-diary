import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import {EditorState} from 'draft-js';
import { convertToRaw, convertFromRaw } from "draft-js";
import axios from 'axios';
import { useEffect } from "react";
import { CloudinaryContext,Image } from "cloudinary-react";
const Editor= dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), {
  ssr: false,
});
function DiaryEntry() {
    // const [diaryData,setDiaryData] =useState(data);
    const [uploadedImages,setUploadedImages] =useState([]);
    const [editorState,setEditorState] =useState(EditorState.createEmpty());

    const uploadImageCallBack=(file)=> {
      
      const imageObject = {
        file: file,
        localSrc: URL.createObjectURL(file),
      }
  
      uploadedImages.push(imageObject);
  
      setUploadedImages(uploadedImages)
      return new Promise(
        (resolve, reject) => {
          resolve({ data: { link: imageObject.localSrc } });
        }
      );
    }

    useEffect(()=>{
        axios.get('/api/addState').then(res=>{
            console.log(res.data);
            const x = res.data;
            console.log(x[0].data);
            setEditorState(EditorState.createWithContent(convertFromRaw(x[0].data)));
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
  return (
    <div>
<Editor
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
//   onEditorStateChange={EditorStateHandler}
editorState={editorState}
  toolbar={{
    inline: { inDropdown: true },
    list: { inDropdown: true },
    image: { uploadCallback : uploadImageCallBack},
  }}
/>;
    </div>
  );
}

export default DiaryEntry;

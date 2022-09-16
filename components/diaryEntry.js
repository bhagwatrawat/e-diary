import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import {EditorState} from 'draft-js';
import { convertToRaw, convertFromRaw } from "draft-js";
import axios from 'axios';
const Editor= dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), {
  ssr: false,
});
function DiaryEntry({data}) {
    const [diaryData,setDiaryData] =useState(data);
    const [uploadedImages,setUploadedImages] =useState([]);
    const [editorState,setEditorState] =useState(EditorState.createEmpty());
    const uploadImageCallBack= async (file)=> {
      let lurl;
      const data=new FormData()
    data.append("file",file)
    data.append("upload_preset","ediary")
    data.append("clound_name","dr5xrlcdk")
    try{
      const res = await axios.post(" https://api.cloudinary.com/v1_1/dr5xrlcdk/image/upload",data)
      lurl = res.data.url;
      return new Promise(
        (resolve, reject) => {
          resolve({ data: { link: lurl } });
        }
      );
    }
    catch(err){
      console.log(err);
    }
    // console.log(url);
      // const imageObject = {
      //   file: file, 
      //   localSrc: url,
      // }
  
      // uploadedImages.push(imageObject);
  
      // setUploadedImages(uploadedImages)
    }

    const EditorStateHandler=(editorState) => {
      setEditorState(editorState);
      console.log(editorState)
      const data= convertToRaw(editorState.getCurrentContent());
      axios.post('/api/addState',data).then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  return (
    <div>
<Editor
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={EditorStateHandler}
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

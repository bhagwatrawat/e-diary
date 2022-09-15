import React from "react";
import { useState } from "react";

function DiaryEntry({data}) {
    const [diaryData,setDiaryData] =useState(data);
  return (
    <div>
      <h1>The Laggers World</h1>
      <p>All About the daily dose of laggers life</p>
      <div>
        <h2>Date for todays entry</h2>
        <div contentEditable="true">title</div>
        <textarea placeholder="Write Your Day" />
      </div>
    </div>
  );
}

export default DiaryEntry;

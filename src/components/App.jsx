import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"



//making the mapping function
function createEntry(emojiTerm){
  return <Entry 
    key = {emojiTerm.id}
    emoji = {emojiTerm.emoji}
    emojiname = {emojiTerm.name}
    desc = {emojiTerm.meaning}
  />
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
        {/* <Entry emoji={emojipedia[0].emoji} emojiname={emojipedia[0].name} desc={emojipedia[0].meaning} />
        <Entry emoji={emojipedia[1].emoji} emojiname={emojipedia[1].name} desc={emojipedia[1].meaning} />
        <Entry emoji={emojipedia[2].emoji} emojiname={emojipedia[2].name} desc={emojipedia[2].meaning} /> */}
      </dl>
    </div>
  );
}

export default App;

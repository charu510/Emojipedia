import React from "react"


//making the function for isolating the entry
function Entry(props){
    return (<div className="term">
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">
                {props.emoji}
              </span>
              <span>{props.emojiname}</span>
            </dt>
            <dd>
              {props.desc}
            </dd>
    </div>
    );
}

export default Entry;
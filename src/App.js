import { useState } from "react";
import "./App.css";
import Comment from "./components/comment/comment";
import { commentsData } from "./Data/comment";

function App() {
  const [comments, setComments] = useState(commentsData);

  const handleReply = (ele, margin) => {
    return (
      <div>
        <div style={{ marginLeft: `${margin}px` }}>
          <Comment
            key={ele.key}
            id={ele.key}
            img={ele.img}
            title={ele.title}
            timeCreated={ele.timeCreated}
            setComments={setComments}
            replies={ele.replies}
            margin={margin}
            handleReply={handleReply}
          />
        </div>
        {/* {ele?.replies?.length &&
          ele?.replies?.map((el) => handleReply(el, margin + 30))} */}
      </div>
    );
  };

  return (
    <div className="App">
      {comments?.map((ele) => {
        return <>{handleReply(ele, 0)}</>;
      })}
    </div>
  );
}

export default App;

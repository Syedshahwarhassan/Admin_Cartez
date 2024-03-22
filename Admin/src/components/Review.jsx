import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { app } from "../Firebase";
import { toast } from "react-toastify";
const Review = () => {
  const db = getDatabase(app);
  const [review, setReview] = useState();
  const [reply, setReply] = useState();
  const [productid,setProductid]=useState('4203514');
  const [reviewid,setReviewid]=useState('95459');
  useEffect(() => {
    const REF = ref(db, "all/");
    onValue(REF, (snapshot) => {
      const data = snapshot.val();
      setReview(data);
    });
  }, []);
  const display = () => {
    document.getElementById("team-review").style.display="block";
  };

  const Replyteam = async() => {
    const id = Math.floor(Math.random() * 100000);
   await set(ref(db, '/all/4203514/review/95459/Reply' + id), {
      reply: reply,
    });
    toast.success("good");
  };
  return (
    <div>
      <div className="team-review" id="team-review">
        <div className="Team-container" >
          <h1>Team Reply</h1>
          <br />
          <textarea
            rows={5}
            cols={100}
            onChange={(e) => setReply(e.target.value)}
          ></textarea>
          <br></br>
          <button className="team-btn" onClick={() => Replyteam}>
            Send
          </button>
        </div>
      </div>
      {review && (
        <div className="review-main">
          {Object.entries(review).map(([keys, x]) => {

            return (
              <div className="review">
                {x.review && (
                  <div>
                    {Object.entries(x.review).map(([key, c]) => {
                    
                      return (
                        <div className="review-container" key={key}>
                          <img src={x.ImageUrl} alt="" />
                          <div className="review-detail">
                            <p>{c.User}</p>
                            <h5>{c.Title}</h5>
                            <h6>{c.Review}</h6>
                            <button
                              className="review-btn"
                              onClick={() => display()}
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Review;

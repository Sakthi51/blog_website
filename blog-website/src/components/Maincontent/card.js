import React from "react";


export default function Card(props) {

  return (
    <section>

      <div className="card-container">

        <div className="card-description">
          <div className="card-stats">
            <img style={{ marginRight: '10px' }} className="card-profile-picture" src="https://images.pexels.com/photos/2853198/pexels-photo-2853198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

            <p style={{ fontSize: "13px" }} >
              Pavel Pogosov
              <span style={{ color: "gray" }}> in </span>
              Javascript in Plain English
              <span> &#183; </span>
              <span style={{ color: "gray" }}>Jan 18</span>
            </p>
          </div>
          <div >
            <h1  style={{ marginTop: '8px', cursor:"pointer" }}>{props.title}</h1>
          </div>
          <p style={{ marginTop: '8px', fontFamily: "'Times New Roman', Times, serif", cursor:"pointer" }} className="card-summary" >
            While useState is a simple tool to use, many developers still make mistakes with it. During code reviews, I often see these mistakes made even by experienced people.
            While useStateis a simple tool to use, many developers still make mistakes with...

          </p>

          <div className="footer-stats">
            <button className="hashtag-button">programming</button>
            <button className="footer-button">7 min read</button>
            <span>&#183;</span>
            <button className="footer-button">selected for you</button>

            <div className="footer-icon-container">
              <img className="footer-icon" src="https://cdn-icons-png.flaticon.com/512/3424/3424818.png" />

              <img className="footer-icon" src="https://www.flaticon.com/svg/vstatic/svg/9585/9585487.svg?token=exp=1679632566~hmac=ba37bdd17e6827063b202861c21e9dc1" />

            </div>

          </div>
        </div>

        <div className="description-image-container">
          <img className="description-image" src={props.imageUrl} />
        </div>
      </div>
      <div>
        <hr className="ending-line"></hr>
      </div>

    </section>

  )

}
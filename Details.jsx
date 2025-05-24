// Filename - components/Detail.js

// import React from "react";

// function Detail({ selected, closeDetail }) {
//     return (
//         <section className="detail">
//             <div className="content">
//                 <h2>{selected.Title}</h2>
//                 <span>{selected.Year}</span>
//                 <p className="rating">
//                   Rating: {selected.imdbRating}
//                 </p>

//                 <div className="about">
//                   <img src={selected.Poster} alt="" />
//                   <p>{selected.Plot}</p>
//                 </div>
//                 <button className="close" onClick={closeDetail}>
//                   Close
//                 </button>
//             </div>
//         </section>
//     );
// }

// export default Detail;



import React from "react";

function Detail({ selected, closeDetail }) {
  return (
    <section className="detail">
      <div className="content">
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>

        <p className="rating">⭐ IMDb Rating: {selected.imdbRating || "N/A"}</p>

        <div className="about">
          <img
            src={selected.Poster !== "N/A" ? selected.Poster : "/no-image.png"}
            alt={`Poster of ${selected.Title}`}
          />
          <p>{selected.Plot || "No plot description available."}</p>
        </div>

        <button className="close" onClick={closeDetail}>
          Close
        </button>
      </div>
    </section>
  );
}

export default Detail;

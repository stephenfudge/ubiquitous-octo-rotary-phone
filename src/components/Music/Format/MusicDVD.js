import React from "react";
import music from "../../../seeds/musicData";

// shows the music dvds in a table with the headers of Musical Artist, Title and Media Format
const MusicDVD = () => {
  return (
    <div className="flex flex-col items-center bg-darkpurple">
   
      <div className="py-8">
        <table className="border-collapse border border-black">
          {/* column headings */}
          <thead className="text-lightpink">
            <tr>
            <th className="border border-black">Musical Artist</th>
              <th className="border border-black">Title of DVD</th>
              <th className="border border-black px-4">Media Format</th>
            </tr>
          </thead>
          {/* table content */}
          <tbody className="text-powder">
            {music
              .filter((film) => {
                return film.format === "DVD";
              })
              .map((film) => {
                return (
                  <tr key={film.id}>
                     <td className="border border-black px-4">{film.artist}</td>
                  <td className="border border-black px-4">{[film.title]}</td>
                  <td className="border border-black">{film.format}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MusicDVD;

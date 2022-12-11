import React from "react";
import wrestling from "../../../seeds/wrestlingData";

// shows the wrestling documentaries in a table with the headers of Promotion, Title, Presentation Format and Media Format
// the presentation format column is hidden on screens smaller than a medium size so that it fits properly on a small screen size

const Documentary = () => {
  return (
    <div className="flex flex-col items-center mx-auto bg-darkpurple">
            {/* header of page */}

            <div className="md:text-3xl sm: text-l text-bedazzle py-2 font-bold underline">Professional Wrestling Documentaries</div>

      <div className="py-8">
        <table className="table-auto border-collapse border border-black">
          {/* column headings */}
          <thead>
            <tr className="text-lightpink">
              <th className="border border-black px-4">Promotion</th>
              <th className="border border-black">Title</th>
              <th className="border border-black px-4 hidden md:table-cell">
                Presentation Format
              </th>
              <th className="border border-black px-4">Media Format</th>
            </tr>
          </thead>
          {/* table content  */}
          <tbody className="text-powder">
            {wrestling
              .filter((film) => {
                return film.presentation === "Documentary";
              })
              .map((film) => {
                return (
                  <tr key={film.id}>
                    <td className="border border-black">{film.promotion}</td>
                    <td className="border border-black px-4">{film.title}</td>
                    <td className="border border-black hidden md:table-cell">
                      {film.presentation}
                    </td>
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

export default Documentary;

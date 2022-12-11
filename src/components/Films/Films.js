import React from "react";
import films from "../../seeds/filmData";

// displays the feature films in a table with the headers Title and Media Format
const Films = () => {
  return (
    <div className="flex flex-col items-center bg-darkpurple">
      {/* header of page */}
      <div className="md:text-3xl sm: text-l text-bedazzle py-2 font-bold underline">Feature Films</div>

      <div className="py-8">
        <table className="border-collapse border border-black">
          {/* column headings */}
          <thead className="text-lightpink">
            <tr>
              <th className="border border-black">Title</th>
              <th className="border border-black px-4">Media Format</th>
            </tr>
          </thead>
          {/* table content */}
          <tbody className="text-powder">
            {films.map((film) => {
              return (
                <tr key={film.id}>
                  <td className="border border-black px-4">{film.title}</td>
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

export default Films;

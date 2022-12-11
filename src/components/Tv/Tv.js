import React from "react";
import tv from "../../seeds/tvData";

// shows the tv dvds with the headers of Series Name, Season and Media Format
const Tv = () => {
  return (
    <div className="flex flex-col items-center mx-auto bg-darkpurple py-2">
      {/* header of page */}
      <div className="md:text-3xl sm: text-l text-bedazzle py-2 font-bold underline">TV Shows</div>
      <div className="py-8">
        <table class="table-auto border-collapse border border-black">
          {/* column headings */}
          <thead className="text-lightpink">
            <th className="border border-black">Series Name</th>
            <th className="border border-black px-4">Season</th>
            <th className="border border-black px-4">Media Format</th>
          </thead>

          {/* table content */}
          <tbody className="text-powder">
            {tv.map((series) => {
              return (
                <tr key={series.id}>
                  <td className="border border-black px-4">{series.title}</td>
                  <td className="border border-black">{series.season}</td>
                  <td className="border border-black">{series.format}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tv;

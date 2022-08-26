import React, { useEffect } from "react";
import { News } from "features/news/types";

const NewsList = ({
  slug_Name,
  title,
  byline,
  source,
  publishedDate,
  geoFacet,
}: News) => {
  return (
    <>
      {/* <ul>
        {news.map((newsData: News) => (
          <li key={newsData.slugName}>{newsData.title}</li>
        ))}
      </ul> */}

      {title}
    </>
  );
};

export default NewsList;

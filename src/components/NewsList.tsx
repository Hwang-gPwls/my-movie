import React, { useEffect } from "react";

type News = {
  slugName: string;
  title: string;
  byline: string;
  source: string;
  publishedDate: Date;
  geoFacet: string;
};

const NewsList = ({
  slugName,
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

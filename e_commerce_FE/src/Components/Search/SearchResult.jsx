import React, { useContext, useState, useEffect } from 'react';
import {ProductContext} from '../Product/ProductContext';

function SearchResult({ searchValue }) {
  const { content, setContent } = useContext(ProductContext);
  const [searchContent, setSearchContent] = useState([]);
  //console.log('new: ' + searchValue);

  useEffect(() => {
    const newSearchContent = content.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (!searchValue) {
      setSearchContent([]);
    } else {
      setSearchContent(newSearchContent);
    }
  }, [searchValue]);

  //console.log(searchContent);

  return (
    <div className="bg-light-grey max-h-48 overflow-y-scroll mt-2 mr-10 px-4 overflow-y-auto">
      {searchContent.length <= 0 && searchValue ? (
        <p>No results found</p>
      ) : (
        searchContent.map((item) => (
          <div
            key={item.id}
            className="bg-white mt-4 p-3 border w-full h-full md:h-1/2 object-cover"
          >
            <div className="flex gap-4 md:gap-0">
              <div className="w-[30%] h-full ml-2">
                <img
                  src={item.images}
                  alt="your-image-alt"
                  className="h-full w-full md:w-[50%] object-cover"
                />
              </div>
              <div className="w-[70%] md:p-4">
                <p className="md:text-[1.5rem] font-bold">{item.title}</p>
                <p className="font-bold text-[1.25rem] md:text-[1.5rem] mt-2 text-green-900">
                  $ {item.price}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchResult;

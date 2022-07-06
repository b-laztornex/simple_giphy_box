import React, { useState, useRef, useEffect } from 'react';
import { Gif } from '../types/GiphyType';
import ModalComponent from './ModalComponent';
import ImageComponent from './ImageComponent';
import '../styles/Giphy.css';

function GiphyComponent() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<Array<Gif>>([]);
  const [gif, setGif] = useState<Gif>({});
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('trending');
  const [currentPage, setCurrentPage] = useState<number>(0);

  const incrementPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goUp = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const goDown = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ&offset=${
          currentPage * 50
        }`,
      );
      const dataList = await response.json();
      setData([...data, ...dataList.data]);
    };

    fetchData().catch();
  }, [query, currentPage]);
  return (
    <div className="giphyBox">
      <div className="giphyMenu">
        <button
          className="button"
          type="button"
          onClick={() => {
            goUp();
          }}
        >
          ⇪
        </button>
        <hr />
        <button
          className="button"
          type="button"
          onClick={() => {
            goDown();
          }}
        >
          ⇩
        </button>
      </div>
      {openModal && <ModalComponent closeModal={setOpenModal} gif={gif} />}
      <div className="giphyHeader">
        <div ref={topRef} />
        <h1>The Giphy Box Search</h1>
        <input
          className="giphyInput"
          placeholder="Search: zb. 'cheesburger'"
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setData([]);
            setCurrentPage(0);
          }}
        />
      </div>
      <div className="giphyContent">
        {data?.map((item, index) => (
          <div
            role="button"
            key={item.id}
            onClick={() => {
              setOpenModal(true);
              setGif(item);
            }}
            onKeyDown={() => {
              setOpenModal(true);
              setGif(item);
            }}
            tabIndex={index}
          >
            <ImageComponent item={item?.images?.fixed_height_small} />
          </div>
        ))}
      </div>
      <div className="giphyFooter">
        <button
          className="button"
          type="button"
          onClick={() => {
            incrementPage();
          }}
        >
          Load More
        </button>
        <p className="giphyIndicator">Current Page:{currentPage}</p>
      </div>
      <div ref={bottomRef} />
    </div>
  );
}

export default GiphyComponent;

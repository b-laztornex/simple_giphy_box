import React, { useState } from 'react';
import '../styles/Image.css';
import SpinnerComponent from './SpinnerComponent';

function ImageComponent(props: any) {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  const { item } = props;

  return (
    <div className="imageLoading">
      <img
        height={item.height}
        width={item.width}
        style={{ display: loading ? 'none' : 'block' }}
        key={item.id}
        src={item.webp}
        onLoad={imageLoaded}
        alt="giphyimg"
      />
      {loading && <SpinnerComponent />}
    </div>
  );
}

export default ImageComponent;

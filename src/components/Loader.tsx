import { useState, useEffect } from 'react';
import './Loader.css';

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader-box">
      {loading ? (
        <div className="dot-spinner">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      ) : (
        <p className="loaded-text">conten load</p>
      )}
    </div>
  );
}

export default Loader;

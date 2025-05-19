import { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div style={{ display: 'flex', gap: '5px', fontSize: '2rem', cursor: 'pointer' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          style={{ color: (hover || rating) >= star ? '#ffc107' : '#e4e5e9' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;

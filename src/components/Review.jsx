import React from 'react';

export default function Review({ review }) {

  return (
    <div className='review'>
      <h4>{review.reviewer_email} says</h4>
      <p>&ldquo;{review.review}&ldquo;</p>

    </div>
  );
}

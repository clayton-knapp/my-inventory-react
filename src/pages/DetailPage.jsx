import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { fetchSingleEquipmentItem, deleteEquipment, createReview } from '../services/fetch-utils';
import Review from '../components/Review';

export default function DetailPage() {
  const params = useParams();
  const history = useHistory();

  const [equipmentItem, setEquipmentItem] = useState('');
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);


  const fetchAndSetCallback = useCallback(
    async function fetchAndSetEquipmentItem() {
      const equipmentItem = await fetchSingleEquipmentItem(params.id);
      setEquipmentItem(equipmentItem);
      setReviews(equipmentItem.reviews);
      // console.log(reviews);
      // console.log(equipmentItem);
    },
    [params.id],
  );
  

  useEffect(() => {
    fetchAndSetCallback();
  }, [fetchAndSetCallback]);
  

  function handleURLClick() {
    window.open(equipmentItem.url);
  }

  async function handleDelete() {
    await deleteEquipment(params.id);

    history.push('/');
  }

  function handleUpdate() {
    history.push(`/update/${params.id}`);
  }

  async function handleSubmitReview(e) {
    e.preventDefault();
    await createReview(review, params.id);

    setReview('');
    
    fetchAndSetCallback();
    
  }

  // console.log(reviews);

  return (
    <div className='detail-page'>
      <div className='detail-container'>
        <h2>{equipmentItem.name}</h2>
        <h3>{equipmentItem.make} {equipmentItem.model}</h3>
        <h3>Category: {equipmentItem.category}</h3>
        <h3>Year: {equipmentItem.year} Serial: {equipmentItem.year}</h3>
        <p>Modifications: {equipmentItem.modifications}</p>
        <h3>Replacement Value: ${equipmentItem.replacement_value}</h3>
        <h3>Purchase Price: ${equipmentItem.replacement_value}</h3>
        <h4>Purchase Date: {equipmentItem.purchase_date}</h4>
        <h4>Purchased From/Seller: {equipmentItem.purchased_from}</h4>
        <h4 className='url'
          onClick={handleURLClick}
        >URL: {equipmentItem.url}</h4>
      </div>
      <button
        onClick={handleUpdate}
      >Update this entry</button>
      <button
        onClick={handleDelete}
      >Delete this entry</button>
      {/* REVIEW STRETCH */}
      <div className='review-container'>
        <h2>Leave a review:</h2>
        <form action=""
          onSubmit={handleSubmitReview}
        >
          <label htmlFor="">
            <textarea name="" id="" cols="30" rows="10" value={review}
              onChange={(e)=> setReview(e.target.value)}
            ></textarea>
          </label>
          <button>Submit Review</button>
        </form>
        <h2>Reviews:</h2>
        {
          reviews.map((review, i) =>
            <Review 
              key={review + i}
              review={review}
            />
          )
        }
      </div>
    </div>
  );
}

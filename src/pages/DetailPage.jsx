import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSingleEquipmentItem, deleteEquipment } from '../services/fetch-utils';

export default function DetailPage() {
  const params = useParams();
  const history = useHistory();

  const [equipmentItem, setEquipmentItem] = useState('');

  useEffect(() => {
    async function fetchAndSetEquipmentItem() {
      const equipmentItem = await fetchSingleEquipmentItem(params.id);
      setEquipmentItem(equipmentItem);

    }

    fetchAndSetEquipmentItem();

  }, [params.id]);
  

  function handleURLClick() {
    window.open(equipmentItem.url);
  }

  async function handleDelete() {
    await deleteEquipment(params.id);

    history.push('/');


  }

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
      <button>Update this entry</button>
      <button
        onClick={handleDelete}
      >Delete this entry</button>


    </div>
  );
}

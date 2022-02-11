import React from 'react';
import { useState } from 'react';
import { createEquipment } from '../services/fetch-utils';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form';

export default function CreatePage() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [category, setCategory] = useState('');
  const [modifications, setModifications] = useState('');
  const [year, setYear] = useState(0);
  const [serial, setSerial] = useState('');
  const [replacementValue, setReplacementValue] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [purchaseDate, setPurchaseDate] = useState('');
  const [purchasedFrom, setPurchasedFrom] = useState('');
  const [url, setUrl] = useState('');

  async function handleCreateSubmit(e) {
    e.preventDefault();

    const equipment = {
      name: name,
      make: make,
      model: model,
      category: category,
      modifications: modifications,
      year: year,
      serial: serial,
      replacement_value: replacementValue,
      purchase_price: purchasePrice,
      purchase_date: purchaseDate,
      purchased_from: purchasedFrom,
      url: url
    };

    await createEquipment(equipment);

    history.replace('/');
  }


  return (
    <div className='create-update-page'>
      <h2>Add a Piece of Equipment</h2>
      <Form 
        handleSubmit={handleCreateSubmit}
        setName={setName}
        setMake={setMake}
        setModel={setModel}
        setCategory={setCategory}
        setModifications={setModifications}
        setYear={setYear}
        setSerial={setSerial}
        setReplacementValue={setReplacementValue}
        setPurchasePrice={setPurchasePrice}
        setPurchaseDate={setPurchaseDate}
        setPurchasedFrom={setPurchasedFrom}
        setUrl={setUrl}
      />
    </div>
  );
}

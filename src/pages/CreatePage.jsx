import React from 'react';
import { useState } from 'react';
import { createEquipment } from '../services/fetch-utils';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form';

export default function CreatePage() {
  const history = useHistory();

  // const [name, setName] = useState('');
  // const [make, setMake] = useState('');
  // const [model, setModel] = useState('');
  // const [category, setCategory] = useState('');
  // const [modifications, setModifications] = useState('');
  // const [year, setYear] = useState(0);
  // const [serial, setSerial] = useState('');
  // const [replacementValue, setReplacementValue] = useState(0);
  // const [purchasePrice, setPurchasePrice] = useState(0);
  // const [purchaseDate, setPurchaseDate] = useState('');
  // const [purchasedFrom, setPurchasedFrom] = useState('');
  // const [url, setUrl] = useState('');

  const [formData, setFormData] = useState({});


  async function handleCreateSubmit(e) {
    e.preventDefault();

    // const equipment = {
    //   name: name,
    //   make: make,
    //   model: model,
    //   category: category,
    //   modifications: modifications,
    //   year: year,
    //   serial: serial,
    //   replacement_value: replacementValue,
    //   purchase_price: purchasePrice,
    //   purchase_date: purchaseDate,
    //   purchased_from: purchasedFrom,
    //   url: url
    // };

    await createEquipment({ ...formData }); //does this need a spread? not sure

    history.replace('/');
  }


  return (
    <div className='create-update-page'>
      <h2>Add a Piece of Equipment</h2>
      <Form 
        //pass it a formData prop but its an empty object so nothing will populate
        //or you could not pass it a prop but it will error unless you conditionally make the value formData.name etc
        formData={formData}
        handleSubmit={handleCreateSubmit}
        setFormData={setFormData}

        // setName={setName}
        // setMake={setMake}
        // setModel={setModel}
        // setCategory={setCategory}
        // setModifications={setModifications}
        // setYear={setYear}
        // setSerial={setSerial}
        // setReplacementValue={setReplacementValue}
        // setPurchasePrice={setPurchasePrice}
        // setPurchaseDate={setPurchaseDate}
        // setPurchasedFrom={setPurchasedFrom}
        // setUrl={setUrl}
      />
    </div>
  );
}

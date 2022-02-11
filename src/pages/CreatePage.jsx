import React from 'react';
import { useState } from 'react';
import { createEquipment } from '../services/fetch-utils';
import { useHistory } from 'react-router-dom';

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

  async function handleSubmit(e) {
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
    console.log(equipment);

    const response = await createEquipment(equipment);

    console.log(response);

    history.replace('/');
  }


  return (
    <div className='create-page'>
      <h2>Add a Peice of Equipment</h2>
      <form className='create-form'
        onSubmit={handleSubmit}
      >
        <label>
          Name/Description: 
          <input required
            onChange={(e)=> setName(e.target.value)}
          ></input>
        </label>
        <label>
          Make/Manufacturer: 
          <input
            onChange={(e)=> setMake(e.target.value)}
          ></input>
        </label>
        <label>
          Model: 
          <input
            onChange={(e)=> setModel(e.target.value)}
          ></input>
        </label>
        <label>
          Category: 
          <select
            onChange={(e)=> setCategory(e.target.value)}
          >
            <option value="Computer">Computer</option>
            <option value="Recorder">Recorder</option>
            <option value="Console">Console</option>
            <option value="Monitor">Monitor</option>
            <option value="Microphone">Microphone</option>
            <option value="Preamp">Preamp</option>
            <option value="Dynamic">Dynamic</option>
            <option value="Equalization">Equalization</option>
            <option value="Effect">Effect</option>
            <option value="Headphones">Headphones</option>
            <option value="Patchbay">Patchbay</option>
            <option value="Cabling">Cabling</option>
            <option value="Guitar/Bass">Guitar/Bass</option>
            <option value="Amp/Cab">Amp/Cab</option>
            <option value="Keys/Piano">Keys/Piano</option>
            <option value="Pedal">Pedal</option>
            <option value="Drums">Drums</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Modifications: 
          <textarea
            onChange={(e)=> setModifications(e.target.value)}
          ></textarea>
        </label>
        <label>
          Year: 
          <input type='number'
            onChange={(e)=> setYear(e.target.value)}
          ></input>
        </label>
        <label>
          Serial: 
          <input
            onChange={(e)=> setSerial(e.target.value)}
          ></input>
        </label>
        <label>
          Replacement Value: 
          <input type='number'
            onChange={(e)=> setReplacementValue(e.target.value)}
          ></input>
        </label>
        <label>
          Purchase Price: 
          <input type='number'
            onChange={(e)=> setPurchasePrice(e.target.value)}
          ></input>
        </label>
        <label>
          Purchase Date: 
          <input type='date'
            onChange={(e)=> setPurchaseDate(e.target.value)}
          ></input>
        </label>
        <label>
          Purhased From/Seller: 
          <input
            onChange={(e)=> setPurchasedFrom(e.target.value)}
          ></input>
        </label>
        <label>
          URL: 
          <input type='url'
            onChange={(e)=> setUrl(e.target.value)}
          ></input>
        </label>
        <br></br>
        <button>Submit!</button>
      </form>


    </div>
  );
}

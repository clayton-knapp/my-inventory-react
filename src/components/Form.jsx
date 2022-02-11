import React from 'react';

export default function Form({ handleSubmit, setName, setMake, setModel, setCategory, setModifications, setYear, setSerial, setReplacementValue, setPurchasePrice, setPurchaseDate, setPurchasedFrom, setUrl }) {
  return (
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


  );
}

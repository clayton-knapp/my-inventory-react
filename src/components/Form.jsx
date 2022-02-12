import React from 'react';

export default function Form({ handleSubmit, setFormData, formData }) {
  return (
    <form className='create-form'
      onSubmit={handleSubmit}
    >
      <label>
          Name/Description: 
        <input required 
          value={formData.name}
          onChange={(e)=> setFormData({ ...formData, name: e.target.value })}
        ></input>
      </label>
      <label>
          Make/Manufacturer: 
        <input 
          value={(formData) && formData.make}
          onChange={(e)=> setFormData({ ...formData, make: e.target.value })}
        ></input>
      </label>
      <label>
          Model: 
        <input 
          value={(formData) && formData.model}
          onChange={(e)=> setFormData({ ...formData, model: e.target.value })}
        ></input>
      </label>
      <label>
          Category: 
        <select 
          value={(formData) && formData.category}
          onChange={(e)=> setFormData({ ...formData, category: e.target.value })}
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
          value={(formData) && formData.modifications}
          onChange={(e)=> setFormData({ ...formData, modifications: e.target.value })}
        ></textarea>
      </label>
      <label>
          Year: 
        <input type='number' 
          value={(formData) && formData.year}
          onChange={(e)=> setFormData({ ...formData, year: e.target.value })}
        ></input>
      </label>
      <label>
          Serial: 
        <input 
          value={(formData) && formData.serial}
          onChange={(e)=> setFormData({ ...formData, serial: e.target.value })}
        ></input>
      </label>
      <label>
          Replacement Value: 
        <input type='number' 
          value={(formData) && formData.replacement_value}
          onChange={(e)=> setFormData({ ...formData, replacement_value: e.target.value })}
        ></input>
      </label>
      <label>
          Purchase Price: 
        <input type='number' 
          value={(formData) && formData.purchase_price}
          onChange={(e)=> setFormData({ ...formData, purchase_price: e.target.value })}
        ></input>
      </label>
      <label>
          Purchase Date: 
        <input type='date' 
          value={(formData) && formData.purchase_date}
          onChange={(e)=> setFormData({ ...formData, purchase_date: e.target.value })}
        ></input>
      </label>
      <label>
          Purhased From/Seller: 
        <input 
          value={(formData) && formData.purchased_from}
          onChange={(e)=> setFormData({ ...formData, purchased_from: e.target.value })}
        ></input>
      </label>
      <label>
          URL: 
        <input type='url' 
          value={(formData) && formData.url}
          onChange={(e)=> setFormData({ ...formData, url: e.target.value })}
        ></input>
      </label>
      <br></br>
      <button>Submit!</button>
    </form>


  );
}

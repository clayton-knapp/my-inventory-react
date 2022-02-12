import React from 'react';
import { useState, useEffect } from 'react';
import { updateEquipment, fetchSingleEquipmentItemAndReviews } from '../services/fetch-utils';
import { useHistory, useParams } from 'react-router-dom';
import Form from '../components/Form';

export default function UpdatePage() {
  const history = useHistory();
  const params = useParams();

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


  //on load fetch the data for this item and set to state
  useEffect(() => {
    async function fetchAndSetEquipmentItemAndReviews() {
      const equipmentItem = await fetchSingleEquipmentItemAndReviews(params.id);
      // setName(equipmentItem.name);
      // setMake(equipmentItem.make);
      // setModel(equipmentItem.model);
      // setCategory(equipmentItem.category);
      // setModifications(equipmentItem.modifications);
      // setYear(equipmentItem.year);
      // setSerial(equipmentItem.serial);
      // setReplacementValue(equipmentItem.replacement_value);
      // setPurchasePrice(equipmentItem.purchase_price);
      // setPurchaseDate(equipmentItem.purchase_date);
      // setPurchasedFrom(equipmentItem.purchased_from);
      // setUrl(equipmentItem.url);

      setFormData(equipmentItem);

      // console.log(equipmentItem);
    }
    fetchAndSetEquipmentItemAndReviews();
  }, [params.id]);
  

  async function handleUpdateSubmit(e) {
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

    // console.log(formData);

    // object was being initialized with a reviews property because of the join from supabase on fetch - but updating there is no reviews property - so we have to delete it
    delete formData.reviews;

    await updateEquipment({ ...formData }, params.id); //do I need the spread here? is it immutable?

    history.replace('/');

  }


  return (
    <div className='create-update-page'>
      <h2>Update a Piece of Equipment</h2>
      <Form 
        handleSubmit={handleUpdateSubmit}
        setFormData={setFormData}
        formData={formData}

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

        // name={name}
        // make={make}
        // model={model}
        // category={category}
        // modifications={modifications}
        // year={year}
        // serial={serial}
        // replacementValue={replacementValue}
        // purchasePrice={purchasePrice}
        // purchaseDate={purchaseDate}
        // purchasedFrom={purchasedFrom}
        // url={url}
      />
    </div>
  );
}
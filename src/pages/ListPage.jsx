import React from 'react';
import { useState, useEffect } from 'react';
import { fetchEquipmentList } from '../services/fetch-utils';
import Equipment from '../components/Equipment';

export default function ListPage() {
  //hold onto list in state
  const [equipmentList, setEquipmentList] = useState([]);

  //on load grab the list
  useEffect(() => {
    async function fetchAndSetList() {
      const list = await fetchEquipmentList();
      setEquipmentList(list);
    }

    fetchAndSetList();
  }, []);
  



  return (
    <div className='list-page'>
      <h2>Equipment List:</h2>
      <div className='list-container'>
        {
          equipmentList.map((equipment, i)=>
            <Equipment key={(equipment + i)}
              equipment={equipment}
            />
          )
        }

      </div>
    </div>
  );
}

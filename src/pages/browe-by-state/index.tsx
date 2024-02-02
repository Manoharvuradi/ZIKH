import { UpdatedButton } from 'Y/common/buttons/button';
import React from 'react'

const BrowseByState = () => {
  const handleCityAdd = () => {
    console.log('city add');
  }
  return (
    <div>
      <h1 className='text-3xl text-center mt-5 font-bold'>Browse by state</h1>
      <UpdatedButton type="submit" className="bg-red-900 text-white mx-auto hover:text-black hover:bg-white" variant={'outline'} onClick={handleCityAdd}>
        Add city
      </UpdatedButton>
    </div>
  )
}

export default BrowseByState;
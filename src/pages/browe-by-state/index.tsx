import { Button } from 'Y/common/buttons/button';
import { addState } from 'Y/redux/searchByState/actions';
import { api } from 'Y/utils/api';
import { useRouter } from 'next/router';
import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux';

const BrowseByState = () => {
  const router = useRouter();
  const { isLoading, data, error } = api.searchByState.list.useQuery();

 const dispatch = useDispatch();
  const handleCityAdd = () => {
    console.log('state added');
  }
  const handleClickState = (id: number) => {
    router.push(`/browe-by-state/${id}`);
  }
  const response = dispatch(addState("", () => { }));

  return (
    <div>
      <h1 className='text-3xl text-center mt-5 font-bold'>Browse by state</h1>
      <div className='grid grid-cols-3 w-[50%] mx-auto mt-10'>
        {data?.map((item, index) => (
          <div key={index} className='text-xl hover:underline w-[2/3]'>
            <div className=" cursor-pointer w-full" onClick={() => handleClickState(item.id)}>{item.stateName}</div>
          </div>
        ))}
      </div>
      <Button type="submit" className="bg-red-900 text-white mx-auto hover:text-black hover:bg-white" variant={'outline'} onClick={handleCityAdd}>
        Add city
      </Button>
    </div>
  )
}

export default BrowseByState;
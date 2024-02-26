import { Button } from 'Y/common/buttons/button';
import { api } from 'Y/utils/api';
import { locationLatandLong } from 'Y/utils/helpers';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const StateWithCities = () => {

  const router = useRouter();
  const stateId = router.query.id;


  const {isLoading, data, error} = api.searchCity.list.useQuery(Number(stateId));

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data) {
          const locatedLocation = await locationLatandLong("Hyderabad");
          console.log("Located location:", locatedLocation);
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchData();
  }, [data]);

  const handleClickCity = (cityName: string) => {
    router.push(`/browe-by-state/${stateId}/${cityName}`);
  }


  const handleCityAdd = () => {
    console.log('city added');
  }
  return (
    <div>
      <div className='grid grid-cols-3 w-[50%] mx-auto mt-10'>
        {data?.map((item, index) => (
          <div key={index} className='text-xl hover:underline w-[2/3]'>
            <div className=" cursor-pointer w-full" onClick={() => handleClickCity(item.cityName)}>{item.cityName}</div>
          </div>
        ))}
      </div>
      <Button type="submit" className="bg-red-900 text-white mx-auto hover:text-black hover:bg-white" variant={'outline'} onClick={handleCityAdd}>
        Add city
      </Button>
    </div>
  )
}

export default StateWithCities;
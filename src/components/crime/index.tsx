import { api } from 'Y/utils/api';
import { useRouter } from 'next/router';
import React, { useReducer } from 'react'

const CrimeDetailsShow = () => {
    const router = useRouter();
    const crimeShowId = router.query.id;
    // const {isLoading, data, error} = api.crimeTip.show.useQuery(Number(crimeShowId));
  return (
    <div>{crimeShowId}</div>
  )
}

export default CrimeDetailsShow;
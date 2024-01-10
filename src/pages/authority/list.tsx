import { api } from 'Y/utils/api';
import React, { useEffect, useState } from 'react'

function AuthorityList() {
    const {isLoading, data, error} = api.crimeTip.list.useQuery();
    const [authorityData, setAuthorityData] = useState([] as any);
    useEffect(()=>{
        if(data){
            setAuthorityData(data);
        }
    },[data]);
  return (
    <div></div>
  )
}

export default AuthorityList;
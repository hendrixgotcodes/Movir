import {useState, useEffect} from 'react'
import * as Network from 'expo-network'

export default function useOnlineStatus(){

    const [isOnline, setOnline] = useState(false)

    useEffect(()=>{

        getOnlineStatus()

    }, [])

    const getOnlineStatus =async ()=>{

        const netStatus = await Network.getNetworkStateAsync()
        setOnline(netStatus.isInternetReachable)

    }

    return isOnline


}
import { useState, useEffect } from 'react'

interface ILocation {
    latitude: number
    longitude: number
}

export const useGeoLocation = (options = {}) => {
    const [location, setLocation] = useState<ILocation | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleSuccess = (pos: GeolocationPosition) => {
        const { latitude, longitude } = pos.coords

        setLocation({
            latitude,
            longitude
        })
    }

    const handleError = (err: GeolocationPositionError) => {
        switch(err.code) {
            case err.PERMISSION_DENIED:
                setError('사용자가 Geolocation API 사용 요청 거부')
                break
            case err.POSITION_UNAVAILABLE:
                setError('획득한 위치 정보 사용 불가')
                break
            case err.TIMEOUT:
                setError('위치 정보를 획득하기 위한 요청의 허용 시간 초과')
                break
            default:
                setError('확인되지 않은 Error : ', err.message)
                break
        }
    }

    useEffect(() => {
        const { geolocation } = navigator

        if(!geolocation) {
            setError('Geolocation is not supported')
            return
        }

        geolocation.getCurrentPosition(handleSuccess, handleError, options)
    }, [options])

    return { location, error}
}
import { useEffect, useState } from 'react'
import { ScrollView, View, Text } from 'react-native'
import axios from 'axios'
import * as Location from 'expo-location';

const ClimaScreen = () => {
    const [state, setState] = useState({
        temperature: '',
        description: '',
        humidity: '',
        feels_like: '',
        wind_speed: '',
        city: '',
        country: '',
    })
    const [loadingLocation, setLoadingLocation] = useState(true)
    const [loadingWeather, setLoadingWeather] = useState(true)

    useEffect(() => {
        getClimaUbicacionActual();
    }, [])

    const getWeather = async (lat, lon) => {
        const WEATHER_API_KEY = 'c513b7224b3dd9f9cc64364aa90e2e10';
        try {
            const resul = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=es`);
            setState({
                temperature: resul.data.main.temp,
                description: resul.data.weather[0].description,
                humidity: resul.data.main.humidity,
                feels_like: resul.data.main.feels_like,
                wind_speed: resul.data.wind.speed,
                city: resul.data.name,
                country: resul.data.sys.country,
            });
        } catch (error) {
            alert(error)
        }
    }

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return null;

        const location = await Location.getCurrentPositionAsync({});

        return location;
    }

    const getClimaUbicacionActual = async () => {
        setLoadingLocation(true)
        const location = await getLocation();
        setLoadingLocation(false)
        if (location) {
            setLoadingWeather(true)
            await getWeather(location.coords.latitude, location.coords.longitude);
            setLoadingWeather(false)
        } else {
            alert('Permiso de acceso a la unicación denegado');
        }
    }

    return (
        <ScrollView>
            <View>
                <Text>Pais: {state.country}</Text>
                <Text>Ciudad: {state.city}</Text>
                <Text>Temperatura: {state.temperature} °C</Text>
                <Text>Sensacion termica: {state.feels_like} °C</Text>
                <Text>Humedad: {state.humidity} %</Text>
                <Text>Descripción: {state.description}</Text>
            </View>
            {loadingLocation &&
                <Text>Localizando ubicación</Text>}
            {loadingWeather &&
                <Text>Cargando clima</Text>}
        </ScrollView>
    )
}

export default ClimaScreen
import { View, Text, ScrollView, Button, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import { getBetweenPriceSoja, getLastPriceSoja } from '../data/PrecioGranosRosario'
import moment from 'moment';
import { currencyFormat } from '../global/Utils'

const PizarraRosario = () => {
    const [finished, setFinished] = useState(false)
    const [dataAPI, setDataAPI] = useState({
        cotizacion_Dolar: 0,
        fecha_Cotizacion_Dolar: "",
        fecha_Operacion_Pizarra: "",
        nombre_Grano: "",
        precio_Cotizacion: 0,
        precio_Dolar: 0,
    });

    useEffect(() => {
        handleActualizar()
    }, []);

    const handleActualizar = async () => {
        setFinished(false)
        const price = await getLastPriceSoja();
        setDataAPI(price)
        setFinished(true)
    }

    const handleBetweenDate = async () => {
        setFinished(false)
        const resul = await getBetweenPriceSoja(moment("20-08-2022", "DD-MM-YYYY"), moment("27-08-2022", "DD-MM-YYYY"))
        setFinished(true)
    }


    const getDateFormat = (date) => {
        return moment(date).format("DD-MM-YYYY hh:mm")
    }

    if (!finished) return <ActivityIndicator />

    return (
        <ScrollView>
            <View>
                <Text>Precio {dataAPI.nombre_Grano}: ${currencyFormat(dataAPI.precio_Cotizacion)} - u$s{currencyFormat(dataAPI.precio_Dolar)}</Text>
                <Text>Fecha cotizacion {dataAPI.nombre_Grano}: {getDateFormat(dataAPI.fecha_Operacion_Pizarra)}hs</Text>
                <Text>Cotizacion dolar: ${currencyFormat(dataAPI.cotizacion_Dolar)}</Text>
                <Text>Fecha cotizacion dolar: {getDateFormat(dataAPI.fecha_Cotizacion_Dolar)}hs</Text>
            </View>

        </ScrollView>
    )
}

export default PizarraRosario
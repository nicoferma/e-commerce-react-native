
import axios from 'axios'
import moment from 'moment';
import * as SecureStore from 'expo-secure-store';

const objectApi = {
    cotizacion_Dolar: 0,
    fecha_Cotizacion_Dolar: "",
    fecha_Operacion_Pizarra: "",
    nombre_Grano: "",
    precio_Cotizacion: 0,
    precio_Dolar: 0,
};


const getToken = async () => {
    let token = await SecureStore.getItemAsync('token_api');
    if (!token) {
        console.log("GENERANDO TOKEN NUEVO PARA PODER UTILIZAR LA API DE PRECIOS DE GRANOS DE ROSARIO");
        token = await getTokenLogin();
        if (!token.error) {
            token = token.token;
            await SecureStore.setItemAsync('token_api', token);
        }
    }
    return token;
}

const getTokenLogin = async () => {
    const apiKey = "1BE4EB16-09A7-EC11-9435-00155D09A733";
    const secret = "26c623e3505a7d619b8fa57991a4d512225210dc0b4aaa67be3249b8c648728b";
    var options = {
        method: 'post',
        url: 'https://api.bcr.com.ar/v1.0/Login',
        headers: {
            "Content-Type": "application/json",
            "api_key": apiKey,
            "secret": secret
        },
        body: '',
    };
    try {
        const res = await axios(options);
        return {
            error: false,
            token: res.data.data.token,
        };
    } catch (error) {
        return {
            error: true,
            message: error.message,
            code: error.code
        };
    }
}

const getDataWhitToken = async (token, url) => {
    try {
        const res = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': token
            },

        });
        return {
            error: false,
            data: res.data.data
        }
    } catch (error) {
        return {
            error: true,
            message: error.message,
            code: error.code
        }
    }
}

const getData = async (url) => {
    const token = await getToken();
    const data = await getDataWhitToken(token, url);
    if (data.error && (data.code === 'ERR_BAD_REQUEST')) {
        alert("El token no anda");
        await SecureStore.setItemAsync('token_api', ''); //Reestablecer token
        token = await getToken(); //incluir metodo para recuperar token
        data = await getDataWhitToken(token, url);
    }

    return data;
}

export const getLastPriceSoja = async () => {
    //----------- mm-dd-aaaa
    var hasta = moment();
    var desde = moment(hasta).subtract(7, 'days');
    desde = moment(desde).format("MM-DD-YYYY");
    hasta = moment(hasta).format("MM-DD-YYYY");
    //-----------
    const res = await getData(`https://api.bcr.com.ar/gix/v1.0/PreciosCamara?idGrano=21&fechaConcertacionDesde=${desde}&fechaConcertacionHasta=${hasta}&page=1`);
    if (res.error)
        return null
    else
        return res.data[res.data.length - 1]
}

export const getBetweenPriceSoja = async (date1, date2) => {
    date1 = moment(date1).format("MM-DD-YYYY");
    date2 = moment(date2).format("MM-DD-YYYY");
    const url = `https://api.bcr.com.ar/gix/v1.0/PreciosCamara?idGrano=21&fechaConcertacionDesde=${date1}&fechaConcertacionHasta=${date2}&page=1`;
    console.log(url);

    const array1 = ["hola1", "hola2", "hola3"]
    const array2 = ["hola4", "hola5"]
    const array3 = [...array1, ...array2]
    array1.push(array2)
    console.log("ARRAY 1 " + array1)

    const res = await getData(url);
    if (res.error)
        return null
    else
        return res.data
}

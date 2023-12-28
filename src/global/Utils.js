
export const getPriceFormat = (price) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    })
    return formatter.format(price);
  }
  
  const nameDayWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const nameMonth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  export const getStringFormatDate = (date, time = true) => {
    const dateStr = `${nameDayWeek[date.getDay()]}, ${date.getDate()} de ${nameMonth[date.getMonth()]} de ${date.getFullYear()}`;
    return time ? `${dateStr} - ${date.toLocaleTimeString()}` : dateStr;
  }
  
  export const firestoreToArray = (querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id, ...doc.data()
      });
  
    });
    return data;
  }
  
  export const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
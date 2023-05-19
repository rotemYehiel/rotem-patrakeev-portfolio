const myDetails = require('../assets/files/myDetails.json');

export default getDeveloper = async () => {
    try {
        const dataToSend = myDetails;
        return dataToSend
    } catch (err) {
        console.log("cant get data:", err)
        throw err;
    }
}


// import axios from 'axios';
// const baseUrl = (process.env.NODE_ENV !== 'development') ?
//     '/api/data/getDeveloper' :
//     '//localhost:3001/api/data/getDeveloper';

// var developerDetails;

// export default {
//     getDeveloper

// }

// async function getDeveloper() {
//     if (!developerDetails) {
//         developerDetails = axios.get(`${baseUrl}`)
//             .then(res => {
//                 return res.data
//             })
//     }
//     return developerDetails

// }


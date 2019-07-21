import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;
const getMyCigars = uid => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/cigars.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const cigars = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          cigars.push(res.data[fbKey]);
        });
      }
      resolve(cigars);
    })
    .catch(err => reject(err));
});

const getSingleCigar = cigarId => axios.get(`${baseUrl}/cigars/${cigarId}.json`);

export default { getSingleCigar, getMyCigars };

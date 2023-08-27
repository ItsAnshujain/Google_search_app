import axios from "axios";

const BASE_URL="https://www.googleapis.com/customsearch/v1";
const params={
    key:'AIzaSyCrUnD0r1yD0Evof6Ky8fdx86Kw3UvaaPs',
    cx:'37206d4b9856d4d73'
}
export const fetchDataFromApi = async (payload) => {
    const {data}=await axios.get(BASE_URL, {
        params:{...params, ...payload}
    })
    return data;
};

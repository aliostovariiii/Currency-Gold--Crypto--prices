import axios from "axios";

const BASE_URL = "https://brsapi.ir/Api/Market/Gold_Currency.php";
const API_KEY = "FreeUaUhMX0lx2CEiPR1ywSfhRNbkCQs";

export const fetchAllData = async () => {

    const response = await axios.get(`${BASE_URL}?key=${API_KEY}`);
    console.log("دیتای دریافتی از API:", response.data); // اینجا اجرا میشه
    return response.data;

};


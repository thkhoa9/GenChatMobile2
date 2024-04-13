import axios from "axios";
const getRequestGet = async (phoneNumber) => {
  try {
    const userData = {
      phoneNumber: phoneNumber,
    };
    const response = await axios.post(
      "http://172.20.10.2:6969/users/getRequestGet",
      userData
    );
    if (response.status === 200) {
      console.log("Get request get successfully!:", response.data);

      return response.data;
    } else {
      console.error("Get request get failed:", response.data);
      throw new Error("Get request get failed");
    }
  } catch (error) {
    console.error("Get request get error:", error);
    throw new Error(error);
  }
};
export default getRequestGet;

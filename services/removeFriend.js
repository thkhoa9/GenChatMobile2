import axios from "axios";
const addRequestGet = async (phoneNumberUserSend, phoneNumberUserGet) => {
  try {
    const userData = {
      phoneNumberUserSend: phoneNumberUserSend,
      phoneNumberUserGet: phoneNumberUserGet,
    };
    const response = await axios.post(
      "http://172.20.10.2:6969/users/removeFriend",
      userData
    );
    if (response.status === 200) {
      console.log("Remove friend successful:", response.data);

      return response.data;
    } else {
      console.error("Remove friend failed:", response.data);
      throw new Error("Remove friend failed");
    }
  } catch (error) {
    console.error("Remove friend error:", error);
    throw new Error(error);
  }
};
export default addRequestGet;

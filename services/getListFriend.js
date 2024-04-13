import axios from "axios";
const getListFriend = async (phoneNumberUserSend) => {
  try {
    const userData = {
      phoneNumber: phoneNumberUserSend,
    };
    const response = await axios.post(
      "http://172.20.10.2:6969/users/getListFriend",
      userData
    );
    if (response.status === 200) {
      console.log("Get list friend successful:", response.data);
      console.log("Data");
      console.log(response.data);
      return response.data;
    } else {
      console.error("Get list friend failed:", response.data);
      throw new Error("Get list friend failed");
    }
  } catch (error) {
    console.error("Get list friend:", error);
    throw new Error(error);
  }
};
export default getListFriend;

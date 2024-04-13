import axios from "axios";
const findRoomByRoomId = async (roomId) => {
  try {
    const userData = {
        roomId: roomId
    };
    const response = await axios.post(
      "http://172.20.10.2:6969/rooms/findRoomByRoomId",
      userData
    );
    if (response.status === 200) {
      console.log("Found room successful:", response.data);

      return response.data;
    } else {
      console.error("Found room failed:", response.data);
      throw new Error("Found room failed");
    }
  } catch (error) {
    console.error("Found room error:", error);
    throw new Error(error);
  }
};
export default findRoomByRoomId;
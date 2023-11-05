import axios from "axios";

export const uploadFile = async (file, fileName) => {
    const extension = fileName.split('.').pop();
    await axios.post(`https://dvxxrc75aj.execute-api.us-east-1.amazonaws.com/file`, file, {
        params: {
            extension: extension
        }
    });
}
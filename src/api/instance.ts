import axios from 'axios';

// Tạo một instance của Axios với cấu hình cơ sở URL
const instance = axios.create({
    baseURL: 'http://localhost:3000'
})
export default instance;
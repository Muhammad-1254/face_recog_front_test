
const API_BASE_URL = process.env ==="development"?"http://localhost:8000":"https://dccf-111-88-85-203.ngrok-free.app"
console.log({API_BASE_URL})
export default API_BASE_URL;

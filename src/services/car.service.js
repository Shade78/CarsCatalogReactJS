import axios from "axios"

export const CarService = {
    async getAll() {
        const response = await axios.get('http://localhost:3000/cars')  // запрос данных с сервера

        return response.data
    },

    async getById(id) {
        const response = await axios.get(`http://localhost:3000/cars/?id=${id}`)  // запрос данных с сервера

        return response.data[0]
    }
}
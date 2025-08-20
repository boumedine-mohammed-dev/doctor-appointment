import axios from "axios";

const axiosGlobal = axios.create({
    baseURL: "http://localhost:1337/api"
});

const getCategory = () => axiosGlobal.get("/categories?populate=*");
const getDoctors = () => axiosGlobal.get("/doctors?populate=*")
const getCategorielist = (categorie) => axiosGlobal.get("/doctors?populate=*&filters[category][name][$contains]=" + categorie)
const getDetalisDoctor = (documentId) => axiosGlobal.get("/doctors/" + documentId + "?populate=*");
const bookAppointment = (data) => axiosGlobal.post("/appointments", data);
const getmybooking = (email) => axiosGlobal.get("appointments?filters[email][$eq]=" + email + "&populate[doctor][populate]=image");
const deletebook = (documentId) => axiosGlobal.delete("appointments/" + documentId);
export default {
    getCategory,
    getDoctors,
    getCategorielist,
    getDetalisDoctor,
    bookAppointment,
    getmybooking,
    deletebook
}
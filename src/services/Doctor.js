/** @format */
// import { Axios } from "./index";
import axios from "axios";

export const getAllDoctors = () => {
    return axios.get(`http://localhost:3000/api/doctor/list`);
};

export const createDoctor = (data) => {
    return axios.post(`http://localhost:3000/api/doctor/create`, data);
};

export const updateDoctor = (id, doctor) => {
    return axios.put(`http://localhost:3000/api/doctor/update/${id}`, doctor);
};

export const deleteDoctor = (doctorId) => {
    return axios.delete(`http://localhost:3000/api/doctor/delete/${doctorId}`);
};
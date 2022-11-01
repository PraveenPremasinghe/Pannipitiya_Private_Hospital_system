/** @format */
// import { Axios } from "./index";
import axios from "axios";

export const getAllPatients = () => {
    return axios.get(`http://localhost:3000/api/patient/list`);
};

export const createPatient = (data) => {
    return axios.post(`http://localhost:3000/api/patient/create`, data);
};

export const updatePatient = (id, patient) => {
    return axios.put(`http://localhost:3000/api/patient/update/${id}`, patient);
};

export const deletePatient = (patientId) => {
    return axios.delete(`http://localhost:3000/api/patient/delete/${patientId}`);
};
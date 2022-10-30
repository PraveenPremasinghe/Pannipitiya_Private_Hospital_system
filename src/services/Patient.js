/** @format */
import { Axios } from "./index";

export const getAllPatients = () => {
    return Axios.get(`/patient/list`);
};

export const createPatient = (data) => {
    return Axios.post(`/patient/create`, data);
};

export const updatePatient = (id, patient) => {
    return Axios.put(`/patient/update/${id}`, patient);
};

export const deletePatient = (patientId) => {
    return Axios.delete(`/patient/delete/${patientId}`);
};
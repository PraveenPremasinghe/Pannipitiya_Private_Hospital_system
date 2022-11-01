/** @format */
// import { Axios } from "./index";
import axios from "axios";

export const getAllAppointments = () => {
    return axios.get(`http://localhost:3000/api/Appointment/list`);
};

export const createAppointment = (data) => {
    return axios.post(`http://localhost:3000/api/Appointment/create`, data);
};

export const updateAppointments = (id, Appointment) => {
    return axios.put(`http://localhost:3000/api/Appointment/update/${id}`, Appointment);
};

export const deleteAppointments = (AppointmentId) => {
    return axios.delete(`http://localhost:3000/api/Appointment/delete/${AppointmentId}`);
};
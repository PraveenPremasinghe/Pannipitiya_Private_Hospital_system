/** @format */
// import { Axios } from "./index";
import axios from "axios";

export const getAllStaff = () => {
    return axios.get(`http://localhost:3000/api/Staff/list`);
};

export const createStaff = (data) => {
    return axios.post(`http://localhost:3000/api/Staff/create`, data);
};

export const updateStaff = (id, Staff) => {
    return axios.put(`http://localhost:3000/api/Staff/update/${id}`, Staff);
};

export const deleteStaff = (StaffId) => {
    return axios.delete(`http://localhost:3000/api/Staff/delete/${StaffId}`);
};
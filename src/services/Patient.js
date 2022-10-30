/** @format */
import { Axios } from "./index";

export const getAllPatients = () => {
    return Axios.get(`/patient/list`);
};

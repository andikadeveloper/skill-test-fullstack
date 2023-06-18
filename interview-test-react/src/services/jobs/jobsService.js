import { buildParams } from "../../utils/helper/buildParams";
import Axios from "../services"

export const jobsListApi = async (params) => {
    try {
        const queryParams = buildParams({
            page: params.page,
            location: params.location,
            description: params.description,
            full_time: params.fullTime,
        });

        const path = `jobs${queryParams}`;
        return await Axios.get(path);
    } catch (error) {
        return error.response;
    }
}

export const jobsDetailApi = async (id) => {
    try {
        const path = `jobs/${id}`;
        return await Axios.get(path);
    } catch (error) {
        return error.response; s
    }
}
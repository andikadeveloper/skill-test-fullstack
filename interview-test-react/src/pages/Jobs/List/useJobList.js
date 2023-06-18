import { useDispatch, useSelector } from "react-redux";
import { resolveGetJobsList, setParams } from "../../../stores/jobs/jobs.reducer";

const useJobList = () => {
    const dispatch = useDispatch();

    const {
        params,
        jobsListData,
        jobsListStatus,
        jobsListMessage,
    } = useSelector((state) => state.jobs);

    const handleGetListJob = () => {
        dispatch(resolveGetJobsList(params));
    };

    const handleSetParams = (name, value) => {
        dispatch(setParams({ name, value }))
    };

    const handleNextPage = () => {
        handleSetParams('page', params.page + 1);
    };

    const handlePreviousPage = () => {
        handleSetParams('page', params.page - 1);
    };

    return {
        params,
        jobsListData,
        jobsListStatus,
        jobsListMessage,
        handleGetListJob,
        handleSetParams,
        handleNextPage,
        handlePreviousPage,
    }
};

export default useJobList;
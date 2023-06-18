import { useDispatch, useSelector } from "react-redux";
import { resolveGetJobsDetail } from "../../../stores/jobs/jobs.reducer";

const useJobDetail = () => {
    const dispatch = useDispatch();
    const {
        jobsDetailStatus,
        jobsDetailMessage,
        jobsDetailData,
    } = useSelector((state) => state.jobs);

    const handleGetDetailJob = (id) => {
        dispatch(resolveGetJobsDetail(id));
    }

    return {
        jobsDetailMessage,
        jobsDetailStatus,
        jobsDetailData,
        handleGetDetailJob,
    }
};

export default useJobDetail;
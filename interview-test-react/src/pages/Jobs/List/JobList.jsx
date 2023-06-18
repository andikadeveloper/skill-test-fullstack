import React, { useEffect } from "react";
import Card from "../../../components/Card";
import useJobList from "./useJobList";
import JobCard from "./Components/JobCard";
import { useNavigate } from "react-router-dom";
import TextInput from "../../../components/TextInput";
import { STATE_STATUS } from "../../../utils/constants/stateStatus";

const JobList = () => {
    const navigate = useNavigate();
    const {
        params,
        jobsListData,
        jobsListStatus,
        jobsListMessage,
        handleSetParams,
        handleGetListJob,
        handleNextPage,
        handlePreviousPage,
    } = useJobList();

    useEffect(() => {
        handleGetListJob();
    }, [params]);

    return (
        <>
            <Card bgColor={'bg-slate-300'} padding="p-6">
                <Card bgColor={'bg-white'} padding="p-4">
                    <div className="flex items-end">
                        <div className="flex-1 mr-4">
                            <TextInput
                                id="description"
                                name="description"
                                type="text"
                                autoComplete="text"
                                placeholder={'Ex: Java, Ruby'}
                                title={'Job Descriptions'}
                                value={params.description}
                                onInput={(value) => { handleSetParams('description', value) }} />
                        </div>

                        <div className="flex-1 mr-4">
                            <TextInput
                                id="location"
                                name="location"
                                type="text"
                                autoComplete="text"
                                placeholder={'Ex: Indonesia, United states'}
                                title={'Location'}
                                value={params.location}
                                onInput={(value) => { handleSetParams('location', value) }} />
                        </div>

                        <div className="mr-4 ">
                            <input onInput={({ target }) => handleSetParams('fullTime', target.value)} id="default-checkbox" type="checkbox" value={params.fullTime} className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-600 dark:focus:ring-indigo-600 dark:ring-offset-white focus:ring-2 dark:bg-white dark:border-indigo-600" />
                            <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">Full Time Only</label>
                        </div>
                    </div>

                    <div className="flex justify-between mt-8">
                        {
                            params.page > 1 ? (
                                <>
                                    <button className="text-base  rounded-r-none focus:outline-none flex justify-center rounded font-bold cursor-pointer text-gray-700" onClick={handlePreviousPage}>
                                        <div className="flex leading-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left w-5 h-5">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                            Previous</div>
                                    </button>
                                </>
                            ) : <div />
                        }

                        <button onClick={handleNextPage} className="text-base  rounded-l-none border-l-0  hover:scale-110 focus:outline-none flex justify-center text-gray-700 rounded font-bold cursor-pointer ">
                            <div class="flex leading-5">Next
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-5 h-5 ml-1">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                        </button>
                    </div>

                </Card>

                {
                    jobsListStatus === STATE_STATUS.success && (
                        <>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                {jobsListData.map((item, index) => {
                                    return <JobCard job={item} key={index} onClick={() => {
                                        navigate(`/jobs/${item.id}`);
                                    }} />
                                })}
                            </div>
                        </>
                    )
                }
            </Card>
        </>
    );
}

export default JobList;
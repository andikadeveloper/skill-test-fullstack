import { useEffect } from "react";
import Card from "../../../components/Card";
import useJobDetail from "./useJobDetail";
import { useNavigate, useParams } from 'react-router';
import { formatToHistoryDate } from "../../../utils/helper/dateHelper";
import SolidButton from "../../../components/Button/SolidButton";

const JobDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        jobsDetailData,
        jobsDetailStatus,
        jobsDetailMessage,
        handleGetDetailJob,
    } = useJobDetail();

    useEffect(() => {
        if (id) {
            handleGetDetailJob(id);
        }
    }, [id])


    const jobDescriptionHtml = jobsDetailData.description;
    const jobDescription = { __html: jobDescriptionHtml };

    const jobHowToApplyHtml = jobsDetailData.how_to_apply;
    const jobHowToApply = { __html: jobHowToApplyHtml };
    return (
        <>
            <div className="flex px-4 py-4 bg-slate-300">
                <Card bgColor={'bg-white'}>
                    <div>
                        <button className="text-base  rounded-r-none focus:outline-none flex justify-center rounded font-bold cursor-pointer text-gray-700" onClick={() => {
                            navigate(-1);
                        }}>
                            <div className="flex leading-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left w-5 h-5">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                                Back</div>
                        </button>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                        <span className="bg-green-500 rounded-full uppercase text-white text-sm px-4 py-1 font-bold shadow-xl">{jobsDetailData.type}</span>

                        <button onClick={() => window.open(jobsDetailData.url)} className="mr-2 my-1 uppercase tracking-wider px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white border text-sm font-semibold rounded py-1 transition transform duration-500 cursor-pointer">Apply</button>
                    </div>


                    <div className="mt-4 text-lg font-semibold text-bookmark-blue flex space-x-1 items-center mb-2">
                        <svg className="w-7 h-7 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                        <span>{`${jobsDetailData.title ?? ''} at ${jobsDetailData.company}`}</span>
                    </div>

                    <div className="text-sm text-gray-500 flex space-x-1 items-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{jobsDetailData.location}</span>
                    </div>

                    <div className="mt-2 text-sm text-gray-500 flex space-x-1 items-center">
                        <span>{formatToHistoryDate(jobsDetailData.created_at)}</span>
                    </div>

                    <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

                    <div dangerouslySetInnerHTML={jobDescription} />

                </Card>

                <div className="flex-1 ml-4">
                    <div className="flex flex-col">
                        <Card bgColor={'bg-white'}>
                            <h3 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Company Profile
                            </h3>
                            <hr className="mt-2 mb-4 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                            <div className="flex">
                                <img
                                    src={jobsDetailData.company_logo}
                                    placeholder="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                    className="h-24 w-24 rounded-full"
                                    alt="" />
                                <div className="ml-4 flex flex-col">
                                    <h5 className="w-40 truncate text-xl font-bold leading-9 tracking-tight text-gray-900">
                                        {jobsDetailData.company}
                                    </h5>

                                    <div className="text-sm text-gray-500 flex space-x-1 items-center">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{jobsDetailData.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <a href={jobsDetailData.company_url} target="_blank" className="font-medium text-indigo-600 dark:text-indigo-600 hover:underline">{jobsDetailData.company_url}</a>
                            </div>

                        </Card>

                        <div className="mt-4">
                            <Card bgColor={'bg-white'}>
                                <h3 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                    How to apply
                                </h3>

                                <hr className="mt-2 mb-4 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

                                <div className="mt-4" dangerouslySetInnerHTML={jobHowToApply} />
                            </Card>
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
};

export default JobDetail;
import dayjs from 'dayjs';

export const formatToHistoryDate = (date) => {
    const now = dayjs();
    const jobCreatedAt = dayjs(date, 'EEE MMMM DD HH:mm:ss "Z" YYYY');

    const currentMonth = now.format('MM');
    const jobMonth = jobCreatedAt.format('MM');

    if (parseInt(currentMonth) > parseInt(jobMonth)) {
        return jobCreatedAt.format('DD MMMM YYYY');
    }

    const currentDate = now.format('DD');
    const jobDate = jobCreatedAt.format('DD');

    const diffDay = parseInt(currentDate) - parseInt(jobDate)

    if (diffDay > 1 && diffDay <= 7) {
        return $`${diffDay} Days ago`;
    }

    if (jobDate === currentDate) {
        const currentHour = now.format('hh');
        const jobHour = jobCreatedAt.format('hh');

        const diffHour = parseInt(currentHour) - parseInt(jobHour)

        if (diffHour >= 1) {
            return $`${diffHour} Hours ago`
        }

        return jobCreatedAt.format('hh:mm a');
    }

    return jobCreatedAt.format('DD MMMM YYYY');
}
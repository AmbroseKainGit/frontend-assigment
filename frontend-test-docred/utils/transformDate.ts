import moment from "moment";

export const transformDate = (date: string) => {
    const newDate = moment(date);
    return `${newDate.format('DD')} of ${newDate.format('MMMM')} ${newDate.format('YYYY')}`;
};
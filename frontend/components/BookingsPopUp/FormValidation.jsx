import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    user_Name: Yup.string().required('User name is required'),
    contact_No: Yup.string().required('Contact number is required').matches(/^\d{10}$/, 'Contact number must be 10 digits'),
    Date: Yup.date().required('Date is required'),
    time_slot: Yup.string().required('Time slot is required'),
    user_email: Yup.string().email('Invalid email').required('Email is required'),
    no_of_players: Yup.string().required('Number of players is required'),
});




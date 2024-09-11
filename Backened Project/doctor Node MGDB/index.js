import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/usermodel.js'; // Ensure the path is correct
import Doctor from './models/doctormodel.js'; // Ensure the path is correct
import Appointment from './models/appointment.js'; // Ensure the path is correct

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/doctor_appointment', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if unable to connect
});

// *******************************CLIENT**************************************//

// Register User
app.post('/api/user/registerUser', async (req, res) => {
    const { name, pass } = req.body;
    try {
        if (!name || !pass) {
            return res.status(400).json({ msg: 'Please fill all fields' });
        }
        let user = await User.findOne({ name, pass });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        user = new User({ name, pass });
        await user.save();
        res.status(200).json({ msg: 'Success' });
    } catch (err) {
        console.error('Error registering user:', err); // Detailed error logging
        res.status(500).json({ msg: 'Server Error' });
    }
});

// Login User
app.post('/api/user/loginUser', async (req, res) => {
    const { name, pass } = req.body;
    try {
        if (!name || !pass) {
            return res.status(400).json({ msg: 'Please fill all fields' });
        }
        let user = await User.findOne({ name, pass });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        res.status(200).json({ msg: 'Success', userid: user._id });
    } catch (err) {
        console.error('Error logging in user:', err); // Detailed error logging
        res.status(500).json({ msg: 'Server Error' });
    }
});

// Fetch doctors by category
app.get('/api/user/getDoc_byCategory/:category', async (req, res) => {
    const { category } = req.params;
    try {
        if (!category) {
            return res.status(400).json({ msg: 'Please provide a category' });
        }
        const doctors = await Doctor.find({ speciality: category });
        if (doctors.length === 0) {
            return res.status(404).json({ msg: 'No doctors found in this category' });
        }
        res.status(200).json({ msg: doctors });
    } catch (err) {
        console.error('Error fetching doctors by category:', err); // Detailed error logging
        res.status(500).json({ msg: 'Server Error' });
    }
});

// Fetch appointments by patient ID and status "booked"
app.get('/api/user/getAppointments_byPatientId/:pat_id', async (req, res) => {
    const { pat_id } = req.params;
    try {
        if (!pat_id) {
            return res.status(400).json({ msg: 'Please provide a patient ID' });
        }
        const appointments = await Appointment.find({ pat_id, status: "booked" });
        if (appointments.length === 0) {
            return res.status(404).json({ msg: 'No appointments found' });
        }
        res.status(200).json({ msg: appointments });
    } catch (err) {
        console.error('Error fetching appointments by patient ID:', err); // Detailed error logging
        res.status(500).json({ msg: 'Server Error' });
    }
});

// Route for booking an appointment
app.post('/api/user/bookAppointment', async (req, res) => {
    const { pname, dname, age, disease, phone, pat_id, doc_id, spec } = req.body;
    try {
        if (!pname || !dname || !age || !disease || !phone || !pat_id || !doc_id || !spec) {
            return res.status(400).json({ msg: "Please fill all fields" });
        }
        const newAppointment = new Appointment({
            pname,
            dname,
            age,
            disease,
            phone,
            pat_id,
            doc_id,
            spec,
            status: "booked"
        });
        await newAppointment.save();
        res.status(200).json({ msg: 'Success', appointment: newAppointment });
    } catch (err) {
        console.error('Error booking appointment:', err); // Detailed error logging
        res.status(500).json({ msg: 'Server Error' });
    }
});

// *********************************DOCTOR*************************************//

// Login Doctor
app.post('/api/doctor/loginDoctor', async (req, res) => {
    const { name, pass } = req.body;
    try {
        if (!name || !pass) {
            return res.status(400).json({ msg: 'Please fill all fields' });
        }
        let doctor = await Doctor.findOne({ name, pass });
        if (!doctor) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        res.status(200).json({ msg: 'Success', userid: doctor._id });
    } catch (err) {
        console.error('Error logging in doctor:', err); // Detailed error logging
        res.status(500).json({ msg: 'Server Error' });
    }
});

// Fetch appointments by doctor ID and status "booked"
app.get('/api/doctor/getAppointments_byDoctorId/:doc_id', async (req, res) => {
    const { doc_id } = req.params;
    try {
        if (!doc_id) {
            return res.status(400).json({ msg: 'Please provide a doctor ID' });
        }
        const appointments = await Appointment.find({ doc_id, status: "booked" });
        if (appointments.length === 0) {
            return res.status(404).json({ msg: 'No appointments found' });
        }
        res.status(200).json({ msg: appointments });
    } catch (err) {
        console.error('Error fetching appointments by doctor ID:', err); // Detailed error logging
        res.status(500).json({ msg: 'Server Error' });
    }
});

// Route to update appointment status to "done" by ID
app.put('/api/doctor/updateAppointmentStatus/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({ msg: "Invalid appointment ID format" });
        }
        const appointment = await Appointment.findById(_id);
        if (!appointment) {
            return res.status(404).json({ msg: 'Appointment not found' });
        }
        appointment.status = 'done';
        await appointment.save();
        res.status(200).json({ msg: 'Success', updatedAppointment: appointment });
    } catch (err) {
        console.error('Error updating appointment status:', err); // Detailed error logging
        res.status(500).json({ msg: 'Server Error' });
    }
});

const port = 5600;
app.listen(port, () => console.log(`Server is running on port ${port}`));

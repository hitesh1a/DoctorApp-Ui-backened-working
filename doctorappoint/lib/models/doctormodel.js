import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/doctor_appointment')
  .then(() => console.log('Connected!')); 

const doctor_table = new mongoose.Schema({
    name:String,
    pass:String,
    doc_name:String,
    exp:String,
    about:String,
    speciality: String

});

export default mongoose.model("doctor", doctor_table);
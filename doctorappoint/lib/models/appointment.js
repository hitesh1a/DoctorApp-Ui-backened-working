import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/doctor_appointment')
  .then(() => console.log('Connected!')); 


  
  //-- Schema for user table -- //

  const appointment_table = new mongoose.Schema({
    pname: String,
    dname: String,
    disease:String,
    phone:String,
    pat_id: String,
    doc_id: String,
    spec:String,
    status:String,

  });

  export default mongoose.model("user", appointment_table);



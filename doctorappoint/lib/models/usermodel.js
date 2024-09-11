import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/doctor_appointment')
  .then(() => console.log('Connected!')); 





  //-- Schema for user table -- //

  const user_table = new mongoose.Schema({
    name: String,
    pass: String
  });

  export default mongoose.model("user", user_table);




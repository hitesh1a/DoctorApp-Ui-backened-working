import express from "express";
// import user from "./models/usermodel.js"
import user from "./models/usermodel.js";
import doctor from "./models/doctormodel.js";
import appointment from "./models/appointment.js";

// const express = require('express')

const app = express()




app.use(express.urlencoded({extended:true})) // used to send data in api with url
app.use(express.json()) // The data we are sending in body is converted to json



//-------------CLIENT-----------//


// Regester User
app.post('/api/user/registerUser', async (req, res) => {
    const {name, pass} = req.body;
   try {
    if(name || !pass)
    {
        return res.status(400).json({msg:'Pls fill all fields'});
    }
  let User = await user.findOne({name,pass});
  if (User) {
    return res.status(400).json({msg:'User already exists'});
  }

  User = new user({
    name,
    pass
  });
  
  await User.save();

  res.status(200).json({msg:'Success'});

}

catch (err) 
{
     error.status(500).json({ msg: 'Server Error'});
}

});


// Login User
app.post('/api/user/loginUser',async (req, res) => {
    const { name, pass } = req.body;

    try
    {
       if(!name || !pass)
       {
          return res.status(400).json({msg:'Pls fill all fields'});
       }
    let User = await user.findOne({name,pass});
    if(!User)
    {
        return res.status(400).json({ msg: 'Invalid credentials'});
    }

    res.status(200).json({ msg: 'Success', userid:User_id});
    
}

catch (err)
{
    res.status(500).json({ msg: 'Server Error'});
}
});


// Fetch doctors by category

app.get('/api/user/getDoc_byCategory/:category', async (req,res) => {
    const { category } = req.params;

    try {
        if(!category) 
        {
            return res.status(400).json({msg: 'Pls fill all fields'});
        }
    const doctors = await doctor.find({ speciality: category});

    if (doctors.length == 0) {
        return res.status(400).json({msg:'No doctors found in this category'});
    } 

    res.status(200).json({msg: doctors});

}
catch (err) 
{
    res.status(500).json({msg:'Server Error'});
}
});



// Fetch appointments by patient ID and status "booked"

app.get('/api/user/getAppointments_byPatientId/:pat', async (req,res) => {
    const { pat_id } = req.params;

    try {

        if(!pat_id)
        {
            return res.status(400).json({msg:'Pls fill all fields'});
        }
    const appointments = await appointment.find({pat_id, status:"booked"});


    if(appointments.length == 0) {
        return res.status(400).json({ msg: 'No appointment yet !!'});
    }
    
    res.status(200).json({msg: appointment});
    }

    catch(err)
    {
       res.status(500).json({msg: 'Server Error'}); 
    }
});


// Route for booking an appointment 
app.post('/api/user/bookAppointment', async (req,res) => {
    const { pname, dname, age, disease, phone, pat_id, doc_id, spec } = req.body;


    try {
        if(!pname || !dname || !age || !disease || !phone || !pat_id || !doc_id || !spec )
        {
            return res.status(400).json({msg:"Pls fill all fields"})
        }
      const newAppointment = new appointment({
        pname,
        dname,
        age,
        disease,
        phone,
        pat_id,
        doc_id,
        spec,
        status: "booked",
      });

      await newAppointment.save();

      res.status(200).json({msg:'Success',appointment: newAppointment });
    }
    catch (err)
    {
        res.status(500).json({msg:'Server Error'});
    }
});


// Fetch appointments by patient ID and status "booked"
app.get('/api/user/getAppointments_byPatientId/:pat_id', async (req,res) => {
});


// Route for booking an appoitment
app.post('/api/user/bookAppointment', async (req, res) => {
});


const port = 5600
app.listen(port,()=>console.log('server is running in port',port)) 


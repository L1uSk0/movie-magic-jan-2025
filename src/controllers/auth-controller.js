import express from "express";
import authService from "../services/auth-service.js";
import { getErrorMassage } from "../utils/error.utils.js";

const authController = express.Router();

authController.get('/register' ,(req, res) => {
  res.render('auth/register');
})

authController.post('/register', async (req, res) => {
  const userData = req.body;
try {
  await authService.register(userData);
  
} catch (error) {
  console.log(getErrorMassage(err));
  // console.log(error.errors.email.message);
  // console.log(error.errors.password.message);
}

  res.redirect('/auth/login');
});

authController.get('/login' , (req, res) => {
  res.render('auth/login');
})

authController.post('/login' , async (req, res) => {
  const {email,password} = req.body;

try {
   const token =  await authService.login(email,password);
    res.cookie('auth',token,{httpOnly:true});
    res.redirect('/');
} catch (error) {
    console.log(error.message);
    res.redirect('/404')
}

 
})

authController.get('/logout', (req, res) => {
  res.clearCookie('auth');
  res.redirect('/');
})

export default authController;
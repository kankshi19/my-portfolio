import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const form = useRef<HTMLFormElement>(null);

  // EmailJS configuration
  const EMAIL_SERVICE_ID = 'service_gneydharma'; // Replace with your EmailJS service ID
  const EMAIL_TEMPLATE_ID = 'template_0yxq18n'; // Replace with your EmailJS template ID
  const EMAIL_PUBLIC_KEY = '6GF0O1ieMTBKhVLk9'; // Replace with your EmailJS public key

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous status
    setSubmitStatus(null);
    
    // Validation
    const isNameValid = name.trim() !== '';
    const isEmailValid = email.trim() !== '' && validateEmail(email.trim());
    const isMessageValid = message.trim() !== '';

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      return;
    }

    setIsLoading(true);

    try {
      // Template parameters that will be sent to your email
      const templateParams = {
        from_name: name.trim(),
        from_email: email.trim(),
        message: message.trim(),
        to_email: 'shahkankshi@gmail.com', // Your email address
        reply_to: email.trim(),
      };

      console.log('Sending email with params:', templateParams);

      const response = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams,
        EMAIL_PUBLIC_KEY
      );

      console.log('Email sent successfully!', response.status, response.text);
      
      // Reset form and show success message
      setName('');
      setEmail('');
      setMessage('');
      setSubmitStatus('success');
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  // Common sx styles for text fields to ensure text visibility
  const textFieldStyles = {
    '& .MuiInputBase-input': {
      color: "#050f0b !important",
      WebkitTextFillColor: '#050f0b !important',
    },
    '& .MuiInputBase-inputMultiline': {
      color: '#050f0b !important',
      WebkitTextFillColor: '#050f0b !important',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#5000ca',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5000ca',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#050f0b',
      fontSize: '1.2rem',
      fontFamily: 'DomaineDispNar-Medium, sans-serif',
      '&.Mui-focused': {
        color: '#5000ca',
      },
    },
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          
          {submitStatus === 'success' && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Thank you for your message! I'll get back to you soon.
            </Alert>
          )}
          
          {submitStatus === 'error' && (
            <Alert severity="error" sx={{ mb: 2 }}>
              Sorry, there was an error sending your message. Please try again or contact me directly at shahkankshi@gmail.com
            </Alert>
          )}
          
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError && e.target.value.trim() !== '') {
                    setNameError(false);
                  }
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                disabled={isLoading}
                sx={textFieldStyles}
              />
              <TextField
                required
                id="outlined-required-email"
                label="Email"
                placeholder="How can I reach you?"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError && e.target.value.trim() !== '') {
                    setEmailError(false);
                  }
                }}
                error={emailError}
                helperText={emailError ? "Please enter a valid email address" : ""}
                disabled={isLoading}
                sx={textFieldStyles}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (messageError && e.target.value.trim() !== '') {
                  setMessageError(false);
                }
              }}
              error={messageError}
              helperText={messageError ? "Please enter your message" : ""}
              disabled={isLoading}
              sx={textFieldStyles}
            />
            <Button 
              variant="contained" 
              endIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
              type="submit"
              disabled={isLoading}
              sx={{ mt: 2 }}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
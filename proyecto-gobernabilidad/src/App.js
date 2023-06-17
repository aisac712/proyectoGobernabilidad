import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString();
    //alert(email + " " + timestamp + "\n" + subject + "\n" + description);

    const requestBody = `
      <issue>
        <subject>${subject}, sent by ${email} at ${timestamp}</subject>
        <description>${description}</description>
      </issue>
    `;

    try {
      const response = await fetch('https://npr3s.com/control/projects/gti-1265-1167/issues.xml?key=5c57fde2d7058e78a578c071058c1ab85db870a3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/xml',
        },
        body: requestBody
      });

      if (response.ok) {
        Swal.fire("Issue reported", "Thank you!", "success");
        // Reset form fields
        setSubject('');
        setDescription('');
      } else {
        Swal.fire(response.status, "Error creating issue", "error");
      }
    } catch (error) {
      Swal.fire(error, "Error creating issue", "error");
    }
  };



  return (
    <div>
      <div class="bg text-center">

        {/*Div for Centered Text & Input*/}
        <div class="centered">

          <p class="firstLine"> R &nbsp; E &nbsp; P &nbsp; O &nbsp; R &nbsp; T &nbsp; . &nbsp; M &nbsp; E </p>

          <p class="secondLine">Report an Issue</p>

          <form onSubmit={handleSubmit}>
            <p> <input class="InputStyle" type="email" id="emailLogin" placeholder='Email' required
              value={email} onChange={(e) => setEmail(e.target.value)} /> </p>

            <p> <input class="InputStyle" type="text" id="emailLogin" placeholder='Subject' required
              value={subject} onChange={(e) => setSubject(e.target.value)} /> </p>

            <p><textarea class="InputStyle" id="textIssue" placeholder="I found a bug..." required
              value={description} onChange={(e) => setDescription(e.target.value)} /></p>

            <button class="btn btn-primary" type="submit" value="Submit">Submit</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default App;

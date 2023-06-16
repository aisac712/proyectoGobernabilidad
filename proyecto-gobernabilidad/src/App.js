import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [email, setEmail] = useState('');
  const [textIssue, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(email+"\n"+textIssue)
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

            <p><textarea class="InputStyle" id="textIssue" placeholder="I found a bug..." required
              value={textIssue} onChange={(e) => setText(e.target.value)} /></p>

            <button class="btn btn-primary" type="submit" value="Submit">Submit</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default App;

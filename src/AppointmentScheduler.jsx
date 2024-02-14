import React, { useState } from 'react';

const AppointmentScheduler = () => {
  const [timeSlots, setTimeSlots] = useState([
    // Paste the timeSlots array here
  ]);

  const handleSave = () => {
    const thisFname = document.getElementById('user_Fname').value;
    const thisLname = document.getElementById('user_Lname').value;
    const thisDate = document.getElementById('userDate').value;
    const selectedOption = document.getElementById('userTime').options[document.getElementById('userTime').selectedIndex];
    const thisHourIdx = parseInt(selectedOption.getAttribute('data-hourIdx'));
    const thisHourBlockIdx = parseInt(selectedOption.getAttribute('data-hourBlockIdx'));
    const thisTime = selectedOption.value;

    const newItem = { fname: thisFname, lname: thisLname };

    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots[thisHourIdx].hourBlocks[thisHourBlockIdx].registrants.push(newItem);
    setTimeSlots(updatedTimeSlots);
  };

  return (
    <div style={{ border: '1px solid red', width: '60%', margin: '0 auto', minHeight: '300px' }}>
      <table border="2" cellpadding="5" cellspacing="5" align="center">
        <tbody>
          <tr>
            <td><input type="text" id="user_Fname" placeholder="First Name" /></td>
            <td><input type="text" id="user_Lname" placeholder="Last Name" /></td>
          </tr>
          <tr>
            <td>
              <input id="userDate" placeholder="Select Date" />
            </td>
            <td>
              <select id="userTime">
                {/* Map time slots here */}
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button id="saveButton" onClick={handleSave}>Schedule Bloodwork</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentScheduler;

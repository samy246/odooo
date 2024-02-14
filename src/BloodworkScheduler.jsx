// import React, { useState } from 'react';

// const BloodworkScheduler = () => {
//   const [userFname, setUserFname] = useState('');
//   const [userLname, setUserLname] = useState('');
//   const [userDate, setUserDate] = useState('');
//   const [userTime, setUserTime] = useState('');
//   const [timeSlots, setTimeSlots] = useState([
//     {
//       hour: '8:00 AM',
//       hourBlocks: [
//         { blockTime: '8:00', registrants: [] },
//         { blockTime: '8:10', registrants: [] },
//         { blockTime: '8:20', registrants: [] },
//         { blockTime: '8:30', registrants: [] },
//         { blockTime: '8:40', registrants: [] },
//         { blockTime: '8:50', registrants: [] }
//       ]
//     },
//     {
//       hour: '9:00 AM',
//       hourBlocks: [
//         { blockTime: '9:00', registrants: [] },
//         { blockTime: '9:10', registrants: [] },
//         { blockTime: '9:20', registrants: [] },
//         { blockTime: '9:30', registrants: [] },
//         { blockTime: '9:40', registrants: [] },
//         { blockTime: '9:50', registrants: [] }
//       ]
//     },
//     {
//       hour: '10:00 AM',
//       hourBlocks: [
//         { blockTime: '10:00', registrants: [] },
//         { blockTime: '10:10', registrants: [] },
//         { blockTime: '10:20', registrants: [] },
//         { blockTime: '10:30', registrants: [] },
//         { blockTime: '10:40', registrants: [] },
//         { blockTime: '10:50', registrants: [] }
//       ]
//     }
//   ]);

//   const handleSaveAppointment = () => {
//     const newItem = { fname: userFname, lname: userLname };
//     const [hourIdx, hourBlockIdx] = userTime.split(':').map(Number);
//     const updatedTimeSlots = [...timeSlots];
//     updatedTimeSlots[hourIdx].hourBlocks[hourBlockIdx].registrants.push(newItem);
//     setTimeSlots(updatedTimeSlots);
//     setUserFname('');
//     setUserLname('');
//     setUserDate('');
//     setUserTime('');
//   };

//   return (
//     <div id="wrapper">
//       <table border="2" cellpadding="5" cellspacing="5" align="center">
//         <tbody>
//           <tr>
//             <td><input type="text" value={userFname} onChange={(e) => setUserFname(e.target.value)} placeholder="First Name" /></td>
//             <td><input type="text" value={userLname} onChange={(e) => setUserLname(e.target.value)} placeholder="Last Name" /></td>
//           </tr>
//           <tr>
//             <td>
//               <input type="text" value={userDate} onChange={(e) => setUserDate(e.target.value)} placeholder="Select Date" />
//             </td>
//             <td>
//               <select value={userTime} onChange={(e) => setUserTime(e.target.value)}>
//                 {timeSlots.map((hourSlot, hourIdx) => (
//                   hourSlot.hourBlocks.map((block, blockIdx) => (
//                     <option key={`${hourIdx}-${blockIdx}`} value={`${hourIdx}:${blockIdx}`}>{block.blockTime}</option>
//                   ))
//                 ))}
//               </select>
//             </td>
//           </tr>
//           <tr>
//             <td colSpan="2" align="center">
//               <button id="saveButton" onClick={handleSaveAppointment}>Schedule Bloodwork</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BloodworkScheduler;


// 2nd try
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const BloodworkScheduler = () => {
//   const [userFname, setUserFname] = useState('');
//   const [userLname, setUserLname] = useState('');
//   const [userDate, setUserDate] = useState(new Date());
//   const [userTime, setUserTime] = useState('');
//   const [timeSlots, setTimeSlots] = useState(
//     [
//     {
//       hour: '8:00 AM',
//       hourBlocks: [
//         { blockTime: '8:00', registrants: [] },
//         { blockTime: '8:10', registrants: [] },
//         { blockTime: '8:20', registrants: [] },
//         { blockTime: '8:30', registrants: [] },
//         { blockTime: '8:40', registrants: [] },
//         { blockTime: '8:50', registrants: [] }
//       ]
//     },
//     {
//       hour: '9:00 AM',
//       hourBlocks: [
//         { blockTime: '9:00', registrants: [] },
//         { blockTime: '9:10', registrants: [] },
//         { blockTime: '9:20', registrants: [] },
//         { blockTime: '9:30', registrants: [] },
//         { blockTime: '9:40', registrants: [] },
//         { blockTime: '9:50', registrants: [] }
//       ]
//     },
//     {
//       hour: '10:00 AM',
//       hourBlocks: [
//         { blockTime: '10:00', registrants: [] },
//         { blockTime: '10:10', registrants: [] },
//         { blockTime: '10:20', registrants: [] },
//         { blockTime: '10:30', registrants: [] },
//         { blockTime: '10:40', registrants: [] },
//         { blockTime: '10:50', registrants: [] }
//       ]
//     }
//   ]
//   );

//   const handleSaveAppointment = () => {
//     const newItem = { fname: userFname, lname: userLname };
//     const [hourIdx, hourBlockIdx] = userTime.split(':').map(Number);
//     const updatedTimeSlots = [...timeSlots];
//     updatedTimeSlots[hourIdx].hourBlocks[hourBlockIdx].registrants.push(newItem);
//     setTimeSlots(updatedTimeSlots);
//     setUserFname('');
//     setUserLname('');
//     setUserTime('');
//   };

//   return (
//     <div id="wrapper">
//       <table border="2" cellpadding="5" cellspacing="5" align="center">
//         <tbody>
//           <tr>
//             <td><input type="text" value={userFname} onChange={(e) => setUserFname(e.target.value)} placeholder="First Name" /></td>
//             <td><input type="text" value={userLname} onChange={(e) => setUserLname(e.target.value)} placeholder="Last Name" /></td>
//           </tr>
//           <tr>
//             <td>
//               <DatePicker selected={userDate} onChange={date => setUserDate(date)} placeholderText="Select Date" />
//             </td>
//             <td>
//               <select value={userTime} onChange={(e) => setUserTime(e.target.value)}>
//                 {timeSlots.map((hourSlot, hourIdx) => (
//                   hourSlot.hourBlocks.map((block, blockIdx) => (
//                     <option key={`${hourIdx}-${blockIdx}`} value={`${hourIdx}:${blockIdx}`}>{block.blockTime}</option>
//                   ))
//                 ))}
//               </select>
//             </td>
//           </tr>
//           <tr>
//             <td colSpan="2" align="center">
//               <button id="saveButton" onClick={handleSaveAppointment}>Schedule Bloodwork</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BloodworkScheduler;


// 3rd try

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const BloodworkScheduler = () => {
//   const [userFname, setUserFname] = useState('');
//   const [userLname, setUserLname] = useState('');
//   const [userDate, setUserDate] = useState(new Date());
//   const [userTime, setUserTime] = useState('');
//   const [timeSlots, setTimeSlots] = useState([
//     {
//       hour: '8:00 AM',
//       hourBlocks: [
//         { blockTime: '8:00', registrants: [] },
//         { blockTime: '8:10', registrants: [] },
//         { blockTime: '8:20', registrants: [] },
//         { blockTime: '8:30', registrants: [] },
//         { blockTime: '8:40', registrants: [] },
//         { blockTime: '8:50', registrants: [] }
//       ]
//     },
//     {
//       hour: '9:00 AM',
//       hourBlocks: [
//         { blockTime: '9:00', registrants: [] },
//         { blockTime: '9:10', registrants: [] },
//         { blockTime: '9:20', registrants: [] },
//         { blockTime: '9:30', registrants: [] },
//         { blockTime: '9:40', registrants: [] },
//         { blockTime: '9:50', registrants: [] }
//       ]
//     },
//     {
//       hour: '10:00 AM',
//       hourBlocks: [
//         { blockTime: '10:00', registrants: [] },
//         { blockTime: '10:10', registrants: [] },
//         { blockTime: '10:20', registrants: [] },
//         { blockTime: '10:30', registrants: [] },
//         { blockTime: '10:40', registrants: [] },
//         { blockTime: '10:50', registrants: [] }
//       ]
//     }
//   ]);

//   const handleSaveAppointment = () => {
//     const newItem = { fname: userFname, lname: userLname };
//     const [hourIdx, hourBlockIdx] = userTime.split(':').map(Number);
//     const updatedTimeSlots = [...timeSlots];
//     updatedTimeSlots[hourIdx].hourBlocks[hourBlockIdx].registrants.push(newItem);
//     setTimeSlots(updatedTimeSlots);
//     setUserFname('');
//     setUserLname('');
//     setUserTime('');
//   };

//   // Function to filter out already booked time slots
//   const getAvailableTimeSlots = () => {
//     return timeSlots.flatMap(hourSlot => {
//       return hourSlot.hourBlocks.filter(block => block.registrants.length === 0);
//     });
//   };

//   return (
//     <div id="wrapper">
//       <table border="2" cellpadding="5" cellspacing="5" align="center">
//         <tbody>
//           <tr>
//             <td><input type="text" value={userFname} onChange={(e) => setUserFname(e.target.value)} placeholder="First Name" /></td>
//             <td><input type="text" value={userLname} onChange={(e) => setUserLname(e.target.value)} placeholder="Last Name" /></td>
//           </tr>
//           <tr>
//             <td>
//               <DatePicker selected={userDate} onChange={date => setUserDate(date)} placeholderText="Select Date" />
//             </td>
//             <td>
//               <select value={userTime} onChange={(e) => setUserTime(e.target.value)}>
//                 {getAvailableTimeSlots().map((block, index) => (
//                   <option key={index} value={block.blockTime}>{block.blockTime}</option>
//                 ))}
//               </select>
//             </td>
//           </tr>
//           <tr>
//             <td colSpan="2" align="center">
//               <button id="saveButton" onClick={handleSaveAppointment}>Schedule Bloodwork</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BloodworkScheduler;

// 4th try--schedle bok
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const BloodworkScheduler = () => {
//   const [userFname, setUserFname] = useState('');
//   const [userLname, setUserLname] = useState('');
//   const [userDate, setUserDate] = useState(new Date());
//   const [userTime, setUserTime] = useState('');
//   const [timeSlots, setTimeSlots] = useState([
//     {
//       hour: '8:00 AM',
//       hourBlocks: [
//         { blockTime: '8:00', registrants: [] },
//         { blockTime: '8:10', registrants: [] },
//         { blockTime: '8:20', registrants: [] },
//         { blockTime: '8:30', registrants: [] },
//         { blockTime: '8:40', registrants: [] },
//         { blockTime: '8:50', registrants: [] }
//       ]
//     },
//     {
//       hour: '9:00 AM',
//       hourBlocks: [
//         { blockTime: '9:00', registrants: [] },
//         { blockTime: '9:10', registrants: [] },
//         { blockTime: '9:20', registrants: [] },
//         { blockTime: '9:30', registrants: [] },
//         { blockTime: '9:40', registrants: [] },
//         { blockTime: '9:50', registrants: [] }
//       ]
//     },
//     {
//       hour: '10:00 AM',
//       hourBlocks: [
//         { blockTime: '10:00', registrants: [] },
//         { blockTime: '10:10', registrants: [] },
//         { blockTime: '10:20', registrants: [] },
//         { blockTime: '10:30', registrants: [] },
//         { blockTime: '10:40', registrants: [] },
//         { blockTime: '10:50', registrants: [] }
//       ]
//     }
//   ]);

//   const handleSaveAppointment = () => {
//     if (userTime === '') {
//       alert('Please select a time slot.');
//       return;
//     }

//     const newItem = { fname: userFname, lname: userLname };
//     const [hourIdx, hourBlockIdx] = userTime.split(':').map(Number);
//     const updatedTimeSlots = [...timeSlots];
//     console.log("updated time",updatedTimeSlots);
//     if (updatedTimeSlots[hourIdx] && updatedTimeSlots[hourIdx].hourBlocks[hourBlockIdx]) {
//       updatedTimeSlots[hourIdx].hourBlocks[hourBlockIdx].registrants.push(newItem);
//       setTimeSlots(updatedTimeSlots);
//     } else {
//       alert('Invalid time slot selected.');
//     }
    
//     setUserFname('');
//     setUserLname('');
//     setUserTime('');
//   };

//   return (
//     <div id="wrapper">
//       <table border="2" cellpadding="5" cellspacing="5" align="center">
//         <tbody>
//           <tr>
//             <td><input type="text" value={userFname} onChange={(e) => setUserFname(e.target.value)} placeholder="First Name" /></td>
//             <td><input type="text" value={userLname} onChange={(e) => setUserLname(e.target.value)} placeholder="Last Name" /></td>
//           </tr>
//           <tr>
//             <td>
//               <DatePicker selected={userDate} onChange={date => setUserDate(date)} placeholderText="Select Date" />
//             </td>
//             <td>
//               <select value={userTime} onChange={(e) => setUserTime(e.target.value)}>
//                 {timeSlots.map((hourSlot, hourIdx) => (
//                   hourSlot.hourBlocks.map((block, blockIdx) => (
//                     <option key={`${hourIdx}-${blockIdx}`} value={`${hourIdx}:${blockIdx}`}>{block.blockTime}</option>
//                   ))
//                 ))}
//               </select>
//             </td>
//           </tr>
//           <tr>
//             <td colSpan="2" align="center">
//               <button id="saveButton" onClick={handleSaveAppointment}>Schedule Bloodwork</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BloodworkScheduler;


// 5th--done
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const BloodworkScheduler = () => {
//   const [userFname, setUserFname] = useState('');
//   const [userLname, setUserLname] = useState('');
//   const [userDate, setUserDate] = useState(new Date());
//   const [userTime, setUserTime] = useState('');
//   const [timeSlots, setTimeSlots] = useState([
//     {
//       hour: '8:00 AM',
//       hourBlocks: [
//         { blockTime: '8:00', registrants: [] },
//         { blockTime: '8:10', registrants: [] },
//         { blockTime: '8:20', registrants: [] },
//         { blockTime: '8:30', registrants: [] },
//         { blockTime: '8:40', registrants: [] },
//         { blockTime: '8:50', registrants: [] }
//       ]
//     },
//     {
//       hour: '9:00 AM',
//       hourBlocks: [
//         { blockTime: '9:00', registrants: [] },
//         { blockTime: '9:10', registrants: [] },
//         { blockTime: '9:20', registrants: [] },
//         { blockTime: '9:30', registrants: [] },
//         { blockTime: '9:40', registrants: [] },
//         { blockTime: '9:50', registrants: [] }
//       ]
//     },
//     {
//       hour: '10:00 AM',
//       hourBlocks: [
//         { blockTime: '10:00', registrants: [] },
//         { blockTime: '10:10', registrants: [] },
//         { blockTime: '10:20', registrants: [] },
//         { blockTime: '10:30', registrants: [] },
//         { blockTime: '10:40', registrants: [] },
//         { blockTime: '10:50', registrants: [] }
//       ]
//     }
//   ]);

//   const handleSaveAppointment = () => {
//     if (userTime === '') {
//       alert('Please select a time slot.');
//       return;
//     }

//     const newItem = { fname: userFname, lname: userLname };
//     const [hourIdx, hourBlockIdx] = userTime.split(':').map(Number);
//     const updatedTimeSlots = [...timeSlots];

//     // Check if the selected time slot is available
//     if (updatedTimeSlots[hourIdx] && updatedTimeSlots[hourIdx].hourBlocks[hourBlockIdx].registrants.length === 0) {
//       updatedTimeSlots[hourIdx].hourBlocks[hourBlockIdx].registrants.push(newItem);
//       setTimeSlots(updatedTimeSlots);
//       console.log("update time",updatedTimeSlots);
//     } else {
//       alert('Selected time slot is not available.');
//     }

//     setUserFname('');
//     setUserLname('');
//     setUserTime('');
//   };

//   // Function to get available time slots
//   const getAvailableTimeSlots = () => {
//     const availableTimeSlots = [];
//     timeSlots.forEach((hourSlot, hourIdx) => {
//       hourSlot.hourBlocks.forEach((block, blockIdx) => {
//         if (block.registrants.length === 0) {
//           availableTimeSlots.push({ hourIdx, blockIdx, blockTime: block.blockTime });
//         }
//       });
//     });
//     return availableTimeSlots;
//   };

//   return (
//     <div id="wrapper">
//       <table border="2" cellpadding="5" cellspacing="5" align="center">
//         <tbody>
//           <tr>
//             <td><input type="text" value={userFname} onChange={(e) => setUserFname(e.target.value)} placeholder="First Name" /></td>
//             <td><input type="text" value={userLname} onChange={(e) => setUserLname(e.target.value)} placeholder="Last Name" /></td>
//           </tr>
//           <tr>
//             <td>
//               <DatePicker selected={userDate} onChange={date => setUserDate(date)} placeholderText="Select Date" />
//             </td>
//             <td>
//               <select value={userTime} onChange={(e) => setUserTime(e.target.value)}>
//                 {getAvailableTimeSlots().map(({ hourIdx, blockIdx, blockTime }, index) => (
//                   <option key={index} value={`${hourIdx}:${blockIdx}`}>{blockTime}</option>
//                 ))}
//               </select>
//             </td>
//           </tr>
//           <tr>
//             <td colSpan="2" align="center">
//               <button id="saveButton" onClick={handleSaveAppointment}>Schedule Bloodwork</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BloodworkScheduler;


// 6th try
// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const BloodworkScheduler = () => {
//   const [userFname, setUserFname] = useState('');
//   const [userLname, setUserLname] = useState('');
//   const [userDate, setUserDate] = useState(new Date());
//   const [userTime, setUserTime] = useState('');
//   const [timeSlots, setTimeSlots] = useState([
//     {
//       hour: '8:00 AM',
//       hourBlocks: [
//         { blockTime: '8:00', registrants: [] },
//         { blockTime: '8:10', registrants: [] },
//         { blockTime: '8:20', registrants: [] },
//         { blockTime: '8:30', registrants: [] },
//         { blockTime: '8:40', registrants: [] },
//         { blockTime: '8:50', registrants: [] }
//       ]
//     },
//     {
//       hour: '9:00 AM',
//       hourBlocks: [
//         { blockTime: '9:00', registrants: [] },
//         { blockTime: '9:10', registrants: [] },
//         { blockTime: '9:20', registrants: [] },
//         { blockTime: '9:30', registrants: [] },
//         { blockTime: '9:40', registrants: [] },
//         { blockTime: '9:50', registrants: [] }
//       ]
//     },
//     {
//       hour: '10:00 AM',
//       hourBlocks: [
//         { blockTime: '10:00', registrants: [] },
//         { blockTime: '10:10', registrants: [] },
//         { blockTime: '10:20', registrants: [] },
//         { blockTime: '10:30', registrants: [] },
//         { blockTime: '10:40', registrants: [] },
//         { blockTime: '10:50', registrants: [] }
//       ]
//     }
//   ]);

//   const [bookedAppointments, setBookedAppointments] = useState([]);

//   useEffect(() => {
//     // Load booked appointments from localStorage on component mount
//     const savedAppointments = localStorage.getItem('bookedAppointments');
//     if (savedAppointments) {
//       setBookedAppointments(JSON.parse(savedAppointments));
//     }
//   }, []);

//   useEffect(() => {
//     // Save booked appointments to localStorage whenever it changes
//     localStorage.setItem('bookedAppointments', JSON.stringify(bookedAppointments));
//   }, [bookedAppointments]);

//   const handleSaveAppointment = () => {
//     if (userTime === '') {
//       alert('Please select a time slot.');
//       return;
//     }

//     const newItem = { fname: userFname, lname: userLname, date: userDate, time: userTime };
//     const [hourIdx, hourBlockIdx] = userTime.split(':').map(Number);
//     const updatedTimeSlots = [...timeSlots];

//     // Check if the selected time slot is available
//     if (updatedTimeSlots[hourIdx] && updatedTimeSlots[hourIdx].hourBlocks[hourBlockIdx].registrants.length === 0) {
//       updatedTimeSlots[hourIdx].hourBlocks[hourBlockIdx].registrants.push(newItem);
//       setTimeSlots(updatedTimeSlots);
//       setBookedAppointments([...bookedAppointments, newItem]);
//     } else {
//       alert('Selected time slot is not available.');
//     }

//     setUserFname('');
//     setUserLname('');
//     setUserTime('');
//   };

//   const getAvailableTimeSlots = () => {
//     const availableTimeSlots = [];
//     timeSlots.forEach((hourSlot, hourIdx) => {
//       hourSlot.hourBlocks.forEach((block, blockIdx) => {
//         if (block.registrants.length === 0) {
//           availableTimeSlots.push({ hourIdx, blockIdx, blockTime: block.blockTime });
//         }
//       });
//     });
//     return availableTimeSlots;
//   };

//   return (
//     <div id="wrapper">
//       <table border="2" cellpadding="5" cellspacing="5" align="center">
//         <tbody>
//           <tr>
//             <td><input type="text" value={userFname} onChange={(e) => setUserFname(e.target.value)} placeholder="First Name" /></td>
//             <td><input type="text" value={userLname} onChange={(e) => setUserLname(e.target.value)} placeholder="Last Name" /></td>
//           </tr>
//           <tr>
//             <td>
//               <DatePicker selected={userDate} onChange={date => setUserDate(date)} placeholderText="Select Date" />
//             </td>
//             <td>
//               <select value={userTime} onChange={(e) => setUserTime(e.target.value)}>
//                 {getAvailableTimeSlots().map(({ hourIdx, blockIdx, blockTime }, index) => (
//                   <option key={index} value={`${hourIdx}:${blockIdx}`}>{blockTime}</option>
//                 ))}
//               </select>
//             </td>
//           </tr>
//           <tr>
//             <td colSpan="2" align="center">
//               <button id="saveButton" onClick={handleSaveAppointment}>Schedule Bloodwork</button>
//             </td>
//           </tr>
//           <tr>
//             <td colSpan="2">
//               <h2>Booked Appointments</h2>
//               <ul>
//                 {bookedAppointments.map((appointment, index) => (
//                   <li key={index}>
//                     Name: {appointment.fname} {appointment.lname}, Date: {appointment.date.toDateString()}, Time: {appointment.time}
//                   </li>
//                 ))}
//               </ul>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BloodworkScheduler;


// 7th try
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BloodworkScheduler = () => {
  const [userFname, setUserFname] = useState('');
  const [userLname, setUserLname] = useState('');
  const [userDate, setUserDate] = useState(new Date());
  const [userTime, setUserTime] = useState('');
  const [timeSlots, setTimeSlots] = useState([
    {
      hour: '8:00 AM',
      hourBlocks: [
        { blockTime: '8:00', registrants: [] },
        { blockTime: '8:10', registrants: [] },
        { blockTime: '8:20', registrants: [] },
        { blockTime: '8:30', registrants: [] },
        { blockTime: '8:40', registrants: [] },
        { blockTime: '8:50', registrants: [] }
      ]
    },
    {
      hour: '9:00 AM',
      hourBlocks: [
        { blockTime: '9:00', registrants: [] },
        { blockTime: '9:10', registrants: [] },
        { blockTime: '9:20', registrants: [] },
        { blockTime: '9:30', registrants: [] },
        { blockTime: '9:40', registrants: [] },
        { blockTime: '9:50', registrants: [] }
      ]
    },
    {
      hour: '10:00 AM',
      hourBlocks: [
        { blockTime: '10:00', registrants: [] },
        { blockTime: '10:10', registrants: [] },
        { blockTime: '10:20', registrants: [] },
        { blockTime: '10:30', registrants: [] },
        { blockTime: '10:40', registrants: [] },
        { blockTime: '10:50', registrants: [] }
      ]
    }
  ]);

  const [bookedAppointments, setBookedAppointments] = useState([]);

//   const loadBookedAppointmentsFromLocalStorage = () => {
//     const savedAppointments = localStorage.getItem('bookedAppointments');
//     if (savedAppointments) {
//       console.log("Booked appointments loaded from localStorage",bookedAppointments);
//       setBookedAppointments(JSON.parse(savedAppointments));
//     }
//   };

const loadBookedAppointmentsFromLocalStorage = () => {
    const savedAppointments = localStorage.getItem('bookedAppointments');
    const timeslots = localStorage.getItem('timeslots');
    if (savedAppointments) {
      const parsedAppointments = JSON.parse(savedAppointments);
      const appointmentsWithDateObjects = parsedAppointments.map(appointment => ({
        ...appointment,
        date: new Date(appointment.date)
      }));
      setBookedAppointments(appointmentsWithDateObjects);
      setTimeSlots(timeSlots)
    }
  };
  

  useEffect(() => {
    loadBookedAppointmentsFromLocalStorage();
  }, []);

//   useEffect(() => {
//     localStorage.setItem('bookedAppointments', JSON.stringify(bookedAppointments));
//   }, [bookedAppointments]);

// orgignal
//   const handleSaveAppointment = () => {
//     if (userTime === '') {
//       alert('Please select a time slot.');
//       return;
//     }

//     const newItem = { fname: userFname, lname: userLname, date: userDate, time: userTime };
//     const [hourIdx, hourBlockIdx] = userTime.split(':').map(Number);
//     const updatedTimeSlots = [...timeSlots];

//     // Check if the selected time slot is available
//     if (updatedTimeSlots[hourIdx] && updatedTimeSlots[hourIdx].hourBlocks[hourBlockIdx].registrants.length === 0) {
//       updatedTimeSlots[hourIdx].hourBlocks[hourBlockIdx].registrants.push(newItem);
//       setTimeSlots(updatedTimeSlots);
//       setBookedAppointments([...bookedAppointments, newItem]);
//       localStorage.setItem('bookedAppointments', JSON.stringify(bookedAppointments));

//     } else {
//       alert('Selected time slot is not available.');
//     }

//     setUserFname('');
//     setUserLname('');
//     setUserTime('');
//   };


const handleSaveAppointment = () => {
    if (userTime === '') {
      alert('Please select a time slot.');
      return;
    }
  console.log("userdate",userTime);
    // Convert the selected date to a Date object if it's not already
    const selectedDate = typeof userDate === 'string' ? new Date(userDate) : userDate;
  
    const newItem = { fname: userFname, lname: userLname, date: selectedDate, time: userTime };
    const [hourIdx, hourBlockIdx] = userTime.split(':').map(Number);
    const updatedTimeSlots = [...timeSlots];
  
    // Check if the selected time slot is available
    if (updatedTimeSlots[hourIdx] && updatedTimeSlots[hourIdx].hourBlocks[hourBlockIdx].registrants.length === 0) {
      updatedTimeSlots[hourIdx].hourBlocks[hourBlockIdx].registrants.push(newItem);
      setTimeSlots(updatedTimeSlots);
      setBookedAppointments([...bookedAppointments, newItem]);
      localStorage.setItem('timeslots', updatedTimeSlots);
    //   localStorage.setItem('bookedAppointments', JSON.stringify(bookedAppointments));
    } else {
      alert('Selected time slot is not available.');
    }
  
    setUserFname('');
    setUserLname('');
    setUserTime('');
  };
  
  const getAvailableTimeSlots = () => {
    const availableTimeSlots = [];
    timeSlots.forEach((hourSlot, hourIdx) => {
      hourSlot.hourBlocks.forEach((block, blockIdx) => {
        if (block.registrants.length === 0) {
          availableTimeSlots.push({ hourIdx, blockIdx, blockTime: block.blockTime });
        }
      });
    });
    return availableTimeSlots;
  };

  return (
    <div id="wrapper">
      <table border="2" cellpadding="5" cellspacing="5" align="center">
        <tbody>
          <tr>
            <td><input type="text" value={userFname} onChange={(e) => setUserFname(e.target.value)} placeholder="First Name" /></td>
            <td><input type="text" value={userLname} onChange={(e) => setUserLname(e.target.value)} placeholder="Last Name" /></td>
          </tr>
          <tr>
            <td>
              <DatePicker selected={userDate} onChange={date => setUserDate(date)} placeholderText="Select Date" />
            </td>
            <td>
              <select value={userTime} onChange={(e) => setUserTime(e.target.value)}>
                {getAvailableTimeSlots().map(({ hourIdx, blockIdx, blockTime }, index) => (
                  <option key={index} value={`${hourIdx}:${blockIdx}`}>{blockTime}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <button id="saveButton" onClick={handleSaveAppointment}>Schedule Bloodwork</button>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <h2>Booked Appointments</h2>
              <ul>
                {bookedAppointments.map((appointment, index) => (
                  <li key={index}>
                    Name: {appointment.fname} {appointment.lname}, <br/>
                    Date: {appointment.date.toDateString()}, <br/>Time: {appointment.time}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BloodworkScheduler;

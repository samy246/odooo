// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

import BloodworkScheduler from "./BloodworkScheduler";


import React from 'react'

const App = () => {
  return (
    <div><div>
    <BloodworkScheduler/>
    </div></div>
  )
}

export default App
// const localizer = momentLocalizer(moment);

// class App extends React.Component {
//   state = {
//     events: [
//       {
//         title: 'Meeting',
//         start: new Date(2024, 1, 14, 10, 0, 0), // February 14, 2024, 10:00 AM
//         end: new Date(2024, 1, 14, 11, 0, 0), // February 14, 2024, 11:00 AM
//       },
//       // Add more events as needed
//     ],
//     selectedDate: null,
//     hiddenTimes: {
//       '2024-02-14': [
//         { start: '09:00', end: '10:00' }, // Hide 9:00 AM to 10:00 AM on February 14, 2024
//       ],
//       // Add more dates with hidden times as needed
//     },
//   };

//   eventStyleGetter = (event, start, end, isSelected) => {
//     return {
//       style: {
//         backgroundColor: 'blue',
//       },
//     };
//   };

//   handleSelectSlot = (slotInfo) => {
//     const { start } = slotInfo;
//     const selectedDateString = moment(start).format('YYYY-MM-DD');
//     this.setState({ selectedDate: selectedDateString });
//   };

//   render() {
//     const { selectedDate } = this.state;
//     const hiddenTimes = selectedDate ? this.state.hiddenTimes[selectedDate] || [] : [];

//     return (
//       <div style={{ height: '500px' }}>
//         <Calendar
//           localizer={localizer}
//           events={this.state.events}
//           startAccessor="start"
//           endAccessor="end"
//           eventPropGetter={this.eventStyleGetter}
//           views={['month', 'week', 'day']}
//           selectable
//           onSelectSlot={this.handleSelectSlot}
//           timeslots={2} // Adjust this according to your preference
//           components={{
//             timeSlotWrapper: (props) => {
//               const { value } = props;
//               const dateString = moment(value).format('YYYY-MM-DD');
//               const isHidden =
//                 selectedDate &&
//                 dateString === selectedDate &&
//                 hiddenTimes.some(
//                   (time) =>
//                     moment(value).isBetween(
//                       moment(`${dateString}T${time.start}`),
//                       moment(`${dateString}T${time.end}`),
//                       null,
//                       '[]'
//                     )
//                 );

//               return isHidden ? <div style={{ display: 'none' }} /> : <div {...props} />;
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default App;


// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// class App extends React.Component {
//   state = {
//     events: [
//       {
//         title: 'Meeting',
//         start: new Date(2024, 1, 14, 9, 0, 0), // February 14, 2024, 10:00 AM
//         end: new Date(2024, 1, 14, 10, 0, 0), // February 14, 2024, 11:00 AM
//       },
//       // Add more events as needed
//     ],
//     selectedDate: null,
//     hiddenTimes: {
//       '2024-02-14': [
//         { start: '09:00', end: '10:00' }, // Hide 9:00 AM to 10:00 AM on February 14, 2024
//       ],
//       // Add more dates with hidden times as needed
//     },
//   };

//   eventStyleGetter = (event, start, end, isSelected) => {
//     return {
//       style: {
//         backgroundColor: 'blue',
//       },
//     };
//   };

//   handleSelectSlot = (slotInfo) => {
//     const { start } = slotInfo;
//     const selectedDateString = moment(start).format('YYYY-MM-DD');
//     this.setState({ selectedDate: selectedDateString });
//   };

//   render() {
//     const { selectedDate } = this.state;
//     const hiddenTimes = selectedDate ? this.state.hiddenTimes[selectedDate] || [] : [];

//     return (
//       <div style={{ height: '500px' }}>
//         <Calendar
//           localizer={localizer}
//           events={this.state.events}
//           startAccessor="start"
//           endAccessor="end"
//           eventPropGetter={this.eventStyleGetter}
//           views={['month', 'week', 'day']}
//           selectable
//           onSelectSlot={this.handleSelectSlot}
//           timeslots={2} // Adjust this according to your preference
//           components={{
//             timeSlotWrapper: (props) => {
//               const { value } = props;
//               const dateString = moment(value).format('YYYY-MM-DD');
//               const isHidden =
//                 selectedDate &&
//                 dateString === selectedDate &&
//                 hiddenTimes.some(
//                   (time) =>
//                     moment(value).isBetween(
//                       moment(`${dateString}T${time.start}`),
//                       moment(`${dateString}T${time.end}`),
//                       null,
//                       '[]'
//                     )
//                 );

//               return isHidden ? <div style={{ visibility: 'hidden' }} /> : <div {...props} />;
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default App;


// 3rd try--original

// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// class App extends React.Component {
//   state = {
//     events: [
//       {
//         title: 'Meeting',
//         start: new Date(2024, 1, 14, 9, 0, 0), // February 14, 2024, 10:00 AM
//         end: new Date(2024, 1, 14, 10, 0, 0), // February 14, 2024, 11:00 AM
//       },
//       // Add more events as needed
//     ],
//     selectedDate: null,
//     hiddenTimes: {
//       '2024-02-14': [
//         { start: '09:00', end: '10:00' }, // Hide 9:00 AM to 10:00 AM on February 14, 2024
//       ],
//       // Add more dates with hidden times as needed
//     },
//   };

//   eventStyleGetter = (event, start, end, isSelected) => {
//     return {
//       style: {
//         backgroundColor: 'blue',
//       },
//     };
//   };

//   handleSelectSlot = (slotInfo) => {
//     const { start } = slotInfo;
//     const selectedDateString = moment(start).format('YYYY-MM-DD');
//     this.setState({ selectedDate: selectedDateString });
//   };

//   render() {
//     const { selectedDate } = this.state;
//     const hiddenTimes = selectedDate ? this.state.hiddenTimes[selectedDate] || [] : [];
//     const bookedTimes = this.state.events.map(event => ({
//       start: event.start,
//       end: event.end
//     }));

//     return (
//       <div style={{ height: '500px' }}>
//         <Calendar
//           localizer={localizer}
//           events={this.state.events}
//           startAccessor="start"
//           endAccessor="end"
//           eventPropGetter={this.eventStyleGetter}
//           views={['month', 'week', 'day']}
//           selectable
//           onSelectSlot={this.handleSelectSlot}
//           timeslots={2} // Adjust this according to your preference
//           components={{
//             timeSlotWrapper: (props) => {
//               const { value } = props;
//               const dateString = moment(value).format('YYYY-MM-DD');
//               const isHidden =
//                 selectedDate &&
//                 dateString === selectedDate &&
//                 hiddenTimes.some(
//                   (time) =>
//                     moment(value).isBetween(
//                       moment(`${dateString}T${time.start}`),
//                       moment(`${dateString}T${time.end}`),
//                       null,
//                       '[]'
//                     )
//                 );
//               const isBooked = bookedTimes.some(
//                 (event) =>
//                   moment(value).isBetween(moment(event.start), moment(event.end), null, '[]')
//               );

//               return isHidden || isBooked ? <div style={{ visibility: 'hidden' }} /> : <div {...props} />;
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default App;


// 3rd original-slots
// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import AppointmentScheduler from './AppointmentScheduler';

// const localizer = momentLocalizer(moment);

// class App extends React.Component {
//   state = {
//     events: [
//       {
//         title: 'Meeting',
//         start: new Date(2024, 1, 14, 9, 0, 0), // February 14, 2024, 10:00 AM
//         end: new Date(2024, 1, 14, 10, 0, 0), // February 14, 2024, 11:00 AM
//       },
//       // Add more events as needed
//     ],
//     selectedDate: null,
//     hiddenTimes: {
//       '2024-02-14': [
//         { start: '09:00', end: '10:00' }, // Hide 9:00 AM to 10:00 AM on February 14, 2024
//       ],
//       // Add more dates with hidden times as needed
//     },
//   };

//   eventStyleGetter = (event, start, end, isSelected) => {
//     return {
//       style: {
//         backgroundColor: 'blue',
//       },
//     };
//   };

//   handleSelectSlot = (slotInfo) => {
//     const { start } = slotInfo;
//     const selectedDateString = moment(start).format('YYYY-MM-DD');
//     this.setState({ selectedDate: selectedDateString });
//   };

//   render() {
//     const { selectedDate } = this.state;
//     const hiddenTimes = selectedDate ? this.state.hiddenTimes[selectedDate] || [] : [];
//     const bookedTimes = this.state.events.map(event => ({
//       start: event.start,
//       end: event.end
//     }));

//     return (
//       <div style={{ height: '500px' }}>
//         <Calendar
//           localizer={localizer}
//           events={this.state.events}
//           startAccessor="start"
//           endAccessor="end"
//           eventPropGetter={this.eventStyleGetter}
//           views={['month', 'week', 'day']}
//           selectable
//           onSelectSlot={this.handleSelectSlot}
//           timeslots={2} // Adjust this according to your preference
//           components={{
//             timeSlotWrapper: (props) => {
//               const { value } = props;
//               const dateString = moment(value).format('YYYY-MM-DD');
//               const isHidden =
//                 selectedDate &&
//                 dateString === selectedDate &&
//                 (hiddenTimes.some(
//                   (time) =>
//                     moment(value).isBetween(
//                       moment(`${dateString}T${time.start}`),
//                       moment(`${dateString}T${time.end}`),
//                       null,
//                       '[]'
//                     )
//                 ) ||
//                 bookedTimes.some(
//                   (event) =>
//                     moment(value).isBetween(moment(event.start), moment(event.end), null, '[]')
//                 ));

//               return isHidden ? <div style={{ visibility: 'hidden' }} /> : <div {...props} />;
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default App;



// 4th try

// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// class App extends React.Component {
//   state = {
//     events: [
//       {
//         title: 'Meeting',
//         start: new Date(2024, 1, 14, 9, 0, 0), // February 14, 2024, 10:00 AM
//         end: new Date(2024, 1, 14, 10, 0, 0), // February 14, 2024, 11:00 AM
//       },
//       // Add more events as needed
//     ],
//     selectedDate: null,
//     hiddenTimes: {
//       '2024-02-14': [
//         { start: '09:00', end: '10:00' }, // Hide 9:00 AM to 10:00 AM on February 14, 2024
//       ],
//       // Add more dates with hidden times as needed
//     },
//   };

//   eventStyleGetter = (event, start, end, isSelected) => {
//     return {
//       style: {
//         backgroundColor: 'blue',
//       },
//     };
//   };

//   handleSelectSlot = (slotInfo) => {
//     const { start, end } = slotInfo;
//     const { selectedDate } = this.state;
//     const dateString = moment(start).format('YYYY-MM-DD');
//     const isHidden =
//       selectedDate &&
//       dateString === selectedDate &&
//       this.state.hiddenTimes[selectedDate]?.some((time) =>
//         moment(start).isBetween(
//           moment(`${dateString}T${time.start}`),
//           moment(`${dateString}T${time.end}`),
//           null,
//           '[]'
//         )
//       );

//     if (!isHidden) {
//       const title = window.prompt('Enter event title:');
//       if (title) {
//         const newEvent = {
//           title: title,
//           start: start,
//           end: end,
//         };
//         this.setState({ events: [...this.state.events, newEvent] });
//       }
//     }
//   };

//   render() {
//     const { selectedDate } = this.state;
//     const hiddenTimes = selectedDate ? this.state.hiddenTimes[selectedDate] || [] : [];

//     return (
//       <div style={{ height: '500px' }}>
//         <Calendar
//           localizer={localizer}
//           events={this.state.events}
//           startAccessor="start"
//           endAccessor="end"
//           eventPropGetter={this.eventStyleGetter}
//           views={['month', 'week', 'day']}
//           selectable
//           onSelectSlot={this.handleSelectSlot}
//           timeslots={2} // Adjust this according to your preference
//           components={{
//             timeSlotWrapper: (props) => {
//               const { value } = props;
//               const dateString = moment(value).format('YYYY-MM-DD');
//               const isHidden =
//                 selectedDate &&
//                 dateString === selectedDate &&
//                 hiddenTimes.some(
//                   (time) =>
//                     moment(value).isBetween(
//                       moment(`${dateString}T${time.start}`),
//                       moment(`${dateString}T${time.end}`),
//                       null,
//                       '[]'
//                     )
//                 );

//               return isHidden ? <div style={{ visibility: 'hidden' }} /> : <div {...props} />;
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default App;


// 5th try
// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// class App extends React.Component {
//   state = {
//     events: [
//       {
//         title: 'Meeting',
//         start: new Date(2024, 1, 14, 9, 0, 0), // February 14, 2024, 10:00 AM
//         end: new Date(2024, 1, 14, 10, 0, 0), // February 14, 2024, 11:00 AM
//       },
//       // Add more events as needed
//     ],
//     selectedDate: null,
//     hiddenTimes: {
//       '2024-02-14': [
//         { start: '09:00', end: '10:00' }, // Hide 9:00 AM to 10:00 AM on February 14, 2024
//       ],
//       // Add more dates with hidden times as needed
//     },
//   };

//   eventStyleGetter = (event, start, end, isSelected) => {
//     return {
//       style: {
//         backgroundColor: 'blue',
//       },
//     };
//   };

//   handleSelectSlot = (slotInfo) => {
//     const { start, end } = slotInfo;
//     const { selectedDate } = this.state;
//     const dateString = moment(start).format('YYYY-MM-DD');
//     const isHidden =
//       selectedDate &&
//       dateString === selectedDate &&
//       (this.state.hiddenTimes[selectedDate]?.some((time) =>
//         moment(start).isBetween(
//           moment(`${dateString}T${time.start}`),
//           moment(`${dateString}T${time.end}`),
//           null,
//           '[]'
//         )
//       ) ||
//       this.state.events.some(
//         (event) =>
//           moment(start).isBetween(moment(event.start), moment(event.end), null, '[]') ||
//           moment(end).isBetween(moment(event.start), moment(event.end), null, '[]')
//       ));

//     if (!isHidden) {
//       const title = window.prompt('Enter event title:');
//       if (title) {
//         const newEvent = {
//           title: title,
//           start: start,
//           end: end,
//         };
//         this.setState({ events: [...this.state.events, newEvent] });
//       }
//     }
//   };

//   render() {
//     const { selectedDate } = this.state;
//     const hiddenTimes = selectedDate ? this.state.hiddenTimes[selectedDate] || [] : [];

//     return (
//       <div style={{ height: '500px' }}>
//         <Calendar
//           localizer={localizer}
//           events={this.state.events}
//           startAccessor="start"
//           endAccessor="end"
//           eventPropGetter={this.eventStyleGetter}
//           views={['month', 'week', 'day']}
//           selectable
//           onSelectSlot={this.handleSelectSlot}
//           timeslots={2} // Adjust this according to your preference
//           components={{
//             timeSlotWrapper: (props) => {
//               const { value } = props;
//               const dateString = moment(value).format('YYYY-MM-DD');
//               const isHidden =
//                 selectedDate &&
//                 dateString === selectedDate &&
//                 hiddenTimes.some(
//                   (time) =>
//                     moment(value).isBetween(
//                       moment(`${dateString}T${time.start}`),
//                       moment(`${dateString}T${time.end}`),
//                       null,
//                       '[]'
//                     )
//                 );

//               return isHidden ? <div style={{ visibility: 'hidden' }} /> : <div {...props} />;
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default App;


// 6th try

// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// class App extends React.Component {
//   state = {
//     events: [
//       {
//         title: 'Meeting',
//         start: new Date(2024, 1, 14, 9, 0, 0), // February 14, 2024, 10:00 AM
//         end: new Date(2024, 1, 14, 10, 0, 0), // February 14, 2024, 11:00 AM
//       },
//       // Add more events as needed
//     ],
//     selectedDate: null,
//     hiddenTimes: {
//       '2024-02-14': [
//         { start: '09:00', end: '10:00' }, // Hide 9:00 AM to 10:00 AM on February 14, 2024
//       ],
//       // Add more dates with hidden times as needed
//     },
//   };

//   eventStyleGetter = (event, start, end, isSelected) => {
//     return {
//       style: {
//         backgroundColor: 'blue',
//       },
//     };
//   };

//   handleSelectSlot = (slotInfo) => {
//     const { start, end } = slotInfo;
//     const { selectedDate } = this.state;
//     const dateString = moment(start).format('YYYY-MM-DD');
//     const isHidden =
//       selectedDate &&
//       dateString === selectedDate &&
//       (this.state.hiddenTimes[selectedDate]?.some((time) =>
//         moment(start).isBetween(
//           moment(`${dateString}T${time.start}`),
//           moment(`${dateString}T${time.end}`),
//           null,
//           '[]'
//         )
//       ) ||
//       this.state.events.some(
//         (event) =>
//           moment(start).isBetween(moment(event.start), moment(event.end), null, '[]') ||
//           moment(end).isBetween(moment(event.start), moment(event.end), null, '[]')
//       ));

//     if (!isHidden) {
//       const title = window.prompt('Enter event title:');
//       if (title) {
//         const newEvent = {
//           title: title,
//           start: start,
//           end: end,
//         };
//         this.setState({ events: [...this.state.events, newEvent] });
//       }
//     }
//   };

//   render() {
//     const { selectedDate } = this.state;
//     const hiddenTimes = selectedDate ? this.state.hiddenTimes[selectedDate] || [] : [];
//     const bookedTimes = this.state.events.map((event) => ({
//       start: event.start,
//       end: event.end,
//     }));

//     return (
//       <div style={{ height: '500px' }}>
//         <Calendar
//           localizer={localizer}
//           events={this.state.events}
//           startAccessor="start"
//           endAccessor="end"
//           eventPropGetter={this.eventStyleGetter}
//           views={['month', 'week', 'day']}
//           selectable
//           onSelectSlot={this.handleSelectSlot}
//           timeslots={2} // Adjust this according to your preference
//           components={{
//             timeSlotWrapper: (props) => {
//               const { value } = props;
//               const dateString = moment(value).format('YYYY-MM-DD');
//               const isHidden =
//                 selectedDate &&
//                 dateString === selectedDate &&
//                 (hiddenTimes.some(
//                   (time) =>
//                     moment(value).isBetween(
//                       moment(`${dateString}T${time.start}`),
//                       moment(`${dateString}T${time.end}`),
//                       null,
//                       '[]'
//                     )
//                 ) ||
//                 bookedTimes.some(
//                   (event) =>
//                     moment(value).isBetween(moment(event.start), moment(event.end), null, '[]')
//                 ));

//               return isHidden ? <div style={{ visibility: 'hidden' }} /> : <div {...props} />;
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default App;


// 7th try
// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// class App extends React.Component {
//   state = {
//     events: [
//       {
//         title: 'Meeting',
//         start: new Date(2024, 1, 14, 9, 0, 0), // February 14, 2024, 10:00 AM
//         end: new Date(2024, 1, 14, 10, 0, 0), // February 14, 2024, 11:00 AM
//       },
//       // Add more events as needed
//     ],
//     selectedDate: null,
//     hiddenTimes: {
//       '2024-02-14': [
//         { start: '09:00', end: '10:00' }, // Hide 9:00 AM to 10:00 AM on February 14, 2024
//       ],
//       // Add more dates with hidden times as needed
//     },
//   };

//   eventStyleGetter = (event, start, end, isSelected) => {
//     return {
//       style: {
//         backgroundColor: 'blue',
//       },
//     };
//   };

//   handleSelectSlot = (slotInfo) => {
//     const { start, end } = slotInfo;
//     const { selectedDate } = this.state;
//     const dateString = moment(start).format('YYYY-MM-DD');
//     const isHidden =
//       selectedDate &&
//       dateString === selectedDate &&
//       (this.state.hiddenTimes[selectedDate]?.some((time) =>
//         moment(start).isBetween(
//           moment(`${dateString}T${time.start}`),
//           moment(`${dateString}T${time.end}`),
//           null,
//           '[]'
//         )
//       ) ||
//       this.state.events.some(
//         (event) =>
//           moment(start).isBetween(moment(event.start), moment(event.end), null, '[]') ||
//           moment(end).isBetween(moment(event.start), moment(event.end), null, '[]')
//       ));

//     if (!isHidden) {
//       const title = window.prompt('Enter event title:');
//       if (title) {
//         const newEvent = {
//           title: title,
//           start: start,
//           end: end,
//         };
//         this.setState({ events: [...this.state.events, newEvent] });
//       }
//     }
//   };

//   render() {
//     const { selectedDate } = this.state;
//     const hiddenTimes = selectedDate ? this.state.hiddenTimes[selectedDate] || [] : [];
//     const bookedTimes = this.state.events.map((event) => ({
//       start: event.start,
//       end: event.end,
//     }));

//     return (
//       <div style={{ height: '500px' }}>
//         <Calendar
//           localizer={localizer}
//           events={this.state.events}
//           startAccessor="start"
//           endAccessor="end"
//           eventPropGetter={this.eventStyleGetter}
//           views={['month', 'week', 'day']}
//           selectable
//           onSelectSlot={this.handleSelectSlot}
//           timeslots={2} // Adjust this according to your preference
//           components={{
//             timeSlotWrapper: (props) => {
//               const { value } = props;
//               const dateString = moment(value).format('YYYY-MM-DD');
//               const isHidden =
//                 selectedDate &&
//                 dateString === selectedDate &&
//                 (hiddenTimes.some(
//                   (time) =>
//                     moment(value).isBetween(
//                       moment(`${dateString}T${time.start}`),
//                       moment(`${dateString}T${time.end}`),
//                       null,
//                       '[]'
//                     )
//                 ) ||
//                 bookedTimes.some(
//                   (event) =>
//                     moment(value).isBetween(moment(event.start), moment(event.end), null, '[]')
//                 ));

//               return isHidden ? <div style={{ visibility: 'hidden' }} /> : <div {...props} />;
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default App;


// 8th try
// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// class App extends React.Component {
//   state = {
//     events: [
//       {
//         title: 'Meeting',
//         start: new Date(2024, 1, 14, 9, 0, 0), // February 14, 2024, 10:00 AM
//         end: new Date(2024, 1, 14, 10, 0, 0), // February 14, 2024, 11:00 AM
//       },
//       // Add more events as needed
//     ],
//     selectedDate: null,
//     hiddenTimes: {
//       '2024-02-14': [
//         { start: '09:00', end: '10:00' }, // Hide 9:00 AM to 10:00 AM on February 14, 2024
//       ],
//       // Add more dates with hidden times as needed
//     },
//   };

//   eventStyleGetter = (event, start, end, isSelected) => {
//     return {
//       style: {
//         backgroundColor: 'blue',
//       },
//     };
//   };

//   handleSelectSlot = (slotInfo) => {
//     const { start, end } = slotInfo;
//     const title = window.prompt('Enter event title:');
//     if (title) {
//       const newEvent = {
//         title: title,
//         start: start,
//         end: end,
//       };
//       this.setState({ events: [...this.state.events, newEvent] });
//     }
//   };

//   render() {
//     const { selectedDate } = this.state;
//     const hiddenTimes = selectedDate ? this.state.hiddenTimes[selectedDate] || [] : [];

//     return (
//       <div style={{ height: '500px' }}>
//         <Calendar
//           localizer={localizer}
//           events={this.state.events}
//           startAccessor="start"
//           endAccessor="end"
//           eventPropGetter={this.eventStyleGetter}
//           views={['month', 'week', 'day']}
//           selectable
//           onSelectSlot={this.handleSelectSlot}
//           timeslots={2} // Adjust this according to your preference
//           components={{
//             timeSlotWrapper: (props) => {
//               const { value } = props;
//               const dateString = moment(value).format('YYYY-MM-DD');
//               const isHidden =
//                 selectedDate &&
//                 dateString === selectedDate &&
//                 hiddenTimes.some(
//                   (time) =>
//                     moment(value).isBetween(
//                       moment(`${dateString}T${time.start}`),
//                       moment(`${dateString}T${time.end}`),
//                       null,
//                       '[]'
//                     )
//                 );

//               return isHidden ? <div style={{ visibility: 'hidden' }} /> : <div {...props} />;
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default App;

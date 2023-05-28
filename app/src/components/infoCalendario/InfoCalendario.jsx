import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendario = () => {
  const [markedDates, setMarkedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const savedMarkedDates = JSON.parse(localStorage.getItem('markedDates'));
    if (savedMarkedDates) {
      setMarkedDates(savedMarkedDates);
    }
  }, []);

  const isDayMarked = (date) => {
    const dateToCompare = date.toISOString().slice(0, 10);
    return markedDates.includes(dateToCompare);
  };

  const handleDateChange = (date) => {
    if (isDayMarked(date)) {
      setSelectedDate(date);
    }
  };

  const tileClassName = ({ date }) => {
    if (isDayMarked(date)) {
      return 'marked';
    }
    return '';
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Citas programadas</h2>
      {selectedDate && (
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 rounded mb-4"
          value={selectedDate.toISOString().slice(0, 10)}
          readOnly
        />
      )}
      <Calendar
        onChange={handleDateChange}
        tileClassName={tileClassName}
        selectRange={false}
      />
      <style jsx>{`
        .marked {
          background-color: red;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Calendario;

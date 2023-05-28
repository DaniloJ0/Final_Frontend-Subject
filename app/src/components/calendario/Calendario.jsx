import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [markedDates, setMarkedDates] = useState([]);

  useEffect(() => {
    const savedMarkedDates = JSON.parse(localStorage.getItem('markedDates'));
    if (savedMarkedDates) {
      setMarkedDates(savedMarkedDates);
    }
  }, []);

  const handleDateChange = (date) => {
    const currentDate = new Date();
    if (date >= currentDate) {
      setSelectedDate(date);
    }
  };

  const handleAddMarkedDate = () => {
    if (selectedDate) {
      const dateToMark = selectedDate.toISOString().slice(0, 10);
      if (!markedDates.includes(dateToMark)) {
        const updatedMarkedDates = [...markedDates, dateToMark];
        setMarkedDates(updatedMarkedDates);
        localStorage.setItem('markedDates', JSON.stringify(updatedMarkedDates));
      }
      setSelectedDate(null);
    }
  };

  const handleRemoveMarkedDate = () => {
    if (selectedDate) {
      const dateToRemove = selectedDate.toISOString().slice(0, 10);
      const updatedMarkedDates = markedDates.filter((date) => date !== dateToRemove);
      setMarkedDates(updatedMarkedDates);
      localStorage.setItem('markedDates', JSON.stringify(updatedMarkedDates));
      setSelectedDate(null);
    }
  };

  const isDaySelected = (date) => {
    return selectedDate && selectedDate.getTime() === date.getTime();
  };

  const isDayMarked = (date) => {
    const dateToCompare = date.toISOString().slice(0, 10);
    return markedDates.includes(dateToCompare);
  };

  const tileClassName = ({ date }) => {
    if (isDaySelected(date)) {
      return 'selected';
    }
    if (isDayMarked(date)) {
      return 'marked';
    }
    return '';
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Calendario de turnos</h2>
      <div>
        {isDaySelected(selectedDate) ? (
          isDayMarked(selectedDate) ? (
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-4"
              onClick={handleRemoveMarkedDate}
            >
              Quitar fecha
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
              onClick={handleAddMarkedDate}
            >
              Marcar fecha
            </button>
          )
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={handleAddMarkedDate}
            disabled={!selectedDate}
          >
            Marcar fecha
          </button>
        )}
      </div>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
        selectRange={false}
      />
      <style jsx>{`
        .selected {
          background-color: blue !important;
          color: white !important;
        }
        .marked {
          background-color: red;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Calendario;

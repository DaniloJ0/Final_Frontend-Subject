import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CitasCompletas = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [markedDates, setMarkedDates] = useState([]);

  useEffect(() => {
    const savedMarkedDates = JSON.parse(localStorage.getItem('markedDates'));
    if (savedMarkedDates) {
      setMarkedDates(savedMarkedDates);
    }
  }, []);

  const handleDateChange = (date) => {
    if (isDayMarked(date)) {
      setSelectedDate(date);
    }
  };

  const isDayMarked = (date) => {
    const dateToCompare = date.toISOString().slice(0, 10);
    return markedDates.some((markedDate) => markedDate.fecha === dateToCompare);
  };

  const tileClassName = ({ date }) => {
    if (isDayMarked(date)) {
      return 'marked';
    }
    return '';
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Calendario de turnos</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} tileClassName={tileClassName} selectRange={false} />
      <div className="mt-4">
        {selectedDate &&
          markedDates.map((markedDate) => {
            if (markedDate.fecha === selectedDate.toISOString().slice(0, 10)) {
              return (
                <div key={markedDate.fecha}>
                  <p className="font-bold">Fecha: {markedDate.fecha}</p>
                  <p>Texto: {markedDate.texto}</p>
                </div>
              );
            }
            return null;
          })}
      </div>
      <style jsx>{`
        .marked {
          background-color: red;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default CitasCompletas;

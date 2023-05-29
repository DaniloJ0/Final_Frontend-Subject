import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import RatingComponent from "../rating/RatingComponent";

const CitasCompletas = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [markedDates, setMarkedDates] = useState([]);
  const [ratingShow, setRatingShow] = useState(false);

  useEffect(() => {
    const savedMarkedDates = JSON.parse(localStorage.getItem("markedDates"));
    if (savedMarkedDates) {
      setMarkedDates(savedMarkedDates);
    }
  }, []);

  const isDaySelected = (date) => {
    return (
      selectedDate && selectedDate.fecha === date.toLocaleDateString("en-US")
    );
  };

  const handleDateChange = (date) => {
    if (isDayMarked(date)) {
      setSelectedDate(
        markedDates.find(
          (markedDate) => markedDate.fecha === date.toLocaleDateString("en-US")
        )
      );
    } else {
      setSelectedDate(null);
      setRatingShow(false);
    }
  };

  const isDayMarked = (date) => {
    const formattedDate = date.toLocaleDateString("en-US");
    return markedDates.some((markedDate) => markedDate.fecha === formattedDate);
  };

  const tileClassName = ({ date }) => {
    if (isDaySelected(date)) {
      return "selected";
    }
    if (isDayMarked(date)) {
      return "marked";
    }
    return "";
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Citas programadas del usuario</h2>
      <div>
        {selectedDate && (
          <div
            key={selectedDate.fecha}
            className="border flex justify-between border-gray-300 px-4 py-2 rounded mb-4"
          >
            <div>
              <p>
                <span className="font-bold"> Información: </span>{" "}
                {selectedDate.texto === "" || selectedDate.texto === null
                  ? "No hay información"
                  : selectedDate.texto}
              </p>
              <p className="font-bold text-red-500">
                Fecha: {selectedDate.fecha}
              </p>
            </div>
            <button
              onClick={() => {
                setRatingShow(!ratingShow);
              }}
              type="button"
              className= {ratingShow ?"text-white bg-blue-200 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              :"text-white bg-red-200 hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"}
            >
              {ratingShow ? "Ocultar feedback" : "Calificar servicio"}
            </button>
          </div>
        )}
        <div className="flex flex-wrap gap-28 ">
          <div>
            <p className="mb-2 font-semibold">
              Seleccione la fecha de su cita para más detalle
            </p>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate ? new Date(selectedDate.fecha) : null}
              tileClassName={tileClassName}
              selectRange={false}
            />
          </div>
          <div className="mr-25">{ratingShow && <RatingComponent />}</div>
        </div>
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

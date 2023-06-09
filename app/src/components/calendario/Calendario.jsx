import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Swal from "sweetalert2";
const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [markedDates, setMarkedDates] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const savedMarkedDates = JSON.parse(localStorage.getItem("markedDates"));
    // add dates after today
    if (savedMarkedDates) {
      const currentDate = new Date();
      const filteredMarkedDates = savedMarkedDates.filter((markedDate) => {
        const markedDateDate = new Date(markedDate.fecha);
        return markedDateDate >= currentDate;
      });
      setMarkedDates(filteredMarkedDates);
    }
  }, []);

  const handleDateChange = (date) => {
    const currentDate = new Date();
    if (date >= currentDate) {
      setSelectedDate(date);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddMarkedDate = () => {
    if (!inputValue) {
      Swal.fire({
        icon: "warning",
        text: "Por favor rellene el campo de texto",
      });
      return;
    }
    if (selectedDate && inputValue) {
      Swal.fire({
        title: "¿Estás seguro?",
        text: `¿Deseas crar una cita para el día ${selectedDate.toLocaleDateString("en-US")}? de lo contrario presiona afuera`,
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Sí, Crear cita!",
      }).then((result) => {
        if (result.isConfirmed) {
          const formattedDate = selectedDate.toLocaleDateString("en-US");
          const newMarkedDate = { fecha: formattedDate, texto: inputValue };
          const updatedMarkedDates = [...markedDates, newMarkedDate];
          setMarkedDates(updatedMarkedDates);
          localStorage.setItem(
            "markedDates",
            JSON.stringify(updatedMarkedDates)
          );
          setSelectedDate(null);
          setInputValue("");
          window.location.href = "/citasprogramadas";
          Swal.fire("Creado", `Tu cita se ha creado`, "success");
        }
      });
    }
  };

  const handleRemoveMarkedDate = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString("en-US");
      const updatedMarkedDates = markedDates.filter(
        (markedDate) => markedDate.fecha !== formattedDate
      );
      setMarkedDates(updatedMarkedDates);
      localStorage.setItem("markedDates", JSON.stringify(updatedMarkedDates));
      setSelectedDate(null);
      setInputValue("");
    }
  };

  const isDaySelected = (date) => {
    return selectedDate && selectedDate.getTime() === date.getTime();
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
    <div className="container mx-auto mt-8 flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold mb-4">Calendario de turnos</h2>
      <div>
        {isDaySelected(selectedDate) ? (
          isDayMarked(selectedDate) ? (
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-4"
              onClick={handleRemoveMarkedDate}
            >
              Cancelar cita
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
      <div className="flex flex-col mt-5 w-2/5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-black"
        >
          Información
        </label>
        <textarea
          id="valueInput"
          value={inputValue}
          onChange={handleInputChange}
          rows="4"
          className="block p-2.5 w-full text-sm text-black  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Escriba alguna información de la cita aquí..."
        ></textarea>
        {!inputValue && (
          <p className="text-red-600 text-center mt-2 font-bold">
            Ingrese información para agendar la cita
          </p>
        )}
      </div>

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

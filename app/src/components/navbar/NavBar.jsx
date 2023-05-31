import React, { useState, useEffect } from "react";
import logo from "../../img/caduceo.png";
import { useNavigate, Link } from "react-router-dom";
import notificacionOff from "../../img/campana_sin_32.png";
import notificacionOn from "../../img/campana_con_32.png";

import "./styles.css";
//elimar notificaciones cuando se hace el feedback

function NavBar() {
  const navigate = useNavigate();
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);
  const [notificaciones, setNotificaciones] = useState([]);

  const LogOut = (e) => {
    e.preventDefault();
    return navigate("/login");
  };

  useEffect(() => {
    // Obtener notificaciones del Local Storage
    const storedNotificaciones = JSON.parse(localStorage.getItem("notificaciones")) || [];
  
    // Filtrar las notificaciones duplicadas
    const filteredNotificaciones = storedNotificaciones.filter((notificacion) => {
      return !notificaciones.some(
        (existingNotificacion) =>
          existingNotificacion.fecha === notificacion.fecha && existingNotificacion.texto === notificacion.texto
      );
    });
  
    // Actualizar las notificaciones en el estado y el Local Storage
    setNotificaciones([...notificaciones, ...filteredNotificaciones]);
    localStorage.setItem("notificaciones", JSON.stringify([...notificaciones, ...filteredNotificaciones]));
  }, [mostrarNotificacion]);
  
  
  
  const handleNotificacionClick = () => {
    setMostrarNotificacion(!mostrarNotificacion);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".notificacion-pop-up")) {
      setMostrarNotificacion(false);
    }
  };

  const handleEliminarNotificacion = (fecha) => {
    const updatedNotificaciones = notificaciones.filter(
      (notificacion) => notificacion.fecha !== fecha
    );
    setNotificaciones(updatedNotificaciones);
    localStorage.setItem(
      "notificaciones",
      JSON.stringify(updatedNotificaciones)
    );
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MeTocaFinal
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:px-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/citasprogramadas"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:px-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Citas programadas
              </Link>
            </li>
            <li>
              <Link
                to="/sacarcita"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:px-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Sacar cita
              </Link>
            </li>
            <li>
              {/* notificaciones.length ===0? "No hay notificaciones" : */}
              <div className="relative top-3">
                <img
                  src={
                    notificaciones.length > 0 ? notificacionOn : notificacionOff
                  }
                  alt="notificacion"
                  className="w-5 hover-shake cursor-pointer"
                  onClick={handleNotificacionClick}
                />
                {mostrarNotificacion && (
                  <div className="notificacion-pop-up absolute right-0 mt-2 mr-4 max-h-96 overflow-y-auto bg-white rounded-lg shadow-md p-4 w-max">
                    {notificaciones.length ===0? "No hay notificaciones" : notificaciones.map((notificacion, index) => (
                      <div
                        key={notificacion.fecha}
                        className={`mb-4 ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                          } p-2 rounded-lg`}
                      >
                        <p
                          className={`font-bold text-lg ${index % 2 === 0 ? "text-blue-500" : "text-green-500"
                            }`}
                        >
                          {notificacion.fecha}
                        </p>
                        <p
                          className={`text-gray-700 ${index % 2 === 0 ? "text-blue-900" : "text-green-900"
                            }`}
                        >
                          {notificacion.texto}
                        </p>
                        <button
                          className="text-gray-500 font-bold hover:text-red-500 ml-auto focus:outline-none"
                          onClick={() =>
                            handleEliminarNotificacion(notificacion.fecha)
                          }
                        >
                          Eliminar
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li>
              <button
                type="button"
                className="text-white mt-1 bg-red-200 hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={LogOut}
              >
                Salir
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

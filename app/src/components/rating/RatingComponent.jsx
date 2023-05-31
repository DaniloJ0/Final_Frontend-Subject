import * as React from "react";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
const labels = {
  1: "Terrible",
  2: "Mala",
  3: "Aceptable",
  4: "Buena",
  5: "Excelente",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function RatingComponent({ selectedDay }) {
  const [value1, setValue1] = React.useState(2);
  const [hover1, setHover1] = React.useState(-1);

  const handleRemoveDate = () => {
    let selectedDate1 = selectedDay && selectedDay.fecha;
    console.log(selectedDate1);
    if (selectedDate1) {
      Swal.fire(
        "¡Gracias por su respuesta!",
        "Sigue usando nuestra aplicación para agendar tus citas",
        "success"
      ).then((result) => {
        if (result.isConfirmed) {
          const selectedDate2 = new Date(selectedDate1);
          const formattedDate = selectedDate2.toLocaleDateString("en-US");
          const markedDates = JSON.parse(localStorage.getItem("markedDates"));
          const notificaciones =
            JSON.parse(localStorage.getItem("notificaciones")) || [];
          const updatedNotificaciones = notificaciones.filter(
            (notificacion) => notificacion.fecha !== selectedDate2
          );
          const updatedMarkedDates = markedDates.filter(
            (markedDate) => markedDate.fecha !== formattedDate
          );
          localStorage.setItem(
            "markedDates",
            JSON.stringify(updatedMarkedDates)
          );
          localStorage.setItem(
            "notificaciones",
            JSON.stringify(updatedNotificaciones)
          );
          window.location.href = "/citasprogramadas";
        }
      });
    }
  };

  return (
    <div className="shadow-lg shadow-blue-100 rounded-2xl p-10">
      <Box
        style={{ margin: "0 auto" }}
        sx={{
          width: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        <Typography variant="Body2" gutterBottom>
          Califique nuestra atención
        </Typography>
      </Box>
      <Box
        style={{ margin: "0 auto" }}
        sx={{
          width: 500,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="Body2" gutterBottom>
          ¿Qué tal le pareció la atención recibida el día{" "}
          {selectedDay && selectedDay.fecha}? Utilize la escala del 1 al 5
          estrellas, donde 1 estrella representa una atención terrible y 5
          estrellas representa una atención excelente. ¿Cuántas estrellas le
          daría a la atención que recibió?
        </Typography>
      </Box>

      <Box
        style={{ margin: "0 auto" }}
        sx={{
          width: 200,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Rating
          name="hover-feedback-1"
          value={value1}
          precision={1}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue1(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover1(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value1 !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover1 !== -1 ? hover1 : value1]}</Box>
        )}
      </Box>
      <Box
        style={{ margin: "0 auto" }}
        sx={{
          width: 500,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="Body2" gutterBottom>
          Nos encantaría conocer más detalles sobre su experiencia. Sus
          comentarios son muy valiosos para nosotros y nos ayudarán a mejorar
          nuestro servicio. ¡Agradecemos su tiempo y su opinión!
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1, width: 500 },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{ borderRadius: "13px", padding: "10px", textAlign: "center" }}
        >
          <TextField
            id="outlined-multiline-static"
            label="Comentario"
            multiline
            rows={4}
          />
          <div>
            <Button
              onClick={handleRemoveDate}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Enviar
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default RatingComponent;

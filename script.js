// Cambia este valor por tu nombre real
const STUDENT_NAME = "Josué Daniel";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-saludo");
  btn?.addEventListener("click", () => {
    alert(`Hola ${STUDENT_NAME}`);
  });
});

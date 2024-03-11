document.getElementById("agregarTarea").addEventListener("click", function() {
    const inputTarea = document.getElementById("inputTarea");
    const tarea = inputTarea.value.trim();
  
    if (tarea !== "") {
      agregarTareaALista(tarea);
      inputTarea.value = "";
    }
  });
  
  function agregarTareaALista(tarea) {
    const listaTareas = document.getElementById("listaTareas");
    
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    
    const spanTarea = document.createElement("span");
    spanTarea.textContent = tarea;
  
    const botonEliminar = document.createElement("button");
    botonEliminar.className = "btn btn-danger";
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function() {
      listaTareas.removeChild(li);
    });
  
    li.appendChild(spanTarea);
    li.appendChild(botonEliminar);
    listaTareas.appendChild(li);
  }
  
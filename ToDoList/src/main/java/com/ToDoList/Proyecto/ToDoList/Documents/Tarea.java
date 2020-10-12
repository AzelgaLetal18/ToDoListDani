package com.ToDoList.Proyecto.ToDoList.Documents;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tarea")
public class Tarea {

    @Id
    private String id = new ObjectId().toString();

    private String nombre;

    private String descripcion;

    private boolean terminado;

    public Tarea() {}
    
    public String getNombre() {
        return nombre;
    }

    public boolean isTerminado() {
        return terminado;
    }

    public void setTerminado(boolean terminado) {
        this.terminado = terminado;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }


}

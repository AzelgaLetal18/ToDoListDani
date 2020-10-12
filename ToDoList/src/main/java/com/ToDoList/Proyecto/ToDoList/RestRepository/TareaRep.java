package com.ToDoList.Proyecto.ToDoList.RestRepository;

import java.util.List;

import com.ToDoList.Proyecto.ToDoList.Documents.Tarea;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class TareaRep {
    
    @Autowired
    private MongoTemplate mongoTemplate;

    public Tarea save(Tarea tarea){
        return mongoTemplate.save(tarea);
        
    }

    public  List<Tarea> finaAll(){
        return mongoTemplate.findAll(Tarea.class);
    }

    public Tarea find(String idTarea){
        return mongoTemplate.find(new Query().addCriteria(Criteria.where("_id").is(idTarea)), Tarea.class).get(0);
    }
}
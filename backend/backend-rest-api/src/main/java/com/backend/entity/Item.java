package com.backend.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

@Document

public class Item implements Serializable {
    @Id
    private String id;
    
    @NotNull
    Core core;
    Status status;
    Type type;
    List<Source> sourceList;

    public Item() {
    }

    public Item(@NotNull Core core, Status status, Type type, List<Source> sourceList) {
        this.core = core;
        this.status = status;
        this.type = type;
        this.sourceList = sourceList;
    }

    public Core getCore() {
        return core;
    }

    public void setCore(Core core) {
        this.core = core;
    }

    public List<Source> getSourceList() {
        return sourceList;
    }

    public void setSourceList(List<Source> sourceList) {
        this.sourceList = sourceList;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }
}


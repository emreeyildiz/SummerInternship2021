package com.backend.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.List;


@Document
public class CreatedFrom implements Serializable {
    @Id
    public String id;
    String itemId;
    String categoryEnum;
    String name;
    String comment;

    String statusAttribute1;
    String statusAttribute2;
    String statusAttribute3;
    String hostilityStatus;

    String typeAttribute1;
    String typeAttribute2;
    String typeAttribute3;
    String typeAttribute4;
    SourceKey sourceList;

    public CreatedFrom(String id, String itemId, String categoryEnum, String name, String comment, String statusAttribute1, String statusAttribute2, String statusAttribute3, String hostilityStatus, String typeAttribute1, String typeAttribute2, String typeAttribute3, String typeAttribute4, SourceKey sourceList) {
        this.id = id;
        this.itemId = itemId;
        this.categoryEnum = categoryEnum;
        this.name = name;
        this.comment = comment;
        this.statusAttribute1 = statusAttribute1;
        this.statusAttribute2 = statusAttribute2;
        this.statusAttribute3 = statusAttribute3;
        this.hostilityStatus = hostilityStatus;
        this.typeAttribute1 = typeAttribute1;
        this.typeAttribute2 = typeAttribute2;
        this.typeAttribute3 = typeAttribute3;
        this.typeAttribute4 = typeAttribute4;
        this.sourceList = sourceList;
    }

    public SourceKey getSourceList() {
        return sourceList;
    }

    public void setSourceList(SourceKey sourceList) {
        this.sourceList = sourceList;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCategoryEnum() {
        return categoryEnum;
    }

    public void setCategoryEnum(String categoryEnum) {
        this.categoryEnum = categoryEnum;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getStatusAttribute1() {
        return statusAttribute1;
    }

    public void setStatusAttribute1(String statusAttribute1) {
        this.statusAttribute1 = statusAttribute1;
    }

    public String getStatusAttribute2() {
        return statusAttribute2;
    }

    public void setStatusAttribute2(String statusAttribute2) {
        this.statusAttribute2 = statusAttribute2;
    }

    public String getStatusAttribute3() {
        return statusAttribute3;
    }

    public void setStatusAttribute3(String statusAttribute3) {
        this.statusAttribute3 = statusAttribute3;
    }

    public String getHostilityStatus() {
        return hostilityStatus;
    }

    public void setHostilityStatus(String hostilityStatus) {
        this.hostilityStatus = hostilityStatus;
    }

    public String getTypeAttribute1() {
        return typeAttribute1;
    }

    public void setTypeAttribute1(String typeAttribute1) {
        this.typeAttribute1 = typeAttribute1;
    }

    public String getTypeAttribute2() {
        return typeAttribute2;
    }

    public void setTypeAttribute2(String typeAttribute2) {
        this.typeAttribute2 = typeAttribute2;
    }

    public String getTypeAttribute3() {
        return typeAttribute3;
    }

    public void setTypeAttribute3(String typeAttribute3) {
        this.typeAttribute3 = typeAttribute3;
    }

    public String getTypeAttribute4() {
        return typeAttribute4;
    }

    public void setTypeAttribute4(String typeAttribute4) {
        this.typeAttribute4 = typeAttribute4;
    }

    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }
}
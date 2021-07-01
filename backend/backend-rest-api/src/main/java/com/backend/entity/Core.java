package com.backend.entity;

import javax.validation.constraints.NotNull;
import java.io.Serializable;

public class Core implements Serializable {
    CategoryEnum categoryEnum;
    @NotNull
    String name;
    String comment;

    public Core() {
    }

    public Core(CategoryEnum categoryEnum, String name, String comment) {
        this.categoryEnum = categoryEnum;
        this.name = name;
        this.comment = comment;
    }

    public CategoryEnum getCategoryEnum() {
        return categoryEnum;
    }

    public void setCategoryEnum(CategoryEnum categoryEnum) {
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
}

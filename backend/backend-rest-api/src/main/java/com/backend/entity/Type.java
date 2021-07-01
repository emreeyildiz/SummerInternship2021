package com.backend.entity;

import javax.validation.constraints.NotNull;

public class Type {
    @NotNull
    String typeAttribute1;
    String typeAttribute2;
    String typeAttribute3;
    String typeAttribute4;

    public Type() {
    }

    public Type(String typeAttribute1, String typeAttribute2, String typeAttribute3, String typeAttribute4) {
        this.typeAttribute1 = typeAttribute1;
        this.typeAttribute2 = typeAttribute2;
        this.typeAttribute3 = typeAttribute3;
        this.typeAttribute4 = typeAttribute4;
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
}

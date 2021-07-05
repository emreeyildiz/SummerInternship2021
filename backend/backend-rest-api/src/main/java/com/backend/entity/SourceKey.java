package com.backend.entity;

import java.io.Serializable;

public class SourceKey implements Serializable {
    String SOURCE1;
    String SOURCE2 ;
    String SOURCE3;

    public SourceKey(String SOURCE1, String SOURCE2, String SOURCE3) {
        this.SOURCE1 = SOURCE1;
        this.SOURCE2 = SOURCE2;
        this.SOURCE3 = SOURCE3;
    }

    public String getSOURCE1() {
        return SOURCE1;
    }

    public void setSOURCE1(String SOURCE1) {
        this.SOURCE1 = SOURCE1;
    }

    public String getSOURCE2() {
        return SOURCE2;
    }

    public void setSOURCE2(String SOURCE2) {
        this.SOURCE2 = SOURCE2;
    }

    public String getSOURCE3() {
        return SOURCE3;
    }

    public void setSOURCE3(String SOURCE3) {
        this.SOURCE3 = SOURCE3;
    }
}

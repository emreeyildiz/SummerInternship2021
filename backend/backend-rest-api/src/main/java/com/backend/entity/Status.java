package com.backend.entity;

import javax.validation.constraints.NotNull;

public class Status {
    @NotNull
    String statusAttribute1;
    String statusAttribute2;
    String statusAttribute3;
    HostilityStatus hostilityStatus;

    public Status() {
    }

    public Status(String statusAttribute1, String statusAttribute2, String statusAttribute3, HostilityStatus hostilityStatus) {
        this.statusAttribute1 = statusAttribute1;
        this.statusAttribute2 = statusAttribute2;
        this.statusAttribute3 = statusAttribute3;
        this.hostilityStatus = hostilityStatus;
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

    public HostilityStatus getHostilityStatus() {
        return hostilityStatus;
    }

    public void setHostilityStatus(HostilityStatus hostilityStatus) {
        this.hostilityStatus = hostilityStatus;
    }
}

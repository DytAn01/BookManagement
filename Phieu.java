/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.qlbansach;


/**
 *
 * @author ASUS
 */
public class Phieu {
    protected String MaPhieu;
    protected String MaNV;
    protected String NgayLapPhieu;
    
    public Phieu(String MaPhieu, String MaNV, String NgayLapPhieu){
        this.MaPhieu=MaPhieu;
        this.MaNV=MaNV;
        this.NgayLapPhieu=NgayLapPhieu;
    }

    public String getMaPhieu() {
        return MaPhieu;
    }

    public void setMaPhieu(String MaPhieu) {
        this.MaPhieu = MaPhieu;
    }

    public String getMaNV() {
        return MaNV;
    }

    public void setMaNV(String MaNV) {
        this.MaNV = MaNV;
    }

    public String getNgayLapPhieu() {
        return NgayLapPhieu;
    }

    public void setNgayLapPhieu(String NgayLapPhieu) {
        this.NgayLapPhieu = NgayLapPhieu;
    }
}

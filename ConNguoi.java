/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.qlbansach;
import java.util.Scanner;

public class ConNguoi {
    protected String Hoten;
    protected String DienThoai;
    protected String NgaySinh;
    protected String DiaChi;
    
    public ConNguoi(String Hoten, String DienThoai, String NgaySinh, String DiaChi){
        this.Hoten=Hoten;
        this.DienThoai=DienThoai;
        this.NgaySinh=NgaySinh;
        this.DiaChi=DiaChi;
    }
    
    public ConNguoi(){
        Hoten="";
        DienThoai="";
        NgaySinh="";
        DiaChi="";
    }
    public String getHoten() {
        return Hoten;
    }

    public void setHoten(String Hoten) {
        this.Hoten = Hoten;
    }

    public String getDienThoai() {
        return DienThoai;
    }

    public void setDienThoai(String DienThoai) {
        this.DienThoai = DienThoai;
    }

    public String getNgaySinh() {
        return NgaySinh;
    }

    public void setNgaySinh(String NgaySinh) {
        this.NgaySinh = NgaySinh;
    }

    public String getDiaChi() {
        return DiaChi;
    }

    public void setDiaChi(String DiaChi) {
        this.DiaChi = DiaChi;
    }
    public void NhapThongtinConnguoi(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhập họ tên: ");
        Hoten = sc.nextLine();
        System.out.println("Nhập số điện thoại: ");
        DienThoai = sc.nextLine();
        System.out.println("Nhập ngày sinh: ");
        NgaySinh = sc.nextLine();
        System.out.println("Nhập địa chỉ: ");
        DiaChi = sc.nextLine();
    }
    
    public void XuatThongtinConnguoi(){
        System.out.println("Họ tên: " + Hoten);
        System.out.println("Số điện thoại: " + DienThoai);
        System.out.println("Ngày sinh: " + NgaySinh);
        System.out.println("Địa chỉ: " + DiaChi);
    }
}

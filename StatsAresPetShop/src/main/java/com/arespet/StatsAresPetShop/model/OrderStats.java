/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.arespet.StatsAresPetShop.model;



import javax.persistence.*;
import java.time.LocalDateTime;
import lombok.Data;

@Data
@Entity
@Table(name = "wp9k_wc_order_stats")
public class OrderStats {
    @Id
    @Column(name = "order_id")
    private Long orderId;

    @Column(name = "parent_id")
    private Long parentId;

    @Column(name = "date_created")
    private LocalDateTime dateCreated;

    @Column(name = "date_created_gmt")
    private LocalDateTime dateCreatedGmt;

    @Column(name = "date_paid")
    private LocalDateTime datePaid;

    @Column(name = "date_completed")
    private LocalDateTime dateCompleted;

    @Column(name = "num_items_sold")
    private Integer numItemsSold;

    @Column(name = "total_sales")
    private Double totalSales;

    @Column(name = "tax_total")
    private Double taxTotal;

    @Column(name = "shipping_total")
    private Double shippingTotal;

    @Column(name = "net_total")
    private Double netTotal;

    @Column(name = "returning_customer")
    private Boolean returningCustomer;

    @Column(name = "status")
    private String status;

    @Column(name = "customer_id")
    private Long customerId;

    // Getters and setters
}

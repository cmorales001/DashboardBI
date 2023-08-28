/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.arespet.StatsAresPetShop.repository;

import com.arespet.StatsAresPetShop.model.OrderStats;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author KrauserPC
 */
public interface OrderStatsRepository extends JpaRepository<OrderStats, Long>{
    
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.arespet.StatsAresPetShop.controller;

import com.arespet.StatsAresPetShop.model.OrderStats;
import com.arespet.StatsAresPetShop.model.User;
import com.arespet.StatsAresPetShop.model.WcCustomerLookup;
import com.arespet.StatsAresPetShop.model.WooCommerceOrderItem;
import com.arespet.StatsAresPetShop.repository.OrderStatsRepository;
import com.arespet.StatsAresPetShop.repository.UserRepository;
import com.arespet.StatsAresPetShop.repository.WcCustomerLookupRepository;
import com.arespet.StatsAresPetShop.repository.WooCommerceOrderItemRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author KrauserPC
 */
@RestController
@RequestMapping("/api/v1")
public class Controller {

    @Autowired
    private WooCommerceOrderItemRepository orderItemRepository;

    @Autowired
    private OrderStatsRepository orderStatsRepository;

    @Autowired
    private WcCustomerLookupRepository wcCustomerLookupRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/orderitems")
    public List<WooCommerceOrderItem> getAllOrdersItems() {
        return orderItemRepository.findAll();
    }

    @GetMapping("/orderstats")
    public List<OrderStats> getAllOrderStats() {
        return orderStatsRepository.findAll();
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    @GetMapping("/ordercustomer")
    public List<WcCustomerLookup> getAllOrderCustomer() {
        return this.wcCustomerLookupRepository.findAll();
    }
}

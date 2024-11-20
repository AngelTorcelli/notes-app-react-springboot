package com.notes.notes.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class SaludoController {
    @Autowired
    @GetMapping()
    public String saludar(){
        return "<h1>hola mundo</h1>";
    }
        
        
}

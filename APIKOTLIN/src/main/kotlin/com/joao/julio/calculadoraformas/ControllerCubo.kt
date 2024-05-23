package com.joao.julio.calculadoraformas

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class ControllerCubo() {
    @GetMapping("/cubo/propriedades/{aresta}")
    fun getCuboPropriedades(@PathVariable aresta: Double): Cubo {
        return Cubo(aresta)
    }
}
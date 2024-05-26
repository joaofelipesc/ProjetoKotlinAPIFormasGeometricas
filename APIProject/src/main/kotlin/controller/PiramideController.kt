package org.example.controller

import org.example.model.Resultado
import org.example.services.PiramideService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/piramide")
@CrossOrigin("*")
class PiramideController(private val piramideService: PiramideService) {
    @PostMapping
    @ResponseBody
    fun calcular(@RequestBody params: Map<String, Double>): Resultado {
        val larguraBase = params["largura"]
        val altura = params["altura"]
        return if (larguraBase != null && altura != null) {
            piramideService.calcularValores(larguraBase, altura)
        } else {
            Resultado(0.0, 0.0, 0.0)
        }
    }
}
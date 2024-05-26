package org.example.controller

import org.example.model.Resultado
import org.example.services.CilindroService
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/cilindro")
@CrossOrigin("*")
class CilindroController(private val cilindroService: CilindroService) {
    @PostMapping
    @ResponseBody
    fun calcular(@RequestBody params: Map<String, Double>): Resultado {
        val raio = params["raio"]
        val altura = params["altura"]
        return if (raio != null && altura != null) {
            cilindroService.calcularValores(raio, altura)
        } else {
            Resultado(0.0, 0.0, 0.0)
        }
    }
}
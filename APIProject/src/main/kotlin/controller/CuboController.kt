package org.example.controller

import org.example.model.Resultado
import org.example.services.CuboService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/cubo")
@CrossOrigin("*")
class CuboController(private val cuboService: CuboService) {

    @PostMapping
    @ResponseBody
    fun calcular(@RequestBody params: Map<String, Double>): Resultado {
        val lado = params["lado"]
        return if (lado != null) {
            cuboService.calcularValores(lado)
        } else {
            Resultado(0.0, 0.0, 0.0)
        }
    }
}
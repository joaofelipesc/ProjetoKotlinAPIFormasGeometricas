package org.example.controller

import org.example.model.Resultado
import org.example.services.EsferaService
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/esfera")
@CrossOrigin("*")
class EsferaController(private val esferaService: EsferaService) {

    @PostMapping
    @ResponseBody
    fun calcular(@RequestBody params: Map<String, Double>): Resultado {
        val raio = params["raio"]
        return if (raio != null) {
            esferaService.calcularValores(raio)
        } else {
            Resultado(0.0, 0.0, 0.0)
        }
    }
}
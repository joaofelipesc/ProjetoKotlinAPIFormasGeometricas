package org.example.services

import org.example.model.Cubo
import org.example.model.Resultado
import org.springframework.stereotype.Service

@Service
class CuboService {
    fun calcularValores(lado: Double): Resultado {
        val cubo = Cubo(lado)
        return Resultado(cubo.area, cubo.perimetro, cubo.volume)
    }
}
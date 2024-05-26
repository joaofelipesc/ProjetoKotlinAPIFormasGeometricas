package org.example.services

import org.example.model.Piramide
import org.example.model.Resultado
import org.springframework.stereotype.Service

@Service
class PiramideService {
    fun calcularValores(largura: Double, altura: Double): Resultado {
        val piramide = Piramide(largura, altura)
        return Resultado(piramide.area, piramide.perimetroTotal, piramide.volume)
    }
}
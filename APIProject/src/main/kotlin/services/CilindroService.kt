package org.example.services

import org.example.model.Cilindro
import org.example.model.Resultado
import org.springframework.stereotype.Service

@Service
class CilindroService {
    fun calcularValores(raio: Double, altura: Double): Resultado {
        val cilindro = Cilindro(raio, altura)
        return Resultado(cilindro.area, cilindro.perimetro, cilindro.volume)
    }
}
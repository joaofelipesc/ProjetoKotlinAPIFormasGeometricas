package org.example.services

import org.example.model.Esfera
import org.example.model.Resultado
import org.springframework.stereotype.Service

@Service
class EsferaService {
    fun calcularValores(raio: Double): Resultado {
        val esfera = Esfera(raio)
        return Resultado(esfera.area, esfera.perimetro, esfera.volume)
    }
}
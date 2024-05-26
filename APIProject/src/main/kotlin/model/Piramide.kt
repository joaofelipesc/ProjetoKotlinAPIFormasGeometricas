package org.example.model

import kotlin.math.sqrt


data class Piramide(val largura: Double, val altura: Double) {
    val volume: Double = (1.0 / 3.0) * (largura * largura) * altura
    val area: Double = largura * largura + 2 * largura * sqrt((largura / 2) * (largura / 2) + (altura * altura))
    val perimetroBase: Double = (largura *4)
    val perimetroTotal: Double
        get() {
            val metadeLargura = largura / 2
            val arestaLateral = sqrt((metadeLargura * metadeLargura) + (altura * altura))
            val perimetroArestasLaterais = 4 * arestaLateral
            return perimetroBase + perimetroArestasLaterais
        }
}

package org.example.model

data class Esfera(val raio: Double) {
    val perimetro: Double
        get() = 2 * Math.PI * raio

    val area: Double
        get() = 4 * Math.PI * Math.pow(raio, 2.0)

    val volume: Double
        get() = (4.0 / 3.0) * Math.PI * Math.pow(raio, 3.0)

}
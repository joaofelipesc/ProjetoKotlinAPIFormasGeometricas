package org.example.model

data class Cilindro(val raio: Double, val altura:Double) {
    val perimetro: Double
        get() = 2 * Math.PI * raio

    val area: Double
        get() = 2 * Math.PI * raio * (raio + altura)

    val volume: Double
        get() = Math.PI * Math.pow(raio, 2.0) * altura

}
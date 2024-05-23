package com.joao.julio.calculadoraformas;


data class Cubo(val aresta: Double){
    val perimetro : Double = 12 * aresta
    val area : Double = 6 * (aresta * aresta)
    val volume : Double = aresta * aresta * aresta
}





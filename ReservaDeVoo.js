class ReservaDeVoo {
    

        setNum (numeroReserva){
            this.numeroReserva = numeroReserva;
        }
        setSaida(deOnde){
            this.deOnde = deOnde;
        }
        setDestino(paraOnde){
            this.paraOnde = paraOnde;
        }

        getNum (){
            return this.numeroReserva;
        }
        getSaida (){
            return this.deOnde;
        }

        getDestino (){
            return this.paraOnde;
        }

    
}
module.exports = ReservaDeVoo;
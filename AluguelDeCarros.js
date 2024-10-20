class AluguelDeCarros{

        setNome(nome){
            this.nome = nome;
        }
        setReserva(numeroReserva){
            this.numeroReserva = numeroReserva;
        }
        setTempo(tempoReserva){
            this.tempoReserva = tempoReserva;
        }

        getNome(){
            return this.nome;
        }

        getReserva(){
            return this.tempoReserva;
        }
        getTempo(){
            return this.tempoReserva;
        }
    
}

module.exports = AluguelDeCarros;
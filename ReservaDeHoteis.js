class ReservaDeHoteis {

        setNome(nome){
            this.nome = nome;
        }
        setNumero(numeroReserva){
            this.numeroReserva = numeroReserva;
        }
        setEstadia(tempoEstadia){
            this.tempoEstadia = tempoEstadia;
        }
        setLocal(local){
            this.local = local
        }
//---------------------------------------------------------
        getNome(){
            return this.nome;
        }        
        getNumero(){
            return this.numeroReserva;
        }
        getEstadia(){
            return this.tempoEstadia;
        }
        getLocal(){
            return this.local;
        }
       
    
}

module.exports = ReservaDeHoteis;
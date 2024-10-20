const ReservaDeVoo = require('./ReservaDeVoo');
const ReservaDeHoteis = require('./ReservaDeHoteis');
const AluguelDeCarros = require('./AluguelDeCarros');

class TravelFacade {
    reservaViagem(vooData, hotelData, carroData) {
        
        const reservaVoo = new ReservaDeVoo();
        reservaVoo.setNum(vooData.numeroReserva);
        reservaVoo.setSaida(vooData.deOnde);
        reservaVoo.setDestino(vooData.paraOnde);

        const reservaDeHoteis = new ReservaDeHoteis();
        reservaDeHoteis.setNome(hotelData.nome);
        reservaDeHoteis.setNumero(hotelData.numeroReserva);
        reservaDeHoteis.setEstadia(hotelData.tempoEstadia);
        reservaDeHoteis.setLocal(hotelData.local);

        const aluguelDeCarros = new AluguelDeCarros();
        aluguelDeCarros.setNome(carroData.nome);
        aluguelDeCarros.setReserva(carroData.numeroReserva);
        aluguelDeCarros.setTempo(carroData.tempoReserva);

        return {
            voo: reservaVoo,
            hotel: reservaDeHoteis,
            carro: aluguelDeCarros
        };
    }
}

module.exports = TravelFacade;
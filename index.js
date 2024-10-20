const TravelFacade = require('./TravelFacade');


const travelFacade =new TravelFacade();


const vooData = {
    numeroReserva: 'HU7895',
    deOnde: 'Cornelio',
    paraOnde: 'Paris'
};


const hotelData = {
    nome: 'Motel da anta',
    numeroReserva: 'HUE7899',
    tempoEstadia: 5,
    local: 'carai do céu'
};


const carroData = {
    nome: 'Jhon',
    numeroReserva: 'QWE8997',
    tempoReserva: 10
};


const reservaGeral = travelFacade.reservaViagem(vooData, hotelData, carroData);


console.log(`Reserva de Voo: De ${reservaGeral.voo.getSaida()} para ${reservaGeral.voo.getDestino()}, numero: ${reservaGeral.voo.getNum()}`);
console.log(`Reserva de Hotel: ${reservaGeral.hotel.getNome()}, Local: ${reservaGeral.hotel.getLocal()}, Estadia: ${reservaGeral.hotel.getEstadia()} dias, Numero da reserva: ${reservaGeral.hotel.getNumero()}`);
console.log(`Aluguel de Carro: ${reservaGeral.carro.getNome()}, Tempo de reserva: ${reservaGeral.carro.getTempo()} dias`);

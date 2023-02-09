AOS.init();

const dataDoEvento = new Date ("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contador = setInterval(function () {
  const agora = new Date ();
  const timeStampAtual = agora.getTime();
  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diasEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;


  const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
  const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horaEmMs);
  const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
  const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

  document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
  
  if (distanciaAteOEvento < 0 ) {
    clearInterval(contador);
    document.getElementById('contador').innerHTML = 'O Evento já aconteceu.';
  }
}, 1000);
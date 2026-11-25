function estacao(){
  let mes = prompt("Digite o mês por extenso (ex: Setembro):");
  let mostrar = document.getElementById('resultado');

  mes = mes.toUpperCase();

  console.log(mes)

  if(mes == 'DEZEMBRO' || mes == 'JANEIRO' || mes == 'FEVEREIRO'){
   mostrar.innerHTML = `<p> É Verão!! </p>`;
  }
   if(mes == 'MARÇO' || mes == 'ABRIL' || mes == 'MAIO'){
   mostrar.innerHTML = `<p> É Outono!! </p>`;
 }
   if(mes == 'JUNHO' || mes == 'JULHO' || mes == 'AGOSTO'){
   mostrar.innerHTML = `<p> É Inverno!! </p>`;
 }
   if(mes == 'SETEMBRO' || mes == 'OUTOBRO' || mes == 'NOVEMBRO'){
   mostrar.innerHTML = `<p> É Primavera!! </p>`;
 }
   
}
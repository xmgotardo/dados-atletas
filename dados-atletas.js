class Atleta {
   constructor(nome, idade, peso, altura, notas) {
   this.nome = nome;
   this.idade = idade;
   this.peso = peso;
   this.altura = altura;
   this.notas = notas;
   };

   calculaCategoria() {
      if(this.idade >= 8 && this.idade <= 11) this.categoria = 'Infantil';

         else if(this.idade >= 12 && this.idade <= 13) this.categoria = 'Juvenil';

            else if(this.idade >= 14 && this.idade <= 15) this.categoria = 'Intermediário';

               else if(this.idade >= 16 && this.idade <= 30) this.categoria = 'Adulto';

                  else this.categoria = 'Sem categoria';
   };

   calculaIMC() {
      this.imc = this.peso / (this.altura * this.altura);
   };

   calculaMediaValida() {
      this.notas.forEach(() => {
         this.notas.sort((menor, maior) => {
            return menor - maior;
         });
         
         let notasComputadas = this.notas.slice(1, 4);

         let soma = 0;
         notasComputadas.forEach((nota) => {
            soma += nota;
         });
         this.media = (soma / notasComputadas.length).toFixed(15);
      });
   };

   obtemNomeAtleta() {
      console.log(`Nome: ${this.nome}`);
   };

   obtemIdadeAtleta() {
      console.log(`Idade: ${this.idade}`);
   };

   obtemPesoAtleta() {
      console.log(`Peso: ${this.peso}`);
   };

   obtemAlturaAtleta() {
      console.log(`Altura: ${this.altura}`);
   };

   obtemNotasAtleta() {
      console.log(`Notas: ${this.notas}`);
   };

   obtemCategoria() {
      this.calculaCategoria();
      console.log(`Categoria: ${this.categoria}`);
   };

   obtemIMC() {
      this.calculaIMC();
      console.log(`IMC: ${this.imc}`);
   };

   obtemMediaValida() {
      this.calculaMediaValida();
      console.log(`Média válida: ${this.media}`);
   };
};

function exibeCadastroAtleta(atleta) {
   atleta.obtemNomeAtleta();
   atleta.obtemIdadeAtleta();
   atleta.obtemPesoAtleta();
   atleta.obtemAlturaAtleta();
   atleta.obtemNotasAtleta();
   atleta.obtemCategoria();
   atleta.obtemIMC();
   atleta.obtemMediaValida();
};

let atleta = new Atleta('Cesar Abascal', 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

exibeCadastroAtleta(atleta);
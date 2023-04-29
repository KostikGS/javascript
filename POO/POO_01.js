//Encapsulamento, Herança e Polimorfismo

class Pessoa{
    constructor(nome){
        //atributos
        this.nome = nome
      
        }
      
      //Parametros(Metodos)
      falar(frase){
      console.log(this.nome + " disse: " + frase)
      }
    }

    class Aluno extends Pessoa{
        estudar(disciplina){
            console.log(this.nome + " estuda " + disciplina)  
        }
    }

    class Professor extends Pessoa{
        ensinar(disciplina){
            console.log(this.nome + " ensina " + disciplina)  
        }
    }
    
    //Instanciar Objeto
    var p1 = new Professor("Francisco")
    p1.falar("Como vai você?")
    p1.ensinar("Matematica")
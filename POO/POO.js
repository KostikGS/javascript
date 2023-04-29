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
    
    //Instanciar Objeto
    var p1 = new Pessoa("Francisco")
    
    p1.falar("Como vai você?")
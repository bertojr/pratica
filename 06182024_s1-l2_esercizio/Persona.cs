using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06182024_s1_l2_esercizio
{
    internal class Persona
    {
        string nome;
        string cognome;
        int eta;

        public Persona(string nome, string cognome, int eta)
        {
            this.nome = nome;
            this.cognome = cognome;
            this.eta = eta;
        }

        public string Nome 
        { 
            get 
            { 
                return nome;  
            } 
            set 
            { 
                nome = value; 
            }
        }
        public string Cognome
        {
            get
            {
                return cognome;
            }
            set
            {
                cognome = value;
            }
        }
        public int Eta
        {
            get
            {
                return eta;
            }
            set
            {
                eta = value;
            }
        }

        public string Dettagli()
        {
            return nome+" "+cognome+" - "+eta+" anni";
        }


    }
}

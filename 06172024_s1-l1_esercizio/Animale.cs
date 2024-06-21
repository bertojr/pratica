using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05172024_s01_l1_esercizio
{
    internal class Animale
    {
        string nome;
        string razza;
        string tipo;
        int eta;

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
        public string Razza
        {
            get
            {
                return razza;
            }
            set
            {
                razza = value;
            }
        }
        public string Tipo
        {
            get
            {
                return tipo;
            }
            set
            {
                tipo = value;
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

        public void Description()
        {
            Console.WriteLine("Nome: " + nome + " - Tipo: " + tipo + " - Razza: " + razza+" - Eta: "+eta);
        }
    }
}

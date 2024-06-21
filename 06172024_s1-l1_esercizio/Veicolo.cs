using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05172024_s01_l1_esercizio
{
    internal class Veicolo
    {
        string marca;
        string modello;
        string colore;
        int velocitaMax;

        public string Marca
        {
            get
            {
                return marca;
            }
            set
            {
                marca = value;
            }
        }
        public string Modello
        {
            get
            {
                return modello;
            }
            set
            {
                modello = value;
            }
        }
        public string Colore
        {
            get
            {
                return colore;
            }
            set
            {
                colore = value;
            }
        }
        public int VelocitaMax
        {
            get
            {
                return velocitaMax;
            }
            set
            {
                velocitaMax = value;
            }
        }

        public void Description()
        {
            Console.WriteLine("Marca: "+marca+" - Modello: "+modello+" - Velocià massima: "+velocitaMax);
        }
    }
}

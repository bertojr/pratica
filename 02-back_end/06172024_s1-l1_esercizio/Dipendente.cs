using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05172024_s01_l1_esercizio
{
    internal class Dipendente
    {
        string name;
        string lastName;
        int stipendio;
        

        public string Name
        {
            get
            {
                return name;
            }
            set
            {
                name = value;
            }
        }

        public string LastName
        {
            get
            {
                return lastName;
            }
            set
            {
                lastName = value;
            }
        }

        public int Stipendio
        {
            get
            {
                return stipendio;
            }
            set
            {
                stipendio = value;
            }
        }

        public void Description()
        {
            Console.WriteLine(name + " " + lastName + " - " + stipendio+" EURO al mese");
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05172024_s01_l1_esercizio
{
    internal class Atleta
    {
        string name;
        string lastName;
        string sport;

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

        public string Sport
        {
            get
            {
                return sport;
            }
            set
            {
                sport = value;
            }
        }

        public void Description()
        {
            Console.WriteLine(name+" "+lastName+" - "+sport);
        }
    }
}

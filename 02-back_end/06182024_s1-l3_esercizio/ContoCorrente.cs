using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace _06182024_s1_l3_esercizio
{
    internal class ContoCorrente
    {
        private int saldo;
        private string nome;
        private string cognome;

        public ContoCorrente(string nome, string cognome, int saldo)
        {
            this.saldo = saldo;
            this.nome = nome;
            this.cognome = cognome;
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
        public int Saldo
        {
            get
            {
                return saldo;
            }
            set
            {
                saldo = value;
            }
        }

        public void dettagliConto()
        {
            Console.WriteLine($"Intestatario conto: {nome} {cognome}");
        }

        public void versamento(int vers)
        {
            saldo += vers;
        }

        public void preleva(int prel)
        {
            saldo -= prel;
        }
    }
}

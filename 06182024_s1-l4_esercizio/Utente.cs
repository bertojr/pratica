using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06182024_s1_l4_esercizio
{
    internal class Utente
    {
        private string username;
        private string password;
        private bool isLogged;
        private DateTime dateOraLog;
        private string[] listaAccessiArr = new string[10];

        public Utente ()
        {
            this.username = "";
            this.password = "";
        }

        public void login()
        {
            string conferma;
 

            if (!isLogged)
            {
                Console.WriteLine("Inserisci username");
                username = Console.ReadLine();
                Console.WriteLine("Inserisci password");
                password = Console.ReadLine();
                Console.WriteLine("Conferma password");
                conferma = Console.ReadLine();
                if (password==conferma && username != "")
                    {
                        Console.WriteLine($"Utente loggato correttamente");
                        isLogged = true;
                        dateOraLog = DateTime.Now;
                    }
                else
                    {
                        Console.WriteLine("Errore nell'autenticazione, riprovare....");
                    }
            }
            else
            {
                Console.WriteLine($"Utente già loggato in {dateOraLog}");
            }
            
        }
        public void logout()
        {
            if (isLogged)
            {
                Console.WriteLine("Logout effettuato correttamente");
                isLogged = false;
            }
            else
            {
                Console.WriteLine("Logout non effettuato perchè nessun utente era loggato");
            }
        }

        public void verificaDataOraLogin()
        {
            if(isLogged)
            {
                Console.WriteLine(dateOraLog);
            }
            else
            {
                Console.WriteLine("Nessun utente loggato");
            }
        }
        
        public void listaAccessi()
        {
            for(int i = 0; i < listaAccessiArr.Length; i++)
            {
                Console.WriteLine($"Accesso N°{i}: {listaAccessiArr[i]}");
            }
        }
    }
}

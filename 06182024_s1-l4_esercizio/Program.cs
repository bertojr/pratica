namespace _06182024_s1_l4_esercizio
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /***********************************************************
             * Creare una console application che riproponga un menu come quello proposto di seguito:

	        ===============OPERAZIONI==============

	        Scegli l'operazione da effettuare:

	        1.: Login

	        2.: Logout

	        3.: Verifica ora e data di login

	        4.: Lista degli accessi

	        5.: Esci

	        ========================================

            L'esercizio deve poter simulare l'attività di login di un utente, ed in particolare:

            - L'operazione di login deve richiedere una username, una password ed una conferma password. 
            Solo se la username è stata inserita e le password coincidono, l'utente verrà autenticato,

            - L'operazione di logout deve consentire di dimenticare l'utente autenticato. 
            Se si richiede il logout quando un utente non è loggato, 
            il sistema deve riproporre un messaggio di errore,

            - L'operazione di verifica deve riportare la data e 
            l'ora di quando è stato effettuato il login dell'utente. 
            Nel caso in cui venisse richiamato il metodo ma nessun utente risulta autenticato, 
            il sistema deve riproporre un messaggio di errore.

            - La lista degli accessi deve riportare la lista storica dei login dell'utente.

            Affinché l'esercizio venga svolto in modo corretto, 
            deve essere implementata una classe statica 'Utente' che comprenda metodi e 
            proprietà anch'esse statiche.
            ***********************************************************/
            int scelta;

            Utente utente = new Utente();

            do
            {
                Console.WriteLine("Scegliere una delle seguenti opzioni: ");
                Console.WriteLine("1 ->Login");
                Console.WriteLine("2 ->logout");
                Console.WriteLine("3 ->Verifica data e ora di Login");
                Console.WriteLine("4 ->Lista degli accessi");
                Console.WriteLine("0 ->Esci");
                scelta = Convert.ToInt32(Console.ReadLine());

                switch (scelta)
                {
                    case 1:
                        {
                            utente.login();
                            break;
                        }
                    case 2:
                        {
                            utente.logout();
                            break;
                        }
                    case 3:
                        {
                            utente.verificaDataOraLogin();
                            break;
                        }
                    case 4:
                        {
                            Console.WriteLine("opzione 4");
                            break;
                        }
                    case 0:
                        {
                            Console.WriteLine("Uscita....");
                            break;
                        }
                    default:
                        {
                            Console.WriteLine("Opzione non corretta");
                            break;
                        }
                }
                
            }
            while(scelta != 0);
        }
    }
}

namespace _06182024_s1_l3_esercizio
{
    internal class Program
    {
        static void Main(string[] args)
        {   
            ContoCorrente c1 = new ContoCorrente("Paulo", "Dybala", 1000);
            c1.dettagliConto();
            c1.versamento(10);
            Console.WriteLine(c1.Saldo);
            c1.preleva(10);
            Console.WriteLine(c1.Saldo);
            ContoCorrente c2 = new ContoCorrente("Federico", "Chiesa", 5000);
            c2.dettagliConto();
            Console.WriteLine(c2.Saldo);
            c2.versamento(983000);
            Console.WriteLine(c2.Saldo);
            c2.preleva(1200);
            Console.WriteLine(c2.Saldo);

            /****************************************************
            
            Console.WriteLine("Quanti nomi vuoi aggiungere nell'array?");
            int n = Convert.ToInt32(Console.ReadLine());
            string[] nomiArr = new String[n];
            for (int i = 0; i < nomiArr.Length; i++)
            {
                Console.WriteLine("Inserisci un nome");
                string nome = Console.ReadLine();
                nomiArr[i] = nome;
            }

            Console.WriteLine("Inserisci un nome da cercare all'interno dell'array");
            string searchNome = Console.ReadLine();
            string nomeTrovato = "";
            for (int i = 0;i < nomiArr.Length; i++)
            {
                if (searchNome == nomiArr[i])
                {
                    nomeTrovato = nomiArr[i];
                }
            }
            if(nomeTrovato == searchNome)
            {
                Console.WriteLine(nomeTrovato);
            }
            else
            {
                Console.WriteLine("Nessun nome trovato");
            }
            
            /*********************************************
            Console.WriteLine("Inserire la dimensione dell'array");
            int dim = Convert.ToInt32(Console.ReadLine());
            int[] num = new int[dim];
            int sum = 0;
            for (int i = 0; i < num.Length; i++)
            {
                Console.WriteLine("Inserire un numero");
                num[i] = Convert.ToInt32(Console.ReadLine());
                sum += num[i];
            }
            Console.WriteLine(sum);
            int media = sum / num.Length;

            Console.WriteLine(sum); */
        }
    }
}

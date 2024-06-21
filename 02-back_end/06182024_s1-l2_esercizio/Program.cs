namespace _06182024_s1_l2_esercizio
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Persona p1 = new Persona("Paulo", "Dybala", 29);
            Console.WriteLine(p1.Dettagli());
            Persona p2 = new Persona("Federico", "Chiesa", 27);
            Console.WriteLine(p2.Dettagli());
            Persona p3 = new Persona("Alvaro", "Morata", 31);
            Console.WriteLine(p3.Dettagli());
        }
    }
}

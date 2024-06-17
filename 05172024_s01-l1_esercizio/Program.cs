namespace _05172024_s01_l1_esercizio
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Atleta a1 = new Atleta();
            a1.Name = "Paulo";
            a1.LastName = "Dybala";
            a1.Sport = "Calcio";
            a1.Description();

            Veicolo v1 = new Veicolo();
            v1.Marca = "Peugeot";
            v1.Modello = "E-208";
            v1.Colore = "Gialla";
            v1.VelocitaMax = 250;
            v1.Description();

            Animale an1 = new Animale();
            an1.Nome = "Paulino";
            an1.Tipo = "Pesce";
            an1.Razza = "Agnati";
            an1.Eta = 1;
            an1.Description();

            Dipendente d1 = new Dipendente();
            d1.Name = "Paulo";
            d1.LastName = "Dybala";
            d1.Stipendio = 416666;
            d1.Description();
        }
    }
}

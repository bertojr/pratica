namespace _07042024_s5_l1_esercizio.Models
{
    public class Cliente
    {
        public int ClienteID { get; set; }
        public string Nome { get; set; }
        public string CF { get; set; } // Codice fiscale
        public string PartitaIVA { get; set; } // partita IVA

        public bool IsAzienda { get; set; }
    }
}

namespace _07042024_s5_l1_esercizio.Models
{
    public class StatoSpedizione
    {
        public int StatoID { get; set; }
        public int SpedizioneID { get; set; }
        public Spedizione Spedizione { get; set; }
        public string Stato { get; set; }
        public string Luogo { get; set; }
        public string Descrizione { get; set; }
        public DateTime DataOra { get; set; }
    }
}

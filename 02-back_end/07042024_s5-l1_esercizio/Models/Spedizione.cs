namespace _07042024_s5_l1_esercizio.Models
{
    public class Spedizione
    {
        public int SpedizioneID { get; set; }
        public int ClienteID { get; set; }
        public Cliente Cliente { get; set; }
        public string NumeroIdentificativo { get; set; }
        public DateTime DataSpedizione { get; set; }
        public decimal Peso {  get; set; }
        public string CittaDestinataria { get; set; }
        public string IndirizzoDestinatario { get; set; }
        public string NominativoDestinatario { get; set; }
        public decimal CostoSpedizione { get; set; }
        public DateTime DataConsegnaPrevista { get; set; }


    }
}

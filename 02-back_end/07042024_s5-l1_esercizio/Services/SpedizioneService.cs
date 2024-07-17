using _07042024_s5_l1_esercizio.Interfaces;
using _07042024_s5_l1_esercizio.Models;

namespace _07042024_s5_l1_esercizio.Services
{
    public class SpedizioneService : SqlServerServiceBase, ISpedizioneService
    {
        public SpedizioneService(IConfiguration config, ILogger<ClienteService> logger) : base(config, logger) { }
        public void AggiungiSpedizione(Spedizione spedizione)
        {
            try
            {

            }
            catch(Exception ex)
            {
                throw;
            }
        }
    }
}

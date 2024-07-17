using _07042024_s5_l1_esercizio.Models;

namespace _07042024_s5_l1_esercizio.Interfaces
{
    public interface IClienteService
    {
        Cliente Create(Cliente cliente);
        Cliente Update(int clienteID, Cliente cliente);
        List<Cliente> GetAll();
        void Delete(int clienteID);
    }
}

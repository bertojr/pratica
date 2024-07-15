using System.Data.SqlClient;
using _07042024_s5_l1_esercizio.Interfaces;
using _07042024_s5_l1_esercizio.Models;

namespace _07042024_s5_l1_esercizio.Services
{
    public class ClienteService : SqlServerServiceBase, IClienteService
    {
        public ClienteService(IConfiguration config) : base(config) 
        { 
        
        }
        public void Create(Cliente cliente)
        {
            var query = "INSERT INTO Clienti(Nome, CF, PartitaIVA, IsAzienda)" +
                "VALUES(@nome, @cf, @partitaIva, @isAzienda)";
            var cmd = GetCommand(query);
            cmd.Parameters.Add(new SqlParameter("@nome", cliente.Nome));
            cmd.Parameters.Add(new SqlParameter("@cf", cliente.CF));
            cmd.Parameters.Add(new SqlParameter("@partitaIva", cliente.PartitaIVA));
            cmd.Parameters.Add(new SqlParameter("@isAzienda", cliente.IsAzienda));
            using (var conn = GetConnection())
            {
                conn.Open();
                cmd.ExecuteNonQuery();
            }
            
        }
    }
}

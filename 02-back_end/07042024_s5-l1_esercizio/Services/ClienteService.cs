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
            var query = "INSERT INTO Clienti(Nome, CF, PartitaIVA, TipoCliente)" +
                "VALUES(@nome, @cf, @partitaIva, @tipoCliente)";
            var cmd = GetCommand(query);
            cmd.Parameters.Add(new SqlParameter("@nome", cliente.Nome));
            if (cliente.CF==null)
            {
                cmd.Parameters.Add(new SqlParameter("@cf", DBNull.Value));
                cmd.Parameters.Add(new SqlParameter("@partitaIva", cliente.PartitaIVA));
                cmd.Parameters.Add(new SqlParameter("@tipoCliente", "Azienda"));
            }
            else
            {
                cmd.Parameters.Add(new SqlParameter("@cf", cliente.CF));
                cmd.Parameters.Add(new SqlParameter("@partitaIva", DBNull.Value));
                cmd.Parameters.Add(new SqlParameter("@tipoCliente", "Privato"));
            }
            
            using (var conn = GetConnection())
            {
                conn.Open();
                cmd.ExecuteNonQuery();
            }
            
        }
    }
}

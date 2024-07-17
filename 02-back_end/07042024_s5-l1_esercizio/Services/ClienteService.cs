using System.Data.SqlClient;
using _07042024_s5_l1_esercizio.Interfaces;
using _07042024_s5_l1_esercizio.Models;

namespace _07042024_s5_l1_esercizio.Services
{
    public class ClienteService : SqlServerServiceBase, IClienteService
    {
        private const string INSERT_CLIENTE =
            "INSERT INTO Clienti(Nome, CF, PartitaIVA, TipoCliente) OUTPUT INSERTED.ClienteID " +
                "VALUES(@nome, @cf, @partitaIva, @tipoCliente)";
        private const string DELETE_CLIENTE =
            "DELETE FROM Clienti WHERE ClienteID = @id";
        private const string SELECT_ALL_CLIENTI =
            "SELECT * FROM Clienti";
        private const string UPDATE_CLIENTI = 
            "UPDATE Clienti SET Nome = @nome WHERE ClienteID = @id";
        public ClienteService(IConfiguration config, ILogger<ClienteService> logger) : base(config, logger) { }
        public Cliente Create(Cliente cliente)
        {
            try
            {
                using var conn = GetConnection();
                conn.Open();
                using var cmd = GetCommand(INSERT_CLIENTE);
                cmd.Parameters.Add(new SqlParameter("@nome", cliente.Nome));
                if (cliente.CF == null)
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
                cliente.ClienteID = (int)cmd.ExecuteScalar();
                return cliente;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Exception creating cliente");
                throw;
            }
        }

        public void Delete(int clienteID)
        {
            try
            {
                using var conn = GetConnection();
                conn.Open();
                using var cmd = GetCommand(DELETE_CLIENTE);
                cmd.Parameters.Add(new SqlParameter("@id", clienteID));
                cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Exception deleting cliente with id = {}", clienteID);
                throw;
            }
        }

        public List<Cliente> GetAll()
        {
            var result = new List<Cliente>();
            try
            {
                using var conn = GetConnection();
                conn.Open();
                using var cmd = GetCommand(SELECT_ALL_CLIENTI);
                using var reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    result.Add(new Cliente()
                    {
                        ClienteID = reader.IsDBNull(0) ? 0 : reader.GetInt32(0),
                        Nome = reader.IsDBNull(1) ? string.Empty : reader.GetString(1),
                        CF = reader.IsDBNull(2) ? string.Empty : reader.GetString(2),
                        PartitaIVA = reader.IsDBNull(3) ? string.Empty : reader.GetString(3),
                        TipoCliente = reader.IsDBNull(4) ? string.Empty : reader.GetString(4)
                    });
                }
                return result;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Exception reading all cliente");
                throw;
            }
        }

        public Cliente Update(int clienteID, Cliente cliente)
        {
            try
            {
                using var conn = GetConnection();
                conn.Open();
                using var cmd = GetCommand(UPDATE_CLIENTI);
                cmd.Parameters.Add(new SqlParameter("@nome", cliente.Nome));
                cmd.Parameters.Add(new SqlParameter("@id", clienteID));
                return null;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Exception updating cliente with id = {}", clienteID);
                throw;
            }
        }
    }
}

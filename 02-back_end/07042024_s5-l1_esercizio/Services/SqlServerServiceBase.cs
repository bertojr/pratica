using System.Data.Common;
using System.Data.SqlClient;

namespace _07042024_s5_l1_esercizio.Services
{
    public class SqlServerServiceBase
    {
        private readonly SqlConnection _connection;
        protected readonly ILogger<ClienteService> logger;

        public SqlServerServiceBase(IConfiguration config, ILogger<ClienteService> logger)
        {
            this.logger = logger;
            _connection = new SqlConnection(config.GetConnectionString("GestioneSpedizione"));
        }

        protected DbCommand GetCommand(string commandText)
        {
            return new SqlCommand(commandText, _connection);
        }

        protected DbConnection GetConnection()
        {
            return _connection;
        }
    }
}

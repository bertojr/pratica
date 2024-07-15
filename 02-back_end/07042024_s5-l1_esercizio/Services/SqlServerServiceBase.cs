using System.Data.Common;
using System.Data.SqlClient;

namespace _07042024_s5_l1_esercizio.Services
{
    public class SqlServerServiceBase
    {
        private SqlConnection _connection;

        public SqlServerServiceBase(IConfiguration config)
        {
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

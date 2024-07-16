using _07042024_s5_l1_esercizio.Interfaces;
using _07042024_s5_l1_esercizio.Models;
using Microsoft.AspNetCore.Mvc;

namespace _07042024_s5_l1_esercizio.Controllers
{
    public class AdminController : Controller
    {
        private readonly IClienteService _clienteService;

        public AdminController(IClienteService clienteService)
        {
            _clienteService = clienteService;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Create()
        {
            return View(new Cliente());
        }

        [HttpPost]
        public IActionResult Create(Cliente cliente)
        {
            _clienteService.Create(cliente);
            return RedirectToAction("Index", "Admin");
        }
    }
}

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

        [HttpGet]
        public IActionResult Clienti()
        {
            return View(_clienteService.GetAll());
        }


        [HttpPost]
        public IActionResult Create(Cliente cliente)
        {
            _clienteService.Create(cliente);
            return RedirectToAction("Clienti");
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            _clienteService.Delete(id);
            return RedirectToAction("Clienti");
        }
    }
}

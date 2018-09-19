using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyWebApp.AcessoDados;
using MyWebApp.Entidades;

namespace MyWebApp.Controllers
{
    [Route("api/[Controller]")]
    public class PedidoController : Controller
    {
        private readonly IPedidoRepository _pedidoRepository;

        public PedidoController(IPedidoRepository pedidoRespository)
        {
            _pedidoRepository = pedidoRespository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_pedidoRepository.ListarPedidos());
            } catch(Exception ex)
            {
                return BadRequest("Erro: " + ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Pedido pedido)
        {
            try
            {
                if (ModelState.IsValid)
                    _pedidoRepository.Salvar(pedido);
                return Created("api/pedido", pedido);
            } catch(Exception ex)
            {
                return BadRequest("Erro: " + ex.Message);
            }
        }
    }
}

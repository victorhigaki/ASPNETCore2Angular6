using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyWebApp.Controllers
{
    [Route("api/[Controller]")]
    public class AppController : Controller
    {

        public IActionResult Loja()
        {
            return View();
        }
    }
}
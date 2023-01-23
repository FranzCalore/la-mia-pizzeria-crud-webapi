using la_mia_pizzeria.Database;
using la_mia_pizzeria.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace la_mia_pizzeria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzeController : ControllerBase
    {

        [HttpGet]
        public IActionResult GetSpecial()
        {
            using PizzeriaContext db = new();
            List<Pizza> ListaPizze = db.Pizze.Include(Pizza=>Pizza.Ingredienti).Where(Pizza=>Pizza.Categoria.Nome=="Pizze Speciali").ToList();
            return Ok(ListaPizze);
        }

    }
}

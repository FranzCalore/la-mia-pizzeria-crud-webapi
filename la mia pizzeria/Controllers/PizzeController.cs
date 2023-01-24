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
        public IActionResult Get(string? search)
        {
            using PizzeriaContext db = new();
            List<Pizza> ListaPizze = new();
            if (search is null || search == "")
            {
                ListaPizze = db.Pizze.Include(Pizza => Pizza.Ingredienti).ToList();
            }
            else
            {
                search = search.ToLower();
                ListaPizze = db.Pizze.Include(Pizza => Pizza.Ingredienti)
                                     .Where(Pizza => Pizza.Nome.ToLower().Contains(search) || Pizza.Ingredienti.Any(Ing=>Ing.Condimento.ToLower().Contains(search)) || Pizza.CategoriaNome.ToLower().Contains(search) || Pizza.Descrizione.ToLower().Contains(search))
                                     .ToList();
            }
            return Ok(ListaPizze);
        }

       /* [HttpGet]
        public IActionResult Get(int id)
        {

        }
       */

    }
}

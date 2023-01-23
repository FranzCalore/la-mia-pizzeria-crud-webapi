using System.Text.Json;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace la_mia_pizzeria.Models
{
    public class Categoria
    {
        [Key]
        public string Nome { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.Always)]
        public List<Pizza>? ListaProdotti { get; set; }

        public Categoria() 
        { 

        }
    }
}

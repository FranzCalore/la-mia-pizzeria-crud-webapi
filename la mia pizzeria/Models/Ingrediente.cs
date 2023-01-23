using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata;
using System.Text.Json.Serialization;

namespace la_mia_pizzeria.Models
{
    public class Ingrediente
    {
        [Key]
        public int IngredienteId { get; set; }

        public string Condimento { get; set; }

        [JsonIgnore]
        public List<Pizza>? PizzeCondite {get;set;}

        public Ingrediente() { }
    }
}

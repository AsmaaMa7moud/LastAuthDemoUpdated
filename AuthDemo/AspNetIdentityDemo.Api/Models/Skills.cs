using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetIdentityDemo.Api.Models
{
    [Table("Skills")]
    public class Skills
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<UserSkills> userSkills { get; set; }
    }
}

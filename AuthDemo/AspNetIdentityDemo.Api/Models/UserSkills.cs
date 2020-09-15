using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetIdentityDemo.Api.Models
{
    [Table("UserSkills")]
    public class UserSkills
    {
        public int Id { get; set; }

        public string UserID { get; set; }
        [ForeignKey("UserID")]
        public virtual User users { get; set; }
        public int SkillsId { get; set; }
        [ForeignKey("SkillsId")]
        public virtual Skills skills { get; set; }
    }
}

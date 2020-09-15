using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetIdentityDemo.Api.Models
{
    [Table("User")]
    public class User
    {

        [ForeignKey("Users")]
        [Key]
        public string UserID { get; set; }
        public virtual IdentityUser Users { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string VerificationCode { get; set; }
        public virtual ICollection<UserSkills> userSkills { get; set; }

    }
}

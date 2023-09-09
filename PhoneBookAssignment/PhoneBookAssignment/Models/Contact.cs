using System.ComponentModel.DataAnnotations.Schema;

namespace PhoneBookAssignment.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }

        public int PhoneBookTypeId { get; set; }
        public virtual PhoneBookType? PhoneBookType { get; set; }

    }
}

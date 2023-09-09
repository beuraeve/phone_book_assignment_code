using Microsoft.EntityFrameworkCore;

namespace PhoneBookAssignment.Data
{
    public class PhoneBookAssignmentContext : DbContext
    {
        public PhoneBookAssignmentContext (DbContextOptions<PhoneBookAssignmentContext> options)
            : base(options)
        {
        }

        public DbSet<PhoneBookAssignment.Models.PhoneBookType> PhoneBookType { get; set; } = default!;

        public DbSet<PhoneBookAssignment.Models.Contact>? Contact { get; set; }
    }
}

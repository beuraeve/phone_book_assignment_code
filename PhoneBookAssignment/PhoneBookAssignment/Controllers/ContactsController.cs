using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PhoneBookAssignment.Data;
using PhoneBookAssignment.Models;

namespace PhoneBookAssignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly PhoneBookAssignmentContext _context;

        public ContactsController(PhoneBookAssignmentContext context)
        {
            _context = context;
        }

        // GET: api/Contacts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> GetContact()
        {
          if (_context.Contact == null)
          {
              return NotFound();
          }
            return await _context.Contact.ToListAsync();
        }

        // POST: api/Contacts
        [HttpPost]
        public async Task<ActionResult<Contact>> PostContact(Contact contact)
        {
          if (_context.Contact == null)
          {
              return Problem("Entity set 'PhoneBookAssignmentContext.Contact'  is null.");
          }
            _context.Contact.Add(contact);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContact", new { id = contact.Id }, contact);
        }

       
    }
}

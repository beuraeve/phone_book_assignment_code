using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PhoneBookAssignment.Data;
using PhoneBookAssignment.Models;

namespace PhoneBookAssignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhoneBookTypesController : ControllerBase
    {
        private readonly PhoneBookAssignmentContext _context;

        public PhoneBookTypesController(PhoneBookAssignmentContext context)
        {
            _context = context;
        }

        // GET: api/PhoneBookTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PhoneBookType>>> GetPhoneBookType()
        {
          if (_context.PhoneBookType == null)
          {
              return NotFound();
          }
            return await _context.PhoneBookType.ToListAsync();
        }

     
        // POST: api/PhoneBookTypes (Add)
        [HttpPost]
        public async Task<ActionResult<PhoneBookType>> PostPhoneBookType(PhoneBookType phoneBookType)
        {
          if (_context.PhoneBookType == null)
          {
              return Problem("Entity set 'PhoneBookAssignmentContext.PhoneBookType'  is null.");
          }
            _context.PhoneBookType.Add(phoneBookType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPhoneBookType", new { id = phoneBookType.Id }, phoneBookType);
        }

    }
}

using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

//definisan je ovde primarni konstruktor i nasledili smo dbContext
// pozivamo konstruktor bazne klasem i prosledjujemo mu options
public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<AppUser> Users { get; set; }
}

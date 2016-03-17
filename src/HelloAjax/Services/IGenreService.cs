using System.Collections.Generic;
using HelloAjax.Models;

namespace HelloAjax.Services
{
    public interface IGenreService
    {
        Genre FindGenre(int id);
        IList<Genre> ListGenres();
    }
}

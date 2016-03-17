using System.Collections.Generic;
using HelloAjax.Models;

namespace HelloAjax.Services
{
    public interface IGuestbookService
    {
        IList<GuestbookEntry> ListEntries();
        void SaveEntry(GuestbookEntry entry);
    }
}

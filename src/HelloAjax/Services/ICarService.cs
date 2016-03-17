using System.Collections.Generic;
using HelloAjax.Models;

namespace HelloAjax.Services
{
    public interface ICarService
    {
        Car FindCar(int id);
        IEnumerable<Car> ListCars();
        IEnumerable<CarMake> ListMakes();
    }
}

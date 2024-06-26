import carsData from "../../data/cars.json" assert { type: "json" };

const transmisi = document.querySelector("#transmisi");
const tanggal = document.querySelector("#tanggal");
const capacity = document.querySelector("#capacity");

const carsContainer = document.getElementById("cars-container");

const btnCariMobil = document.querySelector("#btn-cari-mobil");

const toggleCariMobilButton = () => {
  const selectedTanggal = tanggal.value;
  const selectedTransmisi = transmisi.value;
  btnCariMobil.disabled = !(selectedTransmisi && selectedTanggal);
};

const dateHandler = (tanggal) => {
  const userDate = new Date(tanggal);
  const currentDate = new Date("2022-03-23");
  return userDate.getTime() >= currentDate;
};

const searchCars = (transmisi, tanggal, capacity) => {
  if (transmisi === "All") {
    if (capacity == "0") {
      return [...carsData].filter(
        (car) => car.available == dateHandler(tanggal)
      );
    } else {
      return [...carsData].filter(
        (car) =>
          car.capacity == capacity && car.available == dateHandler(tanggal)
      );
    }
  } else {
    return [...carsData].filter(
      (car) =>
        car.capacity == capacity &&
        car.available == dateHandler(tanggal) &&
        car.transmission == transmisi
    );
  }
};

const displaySearchedCars = () => {
  const selectedTransmisi = transmisi.value;
  const selectedTanggal = tanggal.value;
  const selectedCapacity = capacity.value;
  const cars = searchCars(selectedTransmisi, selectedTanggal, selectedCapacity);
  if (cars.length === 0) {
    carsContainer.innerHTML =
      "<p>Tidak ada mobil yang sesuai dengan kriteria.</p>";
  } else {
    let carsHTML = "";
    cars.forEach((car) => {
      carsHTML += `
        <div class="col-12 col-md-4 gy-3">
          <div class="card">
            <img
              src=${car.image}
              style="width: 100%; height: 200px; object-fit: cover"
              class="card-img-top"
              alt="Mobil"
            />
            <div class="card-body">
              <h6>${car.manufacture} ${car.model} / ${car.type}</h6>
              <h5 class="card-title">Rp ${car.rentPerDay} / hari</h5>
              <p class="card-text">
                ${car.description}
              </p>
              <p><img src="./icons/fi-users.svg" alt="" />${car.capacity}</p>
              <p><img src="./icons/fi-settings.svg" alt="" />${car.transmission}</p>
              <p><img src="./icons/fi-calendar.svg" alt="" />${car.year}</p>
              <button
                id="btn-sewa-mobil"
                class="btn btn-success px-3 py-2 w-100"
                style="
                  background-color: #5cb85f;
                  border: none;
                  font-weight: 600;
                "
                type="submit"
              >
                Pilih Mobil
              </button>
            </div>
          </div>
        </div>`;
    });
    carsContainer.innerHTML = carsHTML;
  }
};

btnCariMobil.addEventListener("click", (event) => {
  event.preventDefault();
  displaySearchedCars();
});

transmisi.addEventListener("input", toggleCariMobilButton);
tanggal.addEventListener("input", toggleCariMobilButton);

document.addEventListener("DOMContentLoaded", () => {
  const api =
    "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

  const deta = document.querySelector("#searchKeyword");
  const search = document.querySelector(".btn-success");

  const form = document.querySelector("#searchForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const query = deta.value.trim();
    const list = document.querySelector(".siteList");

    list.innerHTML = "";

    if (query != "") {
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((sites) => {
          sites
            .filter((site) => {
              return site.ar.includes(query);
            })
            .forEach((site) => {
              const sna = site.sna.substr(11); // site.sna.replace("YouBike2.0_")
              const rent = site.available_rent_bikes;
              const ar = site.ar;
              const item = `<li class="list-group-item fs-5">
                <i class="fas fa-bicycle"></i>
                ${sna} (${rent})
                <br />
                <small class="text-muted">
                  ${ar}
                </small>
              </li>`;
              list.insertAdjacentHTML("beforeend", item);
            });
        });
    }
  });
});

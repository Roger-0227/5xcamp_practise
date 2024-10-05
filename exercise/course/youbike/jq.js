$().ready(() => {
  const url =
    "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

  const deta = $("#searchKeyword");

  const form = $("#searchForm");

  form.submit((e) => {
    e.preventDefault();

    const query = deta.val();
    const list = $(".siteList");

    list.html("");

    if (query != "") {
      $.ajax({ url }).done((sites) => {
        sites
          .filter((site) => {
            return site.ar.includes(query);
          })
          .forEach((site) => {
            const sna = site.sna.substr(11);
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
            list.append(item);
          });
      });
    }
  });
});

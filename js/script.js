const table = document.querySelector(".table-container");

const API_URL = "https://sb-analytics-api1.herokuapp.com" + "/api/members";

const makeHtml = (data) => {
  data.map((item) => {
    const activity =
      item.renewal_category !== "Arrears" ? "active" : "inactive";

    table.innerHTML += `<tr>
    <td>${item.member_id}</td>
    <td>${item.first_name}</td>
    <td>${item.middle_name || "-"}</td>
    <td>${item.last_name}</td>
    <td>
        <div class="status-${activity}">${item.renewal_category}</div>
    </td>
    </tr>`;
  });
};

const members = fetch(API_URL)
  .then((resp) => resp.json())
  .then((data) => makeHtml(data));

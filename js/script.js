document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.nscreativestudio.com/api/portfolio")
    .then((response) => response.json())
    .then((data) => {
      // Remove loading placeholder
      const loadingPlaceholder = document.getElementById("loading-placeholder");
      if (loadingPlaceholder) loadingPlaceholder.remove();

      const gallery = document.getElementById("gallery");
      data.forEach((item) => {
        const imageUrl =
          "https://api.nscreativestudio.com/assets/images/porto/" + item.gambar;
        const card = `
                    <div class="card">
                        <img class="h-auto max-w-full rounded-lg" src="${imageUrl}" alt="${item.judul}">
                        <div class="mt-2">
                            <h3 class="text-xl font-bold">${item.judul}</h3>
                            <p class="text-sm text-gray-600">${item.deskripsi}</p>
                        </div>
                    </div>
                `;
        gallery.insertAdjacentHTML("beforeend", card);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

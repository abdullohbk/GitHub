let baseUrl = "https://api.github.com/users/abdullohbk";
let mainImg = $(".mainImg");
mainName = $(".mainName");
loginName = $(".login");
followers = $(".followers");
followings = $(".following");
mainId = $(".id");
cardWrapper = $(".card__wrapper");
reposCount = $("#repos");

async function getData() {
  let response = await fetch(baseUrl);
  let result = await response.json();

  let responseRepo = await fetch(result.repos_url);
  let resultRepo = await responseRepo.json();
  //   console.log(resultRepo);

  resultRepo.slice(0, 4).forEach((el) => {
    let card = document.createElement("div");
    card.classList.add(
      "card",
      "w-[440px]",
      "p-[16px]",
      "border",
      "rounded-lg",
      "border-gray-700"
    );
    card.innerHTML = `
                  <div class="flex items-center gap-[8px]">
                    <img src="./assets/images/book.svg" alt="smthimg" />
                    <p class="text-blue-500 font-semibold">${el.name}</p>
                    <button
                      class="border-2 rounded-xl border-gray-700 text-gray-500 px-2"
                    >
                      ${el.visibility}
                    </button>
                  </div>
                  <p class="text-[12px] text-gray-400 mt-[6px]">
                    ${el.homepage ? el.homepage : "Empty"}
                  </p>
                  <div class="flex items-center gap-[30px]">
                    <div class="flex items-center gap-[5px]">
                      <img src="./assets/images/Ellipse 1.svg" alt="smthimg" />
                      <p class="text-gray-400">${el.language}</p>
                    </div>
                    <div class="flex items-center gap-[5px]">
                      <img src="./assets/images/star.svg" alt="smthimg" />
                      <p class="text-gray-400">1</p>
                    </div>
                  </div>
    `;

    cardWrapper.appendChild(card);
  });

  mainImg.src = result.avatar_url;
  mainName.textContent = result.name;
  loginName.textContent = result.login;
  followers.textContent = result.followers;
  followings.textContent = result.following;
  mainId.textContent = result.url;
    reposCount.textContent =result.public_repos
  console.log(result);
}

getData();

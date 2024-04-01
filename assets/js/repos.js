let baseUrl = "https://api.github.com/users/abdullohbk";
let overWiev = $(".overwiew");
let profileImg = $(".profileImg");
let mainImg = $(".mainImg");
mainName = $(".mainName");
loginName = $(".login");
followers = $(".followers");
followings = $(".following");
mainId = $(".id");
cardWrapper = $(".card__wrapper");
reposCount = $("#repos");
profileImg = $(".profileImg");
repositories = $(".repos");

overWiev.addEventListener("click", () => {
  window.location.href = "../../index.html";
});

async function getData() {
  let response = await fetch(baseUrl);
  let result = await response.json();
  console.log(result);

  let responseRepo = await fetch(result.repos_url);
  let resultRepo = await responseRepo.json();
  console.log(resultRepo);

  resultRepo.forEach((el) => {
    let card = document.createElement("div");
    card.classList.add(
      "card",
      "border-t-2",
      "border-gray-700",
      "flex",
      "items-center",
      "justify-between",
      "mb-[35px]"
    );

    card.innerHTML = `
    
      <div class="card__left mt-[20px]">
                  <div class="flex items-center gap-[10px] mb-[10px]">
                    <h3 class="text-blue-500 text-[22px]">${el.name}</h3>
                    <button
                      class="border border-gray-700 px-2 rounded-xl text-gray-500 text-[13px]"
                    >
                      ${el.visibility}
                    </button>
                  </div>
                  <p class="text-gray-500 text-[12px]">Updated ${el.pushed_at}</p>
                </div>
                <div
                  class="card__right mt-[20px] flex items-center bg-[#161B22] rounded-lg py-[5px]"
                >
                  <button
                    class="flex items-center gap-[10px] text-gray-500 px-2"
                  >
                    <img src="../images/star.svg" alt="" />Star
                  </button>
                  <select class="bg-[#161B22] rounded-lg">
                    <option class="rounded-lg" value=""></option>
                  </select>
                </div>
    `;

    cardWrapper.appendChild(card);
  });

  mainImg.src = result.avatar_url;
  mainName.textContent = result.name;
  loginName.textContent = result.login;
  followers.textContent = result.followers;
  followings.textContent = result.following;
  //  mainId.textContent = result.url;
  reposCount.textContent = result.public_repos;
  profileImg.src = result.avatar_url;
}

getData();

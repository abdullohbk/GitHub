let baseUrl = "https://api.github.com/users/abdullohbk";
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
cardWrapper = $(".card__wrapper");

async function getData() {
  let response = await fetch(baseUrl);
  let result = await response.json();
  // console.log(result);

  mainImg.src = result.avatar_url;
  mainName.textContent = result.name;
  loginName.textContent = result.login;
  followers.textContent = result.followers;
  followings.textContent = result.following;
  mainId.textContent = result.url;
  reposCount.textContent = result.public_repos;
  profileImg.src = result.avatar_url;
  // console.log(result);
}

getData();

repositories.addEventListener("click", () => {
  window.location.href = "../pages/repos.html";
});

async function getFollowers() {
  try {
    let response = await fetch(
      "https://api.github.com/users/abdullohbk/followers"
    );
    let result = await response.json();
    console.log(result);
    renderFollowers(result);
  } catch (err) {
    console.log(err);
  }
}

getFollowers();

function renderFollowers(data) {
  data.forEach((el) => {
    let card = document.createElement("div");
    card.classList.add(
      "card",
      "w-full",
      "mt-[25px]",
      "pb-[30px]",
      "border-b-2",
      "border-gray-700",
      "flex",
      "items-center",
      "justify-between"
    );

    card.innerHTML = `
      <div class="flex items-start gap-6">
                  <img
                    class="rounded-full w-[50px]"
                    src=${el.avatar_url}
                    alt="smthimg"
                  />
                  <div class="flex items-center gap-[15px]">
                    <h4 class="text-gray-400">Name</h4>
                    <p class="text-gray-400">${el.login}</p>
                  </div>
                </div>
                <button class="px-[6px] py-[2px] bg-gray-400 rounded-md">
                  following
                </button>
    `;
    cardWrapper.appendChild(card);
  });
}

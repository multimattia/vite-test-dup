import { BuildingInfo } from "./types";
const button = document.querySelector<HTMLElement>(".fetch");

const select = document.getElementById("borough-select") as HTMLSelectElement;

button?.addEventListener("click", () => getCall(select.value));

const getCall = async (borough: String) => {
  const loadingElement = document.querySelector(".loading") as HTMLElement;

  if (loadingElement) {
    loadingElement.classList.toggle("hidden");
  }

  if (!borough) {
    borough = "";
  }

  try {
    const listContainer = document.querySelector(".pop-list");
    listContainer?.remove();
  } catch {}

  try {
    const resjson = await fetch(
      "https://data.cityofnewyork.us/resource/rvih-nhyn.json?" +
        new URLSearchParams({
          borough_name: borough.toString(),
        }),
      {
        method: "GET",
        headers: {
          "X-App-Token": import.meta.env.VITE_APP_TOKEN,
        },
      }
    ).then((res) => res.json());
    const ul = document.createElement("ul");
    resjson.slice(0, 150).forEach((e: BuildingInfo) => {
      const bullet = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = `https://maps.google.com?q=${e.latitude},${e.longitude}`;
      anchor.target = "_blank";
      bullet.parentNode?.insertBefore(anchor, bullet);
      anchor.appendChild(bullet);
      const stylingClasses = [
        "my-1",
        "py-3",
        "bg-slate-200",
        "hover:bg-slate-300",
        "transition-all",
        "px-2",
      ];
      bullet.classList.add(...stylingClasses);
      const address = e.building_address_with_zip;
      bullet.textContent = `(${e.latitude}, ${e.longitude}) ${e.pops_number}: ${address.slice(0, -20)}`;
      ul.appendChild(anchor);
    });
    ul.classList.add("pop-list");
    document.querySelector(".container")?.append(ul);
  } catch (error) {
    console.error("error fetching data:", error);
  } finally {
    if (loadingElement) {
      loadingElement.classList.toggle("hidden");
    }
  }
};

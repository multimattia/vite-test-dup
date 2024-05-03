const tabify = (element: HTMLElement) => {
  const header = element.querySelector(".tab-header") as HTMLElement;
  const content = element.querySelector(".tabs") as HTMLElement;
  const tabHeaders = [...header!.children] as HTMLElement[];
  const tabContents = [...content!.children] as HTMLElement[];
  let currentTabIndex = -1;
  // Hide tabs
  tabContents.forEach((x) => ((x as HTMLElement).style.display = "none"));

  const setTab = (index: number) => {
    if (currentTabIndex > -1) {
      tabHeaders[currentTabIndex].style.fontWeight = "400";
      tabContents[currentTabIndex].style.display = "none";
    }
    tabHeaders[index].style.fontWeight = "800";
    tabContents[index].style.display = "flex";
    currentTabIndex = index;
  };

  let defaultTabIndex = tabHeaders.findIndex((x) => {
    return [...x.classList].indexOf("default-tab") > -1;
  });

  defaultTabIndex = defaultTabIndex === -1 ? 0 : defaultTabIndex;
  setTab(defaultTabIndex);
  tabHeaders.forEach((x, i) => (x.onclick = (e) => setTab(i)));
};

[...document.querySelectorAll(".tabs-container")].forEach((x) =>
  tabify(x as HTMLElement)
);

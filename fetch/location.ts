const button = document.querySelector<HTMLElement>(".geolocate")

const startNavigation = () => {
    const latInput = document.querySelector(".lat-input") as HTMLInputElement;
    const longInput = document.querySelector(".long-input") as HTMLInputElement;
    latInput.placeholder = "loading..."
    longInput.placeholder = "loading..."
    console.log("starting navigation...")
    navigator.geolocation.getCurrentPosition((pos) => {
        latInput.value = pos.coords.latitude.toString()
        longInput.value = pos.coords.longitude.toString()
        console.log(pos)
    },(err) => {
        latInput.placeholder = "Error!"
        longInput.placeholder = "Error!"
        console.error(err)
    })
}

button?.addEventListener("click", () => startNavigation())


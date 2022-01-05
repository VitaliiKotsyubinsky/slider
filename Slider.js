
export default class Slider {
    constructor(selector) {
        const sliderEl = document.querySelector(selector)
        if (!sliderEl) return
        const slides = [...sliderEl.children]
        const prevBtn = document.createElement("button")
        const slot = document.createElement("div")
        const track = document.createElement("div")
        const nextBtn = document.createElement("button")
        sliderEl.classList.add("slider")
        slot.classList.add("slider-slot")
        track.classList.add("slider-track")
        slides.forEach(slide => slide.classList.add("slide"))
        track.append(...slides)
        slot.append(track)
        sliderEl.append(prevBtn, slot, nextBtn)
        prevBtn.innerText = "prev"
        nextBtn.innerText = "next"
        this.currentSlideIndex = 0
        this.el = sliderEl
        nextBtn.onclick = () => this.showNext()
        prevBtn.onclick = () => this.showPrev()


    }

    showPrev() {
        this.currentSlideIndex--
        const slides = this.el.querySelectorAll(".slide")
        if (this.currentSlideIndex < 0) this.currentSlideIndex = slides.length - 1
        const next = slides[this.currentSlideIndex]
        next.scrollIntoView({ behavior: "smooth" })
    }

    showNext() {
        this.currentSlideIndex++
        const slides = this.el.querySelectorAll(".slide")
        if (this.currentSlideIndex == slides.length) this.currentSlideIndex = 0
        const next = slides[this.currentSlideIndex]
        next.scrollIntoView({ behavior: "smooth" })
    }

} 
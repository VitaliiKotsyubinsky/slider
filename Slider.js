
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
        const slides = this.el.querySelectorAll(".slide")
        if (this.currentSlideIndex == 0) {
            slides[0].parentElement.prepend(slides[slides.length - 1])
            slides[1].scrollIntoView()
        } else {
            this.currentSlideIndex--
        }
        const prev = slides[this.currentSlideIndex]
        prev.scrollIntoView({ behavior: "smooth" })
    }

    showNext() {
        const slides = this.el.querySelectorAll(".slide")
        if (this.currentSlideIndex < slides.length - 1) {
            this.currentSlideIndex++
        } else {
            slides[0].parentElement.append(slides[0])
            slides[slides.length - 2].scrollIntoView()
        }
        const next = slides[this.currentSlideIndex]
        next.scrollIntoView({ behavior: "smooth" })
    }

} 
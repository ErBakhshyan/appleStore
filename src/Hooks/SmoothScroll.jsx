export const SmoothScroll = (Ref) => {
    Ref.current.addEventListener('click',function(e){
        e.preventDefault()
        const itemLink = Ref.current.getAttribute('href')
        const itemLinkTop = document.querySelector(itemLink).getBoundingClientRect().top
        const totalOffset = itemLinkTop + window.pageYOffset - 65
        window.scrollTo({behavior: 'smooth',top: totalOffset})
    })
}

export const SmoothScrollWithA = () => {
    document.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault()
            const itemLink = this.getAttribute('href')
            const itemLinkTop = document
                .querySelector(itemLink)
                .getBoundingClientRect().top
            const totalOffset = itemLinkTop + window.pageYOffset - 65
            window.scrollTo({ behavior: 'smooth', top: totalOffset })
        })
    })
}
function urlSlug(title) {
    let newTitle = title.trim().split(/\s+/).join("-").toLowerCase()
    return newTitle
}

console.log(urlSlug(' Winter Is  Coming'))
class RestaurantCLass {
    id: number
    name: string
    score: string
    description: string
    image: string
    tags: string[]

    constructor(
        id: number,
        name: string,
        score: string,
        description: string,
        image: string,
        tags: string[]
    ) {
        this.id = id
        this.name = name
        this.score = score
        this.description = description
        this.image = image
        this.tags = tags
    }
}

export default RestaurantCLass
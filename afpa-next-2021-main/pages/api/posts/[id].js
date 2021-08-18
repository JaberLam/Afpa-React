import { posts } from "../../../posts";

export default function handler ({ query : { id }},res) {

    const filter = posts.filter(post => post.id === id)

    if (filter.length > 0){
        res.status(200).json(filter[0])
    }else{
        res.status(404).json({message:`Post with id ${id} could not be found`})
    }
}
import { client } from "./sanity.client";
import  imageUrlBuilder  from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any){
    // console.log(source);
    return builder.image(source);
}

export default urlFor;
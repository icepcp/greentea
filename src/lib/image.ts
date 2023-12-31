/* lib/sanity/image.ts */
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./astro";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

type ImageUrlBuilder = ReturnType<typeof imageUrlBuilder>;
type ImageSource = Parameters<ImageUrlBuilder["image"]>[0];

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
    return builder.image(source)
}

export const imageUrlFor = (source: ImageSource) =>
    urlFor(source).format("webp").url();
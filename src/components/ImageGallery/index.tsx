import ImageRenderer from "../ImageRenderer";

import {ImageGalleryProps} from "./types";

function ImageGallery({imageContents}: ImageGalleryProps) {
    return (
        <div
            className={`bg-[white] flex justify-center items-center flex-col gap-[101px] min-w-[100%] box-border pt-[86px] pb-10`}>
            {imageContents.map((data, index) => {
                return <ImageRenderer {...data} key={index}/>;
            })}
        </div>
    );
}

export default ImageGallery;

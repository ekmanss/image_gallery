import {ImageContent} from "../ImageGallery/types";

function ImageRenderer({imgContent}: ImageContent) {
    return <img
        className={`w-[178px] h-[172px] max-w-[initial] grow-0 shrink-0 basis-auto box-border object-contain block border-[none]`}
        src={imgContent}
    />;
}

export default ImageRenderer;

export type Image = {
    src: string;
    alt: string;
};

export type Thumbnail = Image;

export type ImageThumbnailsProps = {
    thumbnails: Thumbnail[];
    onThumbnailClick: (thumbnail: ImageThumbnail) => void;

};

export type MainImageProps = Image;

export type ImageThumbnail = {
    src: string;
    alt: string;
};

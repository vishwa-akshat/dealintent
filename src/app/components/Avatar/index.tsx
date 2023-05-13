import { Avatar as AntAvatar } from "antd";

type Image = {
    src?: string;
    height?: number;
    width?: number;
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
};

type Props = {
    image: Image;
};

export default function Avatar({ image }: Props) {
    return <AntAvatar size={45} src={image.src} />;
}

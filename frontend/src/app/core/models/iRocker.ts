import { Image } from './image';

export interface IRocker {
    external_urls: string;
    followers: number;
    genres: string[];
    href: string;
    id: string;
    image: Image [];
}

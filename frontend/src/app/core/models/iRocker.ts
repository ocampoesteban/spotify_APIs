import { Image } from './image';

export interface IRocker {
    external_urls: string;
    followers: any;
    genres: string[];
    href: string;
    id: string;
    images: Image [];
    name: string;
    popularity: number;
}

import { Image } from '../models/image';
import { IRocker } from './iRocker';
export interface Album {
    name: string;
    image: Image[];
    release_date: Date;
    id: string;
    artist: IRocker[];
}

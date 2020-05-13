import {PopularMedia} from "../popular-media/Media.model";
import {MediaCategories} from "../media-content/mediaCategories.model";
export class Mediacontent{
    constructor (public popularMediaContent : PopularMedia[]=[], public mediaContentByCategory : MediaCategories[] = []){}
}
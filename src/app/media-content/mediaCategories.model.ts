import {MediacontentList} from "../media-content/mediaContentList.model";
export class MediaCategories{
    constructor(public id:number,public mediaContentTitle:string, public mediaContentList:MediacontentList[]=[]){}
}
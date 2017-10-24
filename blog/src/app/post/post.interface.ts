export interface IPost {
  headline:string;
  kicker: string;
  url:string;
  inserted:Date;
  modified: Date;
  pic_src:string;
  pic_width: number;
  pic_height: number;
  pic_caption?: string;
  tags: string[];
}

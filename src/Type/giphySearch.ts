export type GiphyResultProps = {
    catData: Array<GiphyData>
    dogData: Array<GiphyData>
  };
  
  export type GiphyData = {
    images: Images;
  }
  
  export type Images = {
    downsized_medium: Url;
  }
  
  export type Url = {
    url:string;
  }

  export type GiphyCardProps = {
    imageUrl: string;
    key: number;
  };
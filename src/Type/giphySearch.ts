export type GiphyResultProps = {
    catData: Array<GiphyData>
    dogData: Array<GiphyData>
  };
  
  export type GiphyData = {
    images: Images;
    title:string;
    rating:string;
  }
  
  export type Images = {
    downsized_medium: Url;
  }
  
  export type Url = {
    url:string;
  }

  export type GiphyCardProps = {
    imageUrl: string;
    title: string;
    rating: string;
    key: number;
  };
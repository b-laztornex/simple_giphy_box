export interface Gif {
  id?: string;
  type?: string;
  url?: string;
  rating?: string;
  title?: string;
  images?: {
    original?: {
      mp4?: string;
      webp?: string;
      width?: string;
      height?: string;
    };
    fixed_height_small?: {
      url?: string;
      webp?: string;
      mp4?: string;
      width?: string;
      height?: string;
    };
  };
}

export interface Gifs {
  data?: Gif[];
  pagination?: {
    offset?: number;
    total_count?: number;
    count?: number;
  };
}

export interface Gif {
  data: GifData[];
  meta: {
    msg: string;
    response_id: string;
    status: number;
  };
  pagination: {
    count: number;
    offset: number;
    total_count: number;
  };
}

export interface GifData {
  images: {
    original: {
      url: string;
    };
  };
  username: string;
}

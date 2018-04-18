export interface MovieCategory {
    genre: string;
    category: string;
    active: boolean;
}
export interface MovieList {
  id: number;
  title_ko: string;
  poster_image: string;
  rating_avg: string;
  genre: [
    {
      id: number;
      genre: string;
    }
  ];
  tag: number[];
}

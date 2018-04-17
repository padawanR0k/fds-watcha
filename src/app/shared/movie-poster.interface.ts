export interface MoviePoster {
    id: number;
    title_ko: string;
    title_en: string;
    rating_avg: number;
    nation: string;
    poster_image: string;
    genre: [
        {
            id: number;
            genre: string;
        },
        {
            id: number;
            genre: string;
        },
        {
            id: number;
            genre: string;
        },
        {
            id: number;
            genre: string;
        },
        {
            id: number;
            genre: string;
        }
    ];
    running_time: number;
    }


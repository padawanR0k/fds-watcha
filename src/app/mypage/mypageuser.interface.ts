// export interface Mypageuser {
//     pk: string;
//     email: string;
//     nickname: string;
//     img_profile: string;
//     total_running_time: number;
//     interesting_movie_cnt: number;
//     still_cut_img: {
//         // 유저가 평가한 영화는 평점이 가장 높은 이미지 반환
//         id: number;
//         movie: number;
//         still_img: string;
//     };
// }
export interface Mypageuser {
    name: string;
    pic: string;
    watchedMovieHour: number;
    watchedMoviCount: number;
    like: number;
}

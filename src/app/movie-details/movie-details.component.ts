import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Movie } from '../movie-list/movie-list.component';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  movie$: Observable<Movie> | undefined;
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      const movieId = route.get('id');
      this.movie$ = this.moviesService
        .getMovieById(movieId as string)
        .pipe(
          map((movie) => ({
            ...movie,
            trailer: this.sanitizer.bypassSecurityTrustResourceUrl(
              movie.trailer
            ) as string,
          }))
        );
    });
  }
}

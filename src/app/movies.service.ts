import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, concatMap, switchMap } from 'rxjs';
import { Movie } from './movie-list/movie-list.component';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  userData = '';
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http
      .get('https://648a951417f1536d65e94e85.mockapi.io/receipes')
      .pipe(catchError((err) => []));
  }

  getMovieById(id: string) {
    return this.http
      .get<Movie>(`https://648a951417f1536d65e94e85.mockapi.io/receipes/${id}`)
      .pipe(catchError((err) => []));
  }

  addMovie(data: Movie) {
    return this.http
      .post('https://648a951417f1536d65e94e85.mockapi.io/receipes', data)
      .pipe(catchError((err) => []));
  }

  updateMovie(movie: Movie) {
    return this.http
      .put(
        `https://648a951417f1536d65e94e85.mockapi.io/receipes/${movie.id}`,
        movie
      )
      .pipe(catchError((err) => []));
  }

  // Step 4
  // Parent method
  deleteMovie(id: string) {
    console.log('Deleting... movie', id);
    return this.http
      .delete(`https://648a951417f1536d65e94e85.mockapi.io/receipes/${id}`)
      .pipe(catchError((err) => []));
  }

  // Delete -> GET
  deleteGetMovie(id: string) {
    return this.deleteMovie(id).pipe(concatMap(() => this.getMovies()));
  }
}

import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie-list/movie-list.component';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent {
  addMovieForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    ingredients: ['', Validators.required],
    poster: ['', [Validators.required, Validators.pattern('^(http|https).*')]],
    rating: [
      null,
      [Validators.required, Validators.min(0), Validators.max(10)],
    ],
    summary: ['', [Validators.required, Validators.minLength(20)]],
    trailer: ['', [Validators.required, Validators.pattern('^(http|https).*')]],
  });

  constructor(
    private fb: FormBuilder,
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      const movieId = route.get('id');

      this.moviesService.getMovieById(movieId as string).subscribe((data) => {
        console.log(data);
        this.addMovieForm.patchValue(data as any);
      });
    });
  }

  onSubmit() {
    console.log(this.addMovieForm.status);

    if (this.addMovieForm.valid) {
      const updatedMovie = this.addMovieForm.value;
      console.log(updatedMovie);
      this.moviesService.updateMovie(updatedMovie as any).subscribe(() => {
        this.router.navigate(['/receipes']);
      });
    }
  }

  get name() {
    return this.addMovieForm.get('name');
  }

  get ingredients()
  {
    return this.addMovieForm.get('ingredients');
  }
  get poster() {
    return this.addMovieForm.get('poster');
  }

  get rating() {
    return this.addMovieForm.get('rating');
  }

  get summary() {
    return this.addMovieForm.get('summary');
  }

  get trailer() {
    return this.addMovieForm.get('trailer');
  }
}

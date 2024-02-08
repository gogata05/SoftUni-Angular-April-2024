import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  o$ = new Observable();

  newThemeSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { themeName, postText } = form.value;
    this.apiService.createTheme(themeName, postText).subscribe();
  }
}

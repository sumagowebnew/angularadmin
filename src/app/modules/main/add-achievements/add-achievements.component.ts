import { Component } from '@angular/core';

@Component({
  selector: 'app-add-achievements',
  templateUrl: './add-achievements.component.html',
  styleUrls: ['./add-achievements.component.scss']
})
export class AddAchievementsComponent {

}

const form = document.querySelector('#achievements-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // const title = document.querySelector('#title').value;
    // const file = document.querySelector('#file').files[0];

    const title = (document.querySelector('#title') as HTMLInputElement).value;
    // const file = (document.querySelector('#file') as HTMLInputElement).files[0];
    const file = (document.querySelector('#file') as HTMLInputElement).value;

    console.log('Title:', title);
    console.log('Achievements file:', file);
  });
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'nx-conduit-root',
  template: `
    Hello NX
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'conduit';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  i = 0;
  color = 'red';
  colorLine = [];
  itens = ['A', 'B', 'C', 'D'];
  teste(valor) {
      this.color = valor;
  }
  teste2(e)  {
      e.preventDefault();
  }
  pintarLinha(model) {
      console.log(this.i++, 'pintarLinha');
      // tslint:disable-next-line:prefer-const
      let colorLine2;
      // tslint:disable-next-line:curly
      if (model === 'A') {
        this.colorLine.push('red');
      }
      // tslint:disable-next-line:one-line
      else if (model === 'B') {
        this.colorLine.push('gray');
      }
      // tslint:disable-next-line:one-line
      else {
        this.colorLine.push('yellow');
      }
  }
  pintarLinha2(model) {
      console.log(this.i++, 'pintarLinha2');
      // tslint:disable-next-line:prefer-const
      if (model === 'A') {
        return 'red';
      }
      // tslint:disable-next-line:one-line
      else if (model === 'B') {
        return  'gray';
      }
      // tslint:disable-next-line:one-line
      else {
        return  'yellow';
      }
  }
}


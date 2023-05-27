import { Component, ElementRef, HostBinding, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Authentication';

  @ViewChild('hello') eleref!:ElementRef;
  
  @HostBinding('style.backgroundcolor') value='red';
  @HostListener('mouseenter')
  onclick(){
    console.log('clicked');
    this.eleref.nativeElement.style.backgroundcolor='red';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.eleref.nativeElement.style.backgroundcolor='green';
  }
  constructor(){
  localStorage.setItem("name","nicolas");
  }
}

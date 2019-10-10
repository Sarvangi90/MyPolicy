import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pageTitle = 'Policy Portfolio';
  classApplied = false;

  // toggleClass():void {
  //   this.classApplied = !this.classApplied;
  // }
  ngOnInit() {
  
"use strict";
function htmlbodyHeightUpdate() {
    var height3 = $(window).height();
    var height1 = $('.nav').height() + 50;
    var height2 = $('.main').height();
    if (height2 > height3) {
        $('html').height(Math.max(height1, height3, height2) + 10);
        $('body').height(Math.max(height1, height3, height2) + 10);
    }
    else {
        $('html').height(Math.max(height1, height3, height2));
        $('body').height(Math.max(height1, height3, height2));
    }
}
$(document).ready(function () {
    htmlbodyHeightUpdate();
    $(window).resize(function () {
        htmlbodyHeightUpdate();
    });
    $(window).scroll(function () {
        //height2 = $('.main').height();
        htmlbodyHeightUpdate();
    });
});}}
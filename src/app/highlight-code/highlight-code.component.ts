import { Component, OnInit } from '@angular/core';
import { AUTO_DETECT_LANGUAGE, EMPTY_STRING, LANGUAGE_SUPPORTED } from '../shared/constants/common';
import hljs from 'highlight.js';
import { TEXTAREA_HIGHLIGHTER } from '../shared/constants/placeholder';

@Component({
  selector: 'app-highlight-code',
  templateUrl: './highlight-code.component.html',
  styleUrls: ['./highlight-code.component.scss']
})
export class HighlightCodeComponent implements OnInit {
  content = EMPTY_STRING;
  codeHighlighted = EMPTY_STRING;
  placeholder = TEXTAREA_HIGHLIGHTER;
  languages = LANGUAGE_SUPPORTED;
  languageSelected = AUTO_DETECT_LANGUAGE;

  constructor() { }

  ngOnInit(): void {
  }

  clear() {
    this.content = EMPTY_STRING;
  }

  highlight() {
    if (this.languageSelected === 'auto') {
      this.codeHighlighted = hljs.highlightAuto(this.content).value;
    } else {
      this.codeHighlighted = hljs.highlight(this.content, { language: this.languageSelected }).value;
    }
  }

}

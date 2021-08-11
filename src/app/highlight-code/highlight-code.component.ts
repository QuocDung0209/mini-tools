import { Component, OnInit } from '@angular/core';
import { AUTO_DETECT_LANGUAGE, DEFAULT_LANGUAGE, EMPTY_STRING, LANGUAGE_SUPPORTED } from '../shared/constants/common';
import hljs from 'highlight.js';
import { TEXTAREA_HIGHLIGHTER } from '../shared/constants/placeholder';
import { COPIED, COPY_TO_CLIPBOARD } from '../shared/constants/tooltip';

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
  copyBloggerTooltip = COPY_TO_CLIPBOARD;
  copyCodeTooltip = COPY_TO_CLIPBOARD;
  languageChecked = AUTO_DETECT_LANGUAGE;

  constructor() { }

  ngOnInit(): void {
  }

  clear() {
    this.content = EMPTY_STRING;
  }

  languageChange(selected: string) {
    this.languageChecked = selected;
    this.languageSelected = selected === AUTO_DETECT_LANGUAGE ? AUTO_DETECT_LANGUAGE : DEFAULT_LANGUAGE;
  }

  highlight() {
    this.copyBloggerTooltip = COPY_TO_CLIPBOARD;
    this.copyCodeTooltip = COPY_TO_CLIPBOARD;
    if (this.languageSelected === 'auto') {
      this.codeHighlighted = hljs.highlightAuto(this.content).value;
    } else {
      this.codeHighlighted = hljs.highlight(this.content, { language: this.languageSelected }).value;
    }
  }

  // Copy element with current format and style css
  copyToClipboard(el: any) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel && sel.removeAllRanges();
    sel && sel.addRange(range);
    document.execCommand('copy');
    this.copyBloggerTooltip = COPIED;
  }

  // Copy text from any element
  copyTextToClipboard(htmlEl: any) {
    const el = document.createElement('textarea');
    el.value = htmlEl.innerHTML;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.copyCodeTooltip = COPIED;
  }

}

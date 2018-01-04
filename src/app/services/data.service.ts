import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {}

  getQuestions(){
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    }else{
      this.questions = JSON.parse(localStorage.getItem('questions')); 
    }
    return this.questions;
  }

  addQuestion(question:Question){    
    this.questions.unshift(question);

    // Init local variable
    let questions;

    if(localStorage.getItem('questions') === null){
      questions = [];
      questions.unshift(question);
      // Set the array to te lS
      localStorage.setItem('questions', JSON.stringify(questions));
    }else{
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      // Set the array to te lS
      localStorage.setItem('questions', JSON.stringify(questions)); 
    }

  }

  removeQuestion(question:Question){
    let index = this.questions.indexOf(question);
    this.questions.splice(index, 1);
    // Set the array to te lS
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

}

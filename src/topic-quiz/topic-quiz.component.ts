import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { QuizService } from '../services';
import { MultipleChoiceSingle, MultipleChoiceMultiple, QuestionTopic } from '../models';

@Component({
  selector: 'topic-quiz',
  templateUrl: './topic-quiz.component.html',
  styleUrls: ['./topic-quiz.component.css']
})
export class TopicQuizComponent implements OnInit {
  public question: MultipleChoiceSingle;

  // TODO - connect to actual quizService
  constructor(public quizService: QuizService, public route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.getRouteInfo();
  }

  public getRouteInfo(): any {

    this.route.queryParams.subscribe((params: Params) => {
      if (params.topic) {
        if (params.question) {
          // TODO - call actual quizService
          // this.quizService.getQuestion().subscribe((data: any) => {

          // });

          this.question = new MultipleChoiceSingle(
            {
              questionTopic: QuestionTopic.JavaScript,
              questionText: `What is JavaScript's actual name?`,
              options: ['JavaScript', 'EcmaScript', 'JScript', 'VBScript', 'CoffeeScript'],
              answer: '',
              helpInfo: 'ECMAScript (or ES) is a trademarked scripting-language specification standardized by Ecma International in ECMA-262 and ISO/IEC 16262. It was created to standardize JavaScript, so as to foster multiple independent implementations. JavaScript has remained the best-known implementation of ECMAScript since the standard was first published, with other well-known implementations including JScript and ActionScript. Coders commonly use ECMAScript for client-side scripting on the World Wide Web, and it is increasingly being used for writing server applications and services using Node.js.',
            }
          );
          
        } else {
          // Redirect to question 1
        }
      } else {
        // Redirect
      }
    });


  }
}

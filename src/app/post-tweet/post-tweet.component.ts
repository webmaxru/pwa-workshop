import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css']
})
export class PostTweetComponent implements OnInit {

  private postUrl = 'http://localhost:3000/post-tweet/';
  tweet;
  errorMessage;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  messageFormSubmit(messageForm: any) {

    if (messageForm.valid) {

      this.postTweet(messageForm.value.message).subscribe(
        tweet => {
          this.tweet = tweet
          console.log('Tweet was posted!', this.tweet)
        },
        error => this.errorMessage = <any>error);

      messageForm.reset()

    }

  }

  postTweet(message: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.postUrl, { message }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

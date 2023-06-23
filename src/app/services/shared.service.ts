import { Injectable } from '@angular/core';
import { BASE_URL } from '../config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiUrl = `${BASE_URL}`;
  constructor(private http:HttpClient) { }

  //Question
  getQuestions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}questions/get-all-record`);
  }

  deleteQuestion(id: number): Observable<any> {
    const url = `${this.apiUrl}questions/delete/${id}`;
    return this.http.delete(url);
  }

  //Free Consultation 

  getConsultation(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}freeConsultaion/get-all-record`);
  }

  deleteConsultation(id: number): Observable<any> {
    const url = `${this.apiUrl}freeConsultaion/delete/${id}`;
    return this.http.delete(url);
  }

  //Get A Quote

  getQuote(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}getAquote/get-all-record`);
  }

  deleteQuote(id: number): Observable<any> {
    const url = `${this.apiUrl}getAquote/delete/${id}`;
    return this.http.delete(url);
  }

  //Portfoloio 

  addPortfolio(title: string, description: string, websiteLink: string, imageFile: string): Observable<any> {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('website_link', websiteLink);
    formData.append('image_file', imageFile);

    return this.http.post<any>(`${this.apiUrl}portfolio/add`, formData);
  }

  deletePortfolio(id: number): Observable<any> {
    const url = `${this.apiUrl}portfolio/delete/${id}`;
    return this.http.delete(url);
  }


  getPortfolios(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}portfolio/get-all-record`);
  }

  updatePortfolio(id: string, title: string, description: string, websiteLink: string, imageFile: string): Observable<any> {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('website_link', websiteLink);
    formData.append('image_file', imageFile);

    return this.http.post<any>(`${this.apiUrl}portfolio/update/${id}`, formData);
  }


  //appreciation

  addAppreciation(imageData: string): Observable<any> {
    const formData = new FormData();
    formData.append('image_file', imageData);
    return this.http.post(`${this.apiUrl}appreciation/add`, formData);
  }
  
  getAppreciation(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}appreciation/get-all-record`);
  }

  deleteAppreciation(id:number): Observable<any>{
    return this.http.delete(`${this.apiUrl}appreciation/delete/${id}`)
  }

  // Birthday

  addBirthday(imageData:string): Observable<any> {
    const formData = new FormData();
    formData.append('image_file', imageData);
    return this.http.post(`${this.apiUrl}birthday/add`, formData);
  }
  
  getBirthday(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}birthday/get-all-record`);
  }

  deleteBirthday(id:number): Observable<any>{
    return this.http.delete(`${this.apiUrl}birthday/delete/${id}`)
  }

  //Event 

  addEvent(imageData: string){
    const formData = new FormData();
    formData.append('image_file', imageData);
    return this.http.post(`${this.apiUrl}events/add`, formData);
  }

  getEvent(){
    return this.http.get<any>(`${this.apiUrl}events/get-all-record`);
  }

  deleteEvent(id:number){
    return this.http.delete(`${this.apiUrl}events/delete/${id}`)
  }

  //Awards

  addAwards(imageData: string){
    const formData = new FormData();
    formData.append('image_file', imageData);
    return this.http.post(`${this.apiUrl}award/add`, formData);
  }

  getAwards(){
    return this.http.get<any>(`${this.apiUrl}award/get-all-record`);
  }

  deleteAwards(id:number){
    return this.http.delete(`${this.apiUrl}award/delete/${id}`)
  }

  // News

  addNews(title: string, newsPaper: string, imageFile: string,modelFile:string): Observable<any> {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('news_paper', newsPaper);
    formData.append('image_file', imageFile);
    formData.append('model_file', modelFile);

    return this.http.post<any>(`${this.apiUrl}news/add`, formData);
  }

  getNews(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}news/get-all-record`);
  }

  deleteNews(id:number){
    return this.http.delete(`${this.apiUrl}news/delete/${id}`)
  } 

  //Certificate
  
  addCertificate(title: string, collegeName: string, imageFile: string, modelFile: string) {
    const formData: FormData = new FormData();
    formData.append('title', title);
    formData.append('college_name', collegeName);
    formData.append('image_file', imageFile);
    formData.append('model_file', modelFile);

    return this.http.post(`${this.apiUrl}certificate/add`, formData);
  }

  getCertificates() {
    return this.http.get(`${this.apiUrl}certificate/get-all-record`);
  }

  deleteCertificate(certificateId: string) {
    return this.http.delete(`${this.apiUrl}certificate/delete/${certificateId}`);
  }

  //MOU

  addMou(title: string, collegeName: string, imageFile: string) {
    const formData: FormData = new FormData();
    formData.append('title', title);
    formData.append('college_name', collegeName);
    formData.append('image_file', imageFile);

    return this.http.post(`${this.apiUrl}/mou/add`, formData);
  }
  
}

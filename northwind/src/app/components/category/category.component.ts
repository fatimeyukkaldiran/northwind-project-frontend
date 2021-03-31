import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
 category1:any={categoryName:"Elektronik"}
 category2:any={categoryName:"Teknoloji"}
 category3:any={categoryName:"Makina"}

 categories = [this.category1,this.category2,this.category3]
 constructor() { }

  ngOnInit(): void {
  }

}

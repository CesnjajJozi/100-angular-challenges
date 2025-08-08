import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-star-ratings",
  templateUrl: "./star-ratings.component.html",
  styleUrls: ["./star-ratings.component.scss"],
  standalone: false,
})
export class StarRatingsComponent {
  //TODO: previouse code that did memory leak
  // @Input() public rating = 5;

  // public get fullStars(): number[] {
  //   const totalFullStars = Math.floor(this.rating);

  //   return Array(totalFullStars).fill(0);
  // }

  // public get hasHalfStar(): boolean {
  //   const highestRating = 5;
  //   const hasHalfStar = (this.rating - Math.floor(this.rating) >= 0.5) && this.rating !== highestRating;

  //   return hasHalfStar;
  // }

  // public get emptyStars(): number[] {
  //   const highestRating = 5;
  //   const totalEmptyStars = Math.floor(highestRating - this.rating);

  //   return Array(totalEmptyStars).fill(0);
  // }

  @Input() rating = 0;
  @Input() maxStars = 5;
  @Output() ratingChange = new EventEmitter<number>();

  hoverRating = 0;

  get stars() {
    return Array.from({ length: this.maxStars }, (_, i) => ({
      id: i + 1,
      value: i + 1,
      filled: (this.hoverRating || this.rating) >= i + 1,
    }));
  }

  trackByStar(index: number, star: any): number {
    return star.id; // Use unique ID
  }

  getStarClass(star: any): string {
    return star.filled ? "fas fa-star filled" : "far fa-star";
  }

  setRating(rating: number): void {
    this.rating = rating;
    this.ratingChange.emit(rating);
  }
}

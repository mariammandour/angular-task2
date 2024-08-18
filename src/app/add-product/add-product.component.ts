import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../interfaces/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  @Output() productAdded = new EventEmitter<Product>();
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  submit() {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      this.productAdded.emit(formData);
      console.log('Product Added:', formData);
      this.productForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}

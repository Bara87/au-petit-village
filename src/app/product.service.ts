import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      "id": 1,
      "name": "Figurine Astérix",
      "description": "Retrouvez une figurine d'Astérix le Gaulois fabriquée en vinyle aux dimensions grandissimes !.",
      "price": 44.99,
      "image": "assets/images/asterix.jpg"
    },
    {
      "id": 2,
      "name": "Figurine Obélix",
      "description": "Découvrez une superbe figurine d’Obélix tenant Idéfix dans ses bras accompagnée d'un livre ! .",
      "price": 21.99,
      "image": "assets/images/obelix.jpg"
    },
    {
      "id": 3,
      "name": "Figurine Idéfix",
      "description": "Retrouvez une figurine d'Idéfix dans un format magistrale fabriquée en PVC, du haut de ces 30 cm",

      "price": 49.99,
      "image": "assets/images/idefix.jpg"
    },
    {
      "id": 4,
      "name": "Figurine Abraracourix",
      "description": "Craquez pour cette belle figurine en plastique de 9 cm aux finitions soignées !",
      "price": 23.99,
      "image": "assets/images/abraracourcix.jpg"
    },
    {
      "id": 5,
      "name": "Figurine Assurancetourix ",
      "description": "Craquez pour cette belle figurine en plastique de 10 cm aux finitions soignées !",
      "price": 20,
      "image": "assets/images/assurancetourix.jpg"
    },
    {
      "id": 6,
      "name": "Figurine Tragicomix ",
      "description": "Craquez pour cette belle figurine en plastique de 10 cm aux finitions soignées !",
      "price": 20,
      "image": "assets/images/tragicomix.jpg"
    },
    {
      "id": 7,
      "name": "Figurine Numérobis ",
      "description": "Craquez pour cette belle figurine en plastique de 6 cm aux finitions soignées !",
      "price": 20,
      "image": "assets/images/numerobis.jpg"
    },
    {
      "id": 8,
      "name": "Figurine Panoramix ",
      "description": "Craquez pour cette belle figurine en plastique de 9 cm aux finitions soignées !",
      "price": 20,
      "image": "assets/images/panoramix.jpg"
    },
    {
      "id": 9,
      "name": "Figurine Cléopâtre ",
      "description": "Cette figurine de 18 cm s'inspire de la planche 25, case 7 d'Astérix et Cléopâtre !",
      "price": 48.99,
      "image": "assets/images/cleopatre.jpg"
    },
    {
      "id": 10,
      "name": "Figurine Village d'astérix",
      "description": "Plongez dans l'univers des Gaulois en construisant le village mythique d'Astérix: la maison du héros, celle d’Obélix, de Panoramix, d’Assurancetourix, la carrière de menhirs, le banquet… ",
      "price": 650,
      "image": "assets/images/village-asterix.jpg"
    },
    {
      "id": 11,
      "name": "Figurine les femmes du Village ",
      "description": "Retrouvez les femmes du village, Bonnemine, Mme Cétautomatix, Mme Agecanonix. Elles boivent un thé et mangent un gâteau alors que Tullius Detritus s'apprête à mettre le village s'Astérix et Obélix sens dessus-dessous. ",
      "price": 375,
      "image": "assets/images/femmes-asterix.jpg"
    },
    {
      "id": 12,
      "name": "Scène copmlète le menhir d'or ",
      "description": "Cette scène collector reprend le visuel de couverture du titre Le Menhir d’or , écrit par René Goscinny et illustré par Albert Uderzo. ",
      "price": 500,
      "image": "assets/images/femmes-asterix.jpg"
    }
   
   
    // Ajoutez d'autres produits selon vos besoins
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}